import { supabase } from "./supabase";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export async function addProfile(user) {
  const { error } = await supabase
    .from("profiles")
    .upsert(user, {
      onConflict: "id",
    })
    .select()
    .single();
  if (error) throw new Error(error.message);
}

export async function getEvents() {
  let { data: events, error } = await supabase.from("events").select("*");

  if (error) throw new Error(error.message);

  return events;
}

export async function getEvent(id) {
  const { data: event, error } = await supabase
    .from("events")
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw new Error(error.message);

  return event;
}
export async function getProfileByEventId(eventId) {
  const { data: event, error } = await supabase
    .from("events")
    .select("created_by")
    .eq("id", eventId)
    .single();

  if (error) throw new Error(error.message);

  const { data: profile, error: profileError } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", event.created_by)
    .single();

  if (profileError) throw new Error(profileError.message);

  return profile;
}

export async function getCurrentUser() {
  const session = await getServerSession(authOptions);
  if (!session) return null;

  let { data: profile, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("google_id", session?.user?.googleId)
    .single();

  if (error) return null;
  return profile;
}
export async function getAllUsers() {
  const user = await getCurrentUser();
  if (!user) throw new Error("You are not authenticated");
  if (user.role !== "admin")
    throw new Error("You are not authorized to perform this action");

  const { data: users, error } = await supabase
    .from("profiles")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw new Error("you are not authorized to perform this action");
  return users;
}
export async function getUser(user_id) {
  const { data: user, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user_id)
    .single();
  if (error) throw new Error(error.message);

  return user;
}
export async function getAdmins() {
  const { data: profiles, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("role", "admin");

  if (error) throw new Error(error.message);

  return profiles;
}
export async function getRegistrations() {
  const user = await getCurrentUser();
  if (!user) throw new Error("You are not authenticated");
  if (user.role !== "admin")
    throw new Error("you are not authorized to perform this action");

  const { data: registrations, error } = await supabase
    .from("registrations")
    .select("*");

  if (error) throw new Error(error.message);

  return registrations;
}
export async function updateProfile(updatedData) {
  const currentUser = await getCurrentUser();
  if (!currentUser) throw new Error("You are not authenticated");

  const { error } = await supabase
    .from("profiles")
    .update(updatedData)
    .eq("google_id", currentUser.google_id)
    .select();

  return { error };
}

export async function checkIfRegistrationExists(event_id, user_id) {
  //this returs true if tehe registratin exists and false if it doest exist
  const { data: existing, error: checkError } = await supabase
    .from("registrations")
    .select("id")
    .eq("event_id", event_id)
    .eq("user_id", user_id)
    .maybeSingle();

  if (checkError) throw new Error(checkError.message);

  if (existing) {
    return true;
  }
  return false;
}

export async function getEventsAttendedByCurrentUser() {
  const user = await getCurrentUser();
  if (!user) throw new Error("You are not authenticated");

  const { data, error } = await supabase
    .from("registrations")
    .select(
      `
      status,
      events (*)
    `,
    )
    .eq("user_id", user.id);

  if (error) throw new Error(error.message);

  return data;
}
export async function getRegistration(user_id, event_id) {
  const user = await getCurrentUser();
  if (!user) return null;

  const { data, error } = await supabase
    .from("registrations")
    .select("*")
    .eq("user_id", user_id)
    .eq("event_id", event_id)
    .maybeSingle();

  if (error) throw new Error(error.message);

  return data;
}
export async function getFavoriteEvents() {
  const user = await getCurrentUser();
  if (!user) throw new Error("You are not authenticated");
  const { data: favoriteEvents, error } = await supabase
    .from("favourites")
    .select(
      `
    events (*)
  `,
    )
    .eq("user_id", user.id);
  if (error) throw new Error(error.message);

  return favoriteEvents;
}
export async function getIsFavorite(event_id) {
  const user = await getCurrentUser();
  if (!user) throw new Error("You are not authenticated");
  let { data: favourite, error } = await supabase
    .from("favourites")
    .select("*")
    .eq("event_id", event_id)
    .eq("user_id", user.id);

  if (error) throw new Error(error.message);

  if (!favourite.length) return false;

  return true;
}
export async function getFavoriteEventIds() {
  const user = await getCurrentUser();
  if (!user) throw new Error("You are not authenticated");

  const { data, error } = await supabase
    .from("favourites")
    .select("event_id")
    .eq("user_id", user.id);

  if (error) throw error;

  return data.map((fav) => fav.event_id);
}
export async function getOrganiserEvents() {
  const user = await getCurrentUser();
  if (!user) throw new Error("You are not authenticated");
  if (user.role !== "organizer")
    throw new Error(
      "You have to be an organizer to be able to access this info!",
    );

  let { data: events, error } = await supabase
    .from("events")
    .select("*")
    .eq("created_by", user.id);
  if (error) throw new Error("There wa a problem loading the events!");

  return events;
}

export async function getNumberOfRegistrations(organizerEvents) {
  const user = await getCurrentUser();
  if (!user) throw new Error("You are not authenticated");
  if (user.role !== "organizer")
    throw new Error(
      "You have to be an organizer to be able to access this info!",
    );

  let { data: registrations, error } = await supabase
    .from("registrations")
    .select("*");

  if (error) throw new Error("There is a problem loading the registrations");

  const eventsIds = organizerEvents.map((event) => event.id);

  const registrationsIds = registrations.map(
    (registration) => registration.event_id,
  );
  let num = 0;

  registrationsIds.forEach((reg) => {
    if (eventsIds.includes(reg)) num++;
  });
  return num;
}
export async function getEventsCreatedByOrganiser() {
  const user = await getCurrentUser();
  if (!user) throw new Error("You are not authenticated");

  if (user.role !== "organizer")
    throw new Error(
      "You have to be an organizer to be able to access this info!",
    );

  let { data: events, error } = await supabase
    .from("events")
    .select("*")
    .eq("created_by", user.id);

  if (error) throw new Error("There is a problem loading the registrations");

  return events;
}
export async function getRegistrationsOfOrganizerEvents(user) {
  if (user.role !== "organizer")
    throw new Error("You are not allowed to see the attendees!");

  const events = await getEventsCreatedByOrganiser();
  const eventIds = events.map((event) => event.id);

  const { data, error } = await supabase
    .from("registrations")
    .select(
      `
        id,
        status,
        registered_at,
        cancelled_at,
      event:events (
         id,
         title,
         date,
         image_url,
         time,
         location
       ),
         user:profiles (
         id,
         fullName,
         email,
         avatar
       )
       `,
    )
    .in("event_id", eventIds);

  if (error) throw new Error(error.message);

  return data;
}
export async function getUserEventsCount(userId) {
  const { count, error } = await supabase
    .from("events")
    .select("*", { count: "exact", head: true })
    .eq("created_by", userId);

  if (error) throw new Error("There was a problem loading the events.");

  return count ?? 0;
}
export async function getAllReviews() {
  let { data: reviews, error } = await supabase.from("reviews").select("*");

  if (error) throw new Error(error.message);

  return reviews;
}
export async function getFirstReviews() {
  let { data: reviews, error } = await supabase
    .from("reviews")
    .select("*")
    .range(0, 3);

  if (error) throw new Error(error.message);

  return reviews;
}
export async function getEventReviews(eventId) {
  let { data: reviews, error } = await supabase
    .from("reviews")
    .select("*")
    .eq("event_id", eventId);

  if (error) throw new Error(error.message);

  return reviews;
}
export async function getUserByReviewId(reviewId) {
  const { data: review, error } = await supabase
    .from("reviews")
    .select("user_id")
    .eq("id", reviewId)
    .single();

  if (error) throw new Error(error.message);

  const { data: profile, error: profileError } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", review.user_id)
    .single();

  if (profileError) throw new Error(profileError.message);

  return profile;
}
export async function getEventByReviewId(reviewId) {
  const { data: review, error } = await supabase
    .from("reviews")
    .select("event_id")
    .eq("id", reviewId)
    .single();

  if (error) throw new Error(error.message);

  const { data: event, error: eventError } = await supabase
    .from("events")
    .select("*")
    .eq("id", review.event_id)
    .single();

  if (eventError) throw new Error(eventError.message);

  return event;
}
export async function checkIfUserAttendedTheEvent(event_id, user_id) {
  const { data: registration, error } = await supabase
    .from("registrations")
    .select("id")
    .eq("user_id", user_id)
    .eq("event_id", event_id);

  if (error) throw new Error(error.message);

  return registration.length > 0;
}
export async function getEventRatingStats(eventId) {
  const { data: reviews, error } = await supabase
    .from("reviews")
    .select("rating")
    .eq("event_id", eventId);

  if (error) throw new Error(error.message);

  const num_ratings = reviews.length;

  if (num_ratings === 0) {
    return {
      average_rating: 0,
      num_ratings: 0,
    };
  }

  const total = reviews.reduce((sum, review) => sum + Number(review.rating), 0);

  return {
    average_rating: Number((total / num_ratings).toFixed(1)),
    num_ratings,
  };
}
export async function getAverageRatingForOrganizerEvents(user) {
  // Get organizer's events
  const { data: events, error: eventsError } = await supabase
    .from("events")
    .select("id")
    .eq("created_by", user.id);

  if (eventsError) throw new Error(eventsError.message);

  if (!events.length) return 0;

  const eventIds = events.map((event) => event.id);

  // Get reviews for those events
  const { data: reviews, error: reviewsError } = await supabase
    .from("reviews")
    .select("rating")
    .in("event_id", eventIds);

  if (reviewsError) throw new Error(reviewsError.message);

  if (!reviews.length) return 0;

  const total = reviews.reduce((sum, review) => sum + Number(review.rating), 0);

  return Number((total / reviews.length).toFixed(1));
}
export async function getActivities() {
  const user = await getCurrentUser();
  if (!user) throw new Error("You are not authenticated");
  if (user.role !== "admin")
    throw new Error("You are not authorized to see the recent activities!");

  const { data: activities, error } = await supabase
    .from("activities")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(30);
  if (error) throw new Error(error.message);

  return activities;
}
export async function createActivity({
  type,
  performed_by,
  event_id = null,
  target_user_id = null,
  metadata = null,
}) {
  const { error } = await supabase.from("activities").insert({
    type,
    performed_by,
    event_id,
    target_user_id,
    metadata,
  });

  if (error) throw new Error(error.message);
}
export async function createNotification(notification) {
  const { error } = await supabase.from("notifications").insert(notification);
  if (error) throw new Error(error.message);
}
export async function getNotifications() {
  const user = await getCurrentUser();

  if (!user) return [];

  const { data, error } = await supabase
    .from("notifications")
    .select(
      `
      *,
      performedBy:performed_by (
        id,
        fullName,
        avatar
      ),
      targetUser:target_user_id (
        id,
        fullName,
        avatar
      ),
      event:event_id (
        id,
        title
      )
    `,
    )
    .or(`recipient_role.eq.${user.role},recipient_id.eq.${user.id}`)
    .order("created_at", { ascending: false });

  if (error) throw new Error(error.message);

  return data;
}
