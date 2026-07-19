"use server";

import {
  checkIfRegistrationExists,
  checkIfUserAttendedTheEvent,
  createActivity,
  createNotification,
  getAdmins,
  getCurrentUser,
  getEvent,
  getEventRatingStats,
  getEventReviews,
  getIsFavorite,
  getProfileByEventId,
  getUser,
  updateProfile,
} from "./Data-services";
import { supabase } from "./supabase";
import { revalidatePath } from "next/cache";

export async function createEventAction(formData) {
  const user = await getCurrentUser();
  //checking if the user is signed in
  if (!user) throw new Error("You are not authenticated");

  //checking if the user is authorized to continue creating an event
  if (user.role !== "organizer")
    throw new Error("You do not have permission to create events");
  const created_by = user.id;

  //uploading images
  const file = formData.get("image_url");
  if (!file || file.size === 0) {
    return {
      success: false,
      message: "Please upload an image",
    };
  }
  const fileName = `public/${Date.now()}-${file.name}`;

  const { error: uploadError } = await supabase.storage
    .from("event-images")
    .upload(fileName, file);

  if (uploadError) {
    throw new Error(uploadError.message);
  }

  //getting the url
  const { data } = supabase.storage.from("event-images").getPublicUrl(fileName);

  const publicUrl = data.publicUrl;

  //geeting the data from the form
  const title = formData.get("title");
  const description = formData.get("description");
  const time = formData.get("time");
  const date = formData.get("date");
  const type = formData.get("type");
  const street = formData.get("street");
  const city = formData.get("city");
  const country = formData.get("country");
  const capacity = Number(formData.get("capacity"));

  const location = `${street} ,${city}, ${country}`;

  //creating an event object
  const event = {
    title,
    description,
    time,
    image_url: publicUrl,
    capacity,
    date,
    type,
    location,
    created_by,
  };

  //adding the event to the data base
  const { data: newEvent, error } = await supabase
    .from("events")
    .insert(event)
    .select()
    .single();

  //returning for toasts
  if (error) {
    return {
      success: false,
      message: error.message,
    };
  }

  //notifications
  const admins = await getAdmins();

  await Promise.all(
    admins.map((admin) =>
      createNotification({
        type: "event_created",
        recipient_id: admin.id,
        performed_by: user.id,
        event_id: newEvent.id,
        metadata: {},
      }),
    ),
  );

  //activities
  await createActivity({
    type: "event_created",
    performed_by: user.id,
    event_id: newEvent.id,
    metadata: {},
  });

  revalidatePath("/dashboard/activities");

  return {
    success: true,
    message: "Event created successfully!",
  };
}

export async function updateProfileAction(formData) {
  // checking if the user is signed in
  const user = await getCurrentUser();
  if (!user) throw new Error("You are not authenticated");

  //getting the avatar from the form
  const file = formData.get("avatar");

  let publicUrl = null;

  //checking if there is a file passed into the form
  if (file && file.size > 0) {
    //if there is then create a fileName
    const fileName = `public/${Date.now()}-${file.name}`;

    //adding te file to spabase
    const { error } = await supabase.storage
      .from("avatars")
      .upload(fileName, file);

    //throw an error if there is an error
    if (error)
      return {
        success: false,
        message: error.message,
      };

    //getting the url from the supabase storage
    const { data } = supabase.storage.from("avatars").getPublicUrl(fileName);
    publicUrl = data?.publicUrl;
  }

  //getting the rest of the form info
  const fullName = formData.get("fullName");
  const bio = formData.get("bio");

  //creating the object that will be passed into supabase for updating the profile
  const updatedData = {
    fullName,
    bio,
  };

  //if there is an image add it to the updating object
  if (publicUrl) {
    updatedData.avatar = publicUrl;
  }

  //updating the data in supabase
  const { error } = await updateProfile(updatedData);

  //revalidating the path after each update
  revalidatePath("/profile");

  //returns for toasts
  if (error) {
    return {
      success: false,
      message: error.message,
    };
  }

  return {
    success: true,
    message: "Profile updated successfully!",
  };
}
export async function attendEvent(event_id, user_id) {
  // 1. check if already registered
  const exists = await checkIfRegistrationExists(event_id, user_id);
  const currentUser = await getUser(user_id);

  const registered_at = new Date(Date.now());

  // 2. insert only if the user is not already registered for this event
  if (exists) throw new Error("You are already registered to this event");

  //getting the event
  const { data: event, error: eventError } = await supabase
    .from("events")
    .select("*")
    .eq("id", event_id)
    .single();
  if (eventError) throw new Error(eventError.message);

  // be able to attend only if you are not the creator of the event
  if (event.created_by === user_id)
    throw new Error("You can not register for your own event!");

  //if event is full, the user can not attend
  if (event.places_taken >= event.capacity) throw new Error("Event is full");

  //updating the event

  //icrese the taken places
  const { error: updateError } = await supabase
    .from("events")
    .update({
      places_taken: event.places_taken + 1,
    })
    .eq("id", event_id)
    .select();

  if (updateError) throw new Error(updateError.message);

  //if everithing is ok add registration
  const { data, error } = await supabase
    .from("registrations")
    .insert({ event_id, user_id, registered_at })
    .select();

  //notification
  await Promise.all([
    createNotification({
      type: "registration",
      recipient_id: event.created_by,
      performed_by: currentUser.id,
      event_id: event.id,
      metadata: {},
    }),

    //add it as an activity
    createActivity({
      type: "registration",
      performed_by: user_id,
      event_id,
      metadata: {
        eventTitle: event.title,
      },
    }),
  ]);

  if (error) throw new Error(error.message);

  revalidatePath("/dashboard/activities");

  return data;
}

export async function cancelRegistration(event_id) {
  const user = await getCurrentUser();
  if (!user) throw new Error("User is not authenticated");

  const event = await getEvent(event_id);

  //registration update
  const { error } = await supabase
    .from("registrations")
    .delete()
    .eq("event_id", event_id)
    .eq("user_id", user.id)
    .single();

  if (error) throw new Error("You can not cancel the registration");

  const { error: updateEventError } = await supabase
    .from("events")
    .update({ places_taken: event.places_taken - 1 })
    .eq("id", event_id)
    .select();
  if (updateEventError) throw new Error("You can not cancel the registration");

  const organizer = await getProfileByEventId(event_id);

  await Promise.all([
    createNotification({
      recipient_id: organizer.id,
      performed_by: user.id,
      event_id,
      target_user_id: user.id,
      type: "registration_cancelled",
      metadata: {
        eventTitle: event.title,
        attendeeName: user.fullName,
      },
      read: false,
    }),
    createActivity({
      type: "registration_cancelled",
      performed_by: user.id,
      event_id: event.id,
      target_user_id: user.id,
      metadata: {
        eventTitle: event.title,
      },
    }),
  ]);
  revalidatePath("/dashboard/attends");
}
export async function toggleFavorite(eventId) {
  const user = await getCurrentUser();
  if (!user) throw new Error("You are not authenticated!");

  const isFavorite = await getIsFavorite(eventId);

  if (!isFavorite) {
    const { error } = await supabase
      .from("favourites")
      .insert({ user_id: user.id, event_id: eventId })
      .select();
    if (error) throw new Error(error.message);
  } else if (isFavorite) {
    const { error } = await supabase
      .from("favourites")
      .delete()
      .eq("user_id", user.id)
      .eq("event_id", eventId);

    if (error) throw new Error(error.message);
  }

  revalidatePath("/dashboard/events");
}
export async function getIsFavoriteAction(event_id) {
  const user = await getCurrentUser();

  if (!user) return false;

  let { data: favourite, error } = await supabase
    .from("favourites")
    .select("*")
    .eq("event_id", event_id)
    .eq("user_id", user.id);

  if (error) throw new Error(error.message);

  if (!favourite.length) return false;

  return true;
}
export async function deleteEvent(user, event) {
  if (user.role !== "organizer")
    throw new Error("You are not authorized to delete this event");

  let { error: errorRegistrations } = await supabase
    .from("registrations")
    .delete()
    .eq("event_id", event.id);

  if (errorRegistrations) throw new Error(errorRegistrations);
  // throw new Error("You are not authorized to delete this event");

  let { error: errorFavourites } = await supabase
    .from("favourites")
    .delete()
    .eq("event_id", event.id);

  if (errorFavourites) throw new Error(errorFavourites);
  // throw new Error("You are not authorized to delete this event");

  let { error: errorReviews } = await supabase
    .from("reviews")
    .delete()
    .eq("event_id", event.id);

  if (errorReviews) throw new Error(errorReviews);
  // throw new Error("You are not authorized to delete this event");
  const { error } = await supabase.from("events").delete().eq("id", event.id);
  if (error) throw new Error(error);

  revalidatePath("/dashboard");
  revalidatePath("/dashboard/events");
}
export async function deleteReview(review, user_id) {
  //checking if the user wrote the review
  if (review.user_id !== user_id)
    throw new Error("You can not delete someone else s review");

  const { error } = await supabase
    .from("reviews")
    .delete()
    .eq("id", review.id)
    .eq("user_id", user_id);
  if (error) throw new Error("There was an error deleting the review!");

  revalidatePath(`/events/${review.event_id}`);
}
export async function toggleSuspendUser(user) {
  //getting the current user
  const currentUser = await getCurrentUser();

  //verifyign that the user is logged in
  if (!currentUser) throw new Error("You are not authenticated");

  //verifying that the user is admin and the suspended user is not admin
  if (currentUser.role !== "admin" || user.role === "admin")
    throw new Error("You are not authorized to suspend this user");

  //gettung the status
  const status = user.status === "active" ? "suspended" : "active";

  //updating the profile
  const { error } = await supabase
    .from("profiles")
    .update({ status })
    .eq("id", user.id);

  if (error) throw new Error("An error occurred while updating the user.");

  //notification
  await createNotification({
    type: status === "suspended" ? "user_suspended" : "user_reactivated",
    recipient_id: user.id,
    performed_by: currentUser.id,
    target_user_id: user.id,
    metadata: {},
  });

  //activity
  await createActivity({
    type: status === "suspended" ? "user_suspended" : "user_reactivated",
    performed_by: currentUser.id,
    target_user_id: user.id,
    metadata: {},
  });

  //revalidating paths
  revalidatePath("/dashboard/users");
  revalidatePath("/dashboard/activities");
}
export async function addReview(formData) {
  //check if user exists
  const user = await getCurrentUser();
  if (!user) throw new Error("You are not authenticated!");

  //getting the data from the form
  const rating = Number(formData.get("rating"));
  const comment = formData.get("comment");
  const event_id = Number(formData.get("event_id"));
  const user_id = user.id;

  //this checks if the user attended this event
  const userAttendedTheEvent = await checkIfUserAttendedTheEvent(
    event_id,
    user_id,
  );
  //if the user didn t attend the event he can not leave a review
  if (!userAttendedTheEvent) throw new Error("You did not attend this event!");

  //checking if the user filled the form
  if (!rating || rating < 1 || rating > 5) {
    return {
      success: false,
      message: "Please select a rating.",
    };
  }
  if (!comment) {
    return {
      success: false,
      message: "Please write a comment.",
    };
  }

  //getting the reviews for this speciffic event
  const eventReviews = await getEventReviews(event_id);

  //checking if the user already left a review
  let userLeftAReview = false;
  eventReviews.forEach((review) => {
    if (review.user_id == user_id) userLeftAReview = true;
  });
  //if the user left a review he can not leave anotherone
  if (userLeftAReview) throw new Error("You already left a review!");

  //if there is no error add the review
  const { error } = await supabase
    .from("reviews")
    .insert({ rating, comment, event_id, user_id })
    .select();
  if (error) throw new Error("You are not authorized to leave a review!");

  //getting the avarage and the number of ratings from the database
  const { average_rating, num_ratings } = await getEventRatingStats(event_id);

  //updating the event(avarage and the number of events)
  const { error: updateError } = await supabase
    .from("events")
    .update({
      average_rating,
      num_ratings,
    })
    .eq("id", event_id);

  if (updateError) throw new Error(updateError.message);

  //getting the event
  const event = await getEvent(event_id);

  //notification
  await Promise.all([
    createNotification({
      type: "review_created",
      recipient_id: event.created_by,
      performed_by: user.id,
      event_id: event.id,
      metadata: {
        rating,
      },
    }),

    //activity
    createActivity({
      type: "review_created",
      performed_by: user_id,
      event_id,
      metadata: {
        rating,
        eventTitle: event.title,
      },
    }),
  ]);

  revalidatePath(`/events/${event_id}`);
  revalidatePath("/dashboard/activities");
}
export async function changeUserRole(user, role) {
  //gets the current user
  const currentUser = await getCurrentUser();

  //checks if the userr is authenticated  and authorized
  if (!currentUser) throw new Error("You are not authenticated.");
  if (currentUser.role !== "admin") throw new Error("You are not authorized.");

  //if the user is admin it s role can not be changed
  if (user.role === "admin")
    throw new Error("You are not authorized to change an admins role!");

  //changes the user s role
  const { error } = await supabase
    .from("profiles")
    .update({ role })
    .eq("id", user.id);

  if (error) throw new Error(error.message);

  await Promise.all([
    //notification
    createNotification({
      type: "role_changed",
      recipient_id: user.id,
      target_user_id: user.id,
      performed_by: currentUser.id,
      metadata: {
        oldRole: user.role,
        newRole: role,
      },
    }),

    //activity
    createActivity({
      type: "role_changed",
      performed_by: currentUser.id,
      target_user_id: user.id,
      metadata: {
        oldRole: user.role,
        newRole: role,
      },
    }),
  ]);

  revalidatePath("/dashboard/users");
  revalidatePath("/dashboard/activities");
}
export async function markAllNotificationsAsRead() {
  const user = await getCurrentUser();

  if (!user) throw new Error("Unauthorized");

  const { error } = await supabase
    .from("notifications")
    .update({ read: true })
    .or(`recipient_role.eq.${user.role},recipient_id.eq.${user.id}`)
    .eq("read", false);

  if (error) throw new Error(error.message);

  revalidatePath("/");
}
