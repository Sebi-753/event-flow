import Link from "next/link";
import { format } from "date-fns";
import { FaStar } from "react-icons/fa";
import { MdDateRange, MdLocationOn, MdPeople } from "react-icons/md";

import {
  checkIfRegistrationExists,
  getCurrentUser,
  getEvent,
  getEventReviews,
  getProfileByEventId,
} from "@/lib/Data-services";
import RegisterButton from "@/components/ui/RegisterButton";
import { attendEvent } from "@/lib/actions";
import FavouriteButtonServer from "@/components/ui/FavouriteButtonServer";
import ReviewsList from "@/components/reviews/ReviewsList";
import ReviewInput from "@/components/reviews/ReviewInput";

export async function generateMetadata({ params }) {
  const { eventId } = await params;
  const event = await getEvent(eventId);

  if (!event) {
    return {
      title: "Event not found",
      description: "The requested event could not be found.",
    };
  }

  return {
    title: `${event.title}`,
    description:
      event.description.length > 160
        ? `${event.description.slice(0, 157)}...`
        : event.description,

    keywords: [event.title, event.type, event.location, "events", "EventFlow"],

    openGraph: {
      title: event.title,
      description: event.description,
      images: [
        {
          url: event.image_url,
          width: 1200,
          height: 630,
          alt: event.title,
        },
      ],
      type: "website",
    },
  };
}

async function page({ params }) {
  const currentUser = await getCurrentUser();

  //getting the event id from the url
  const { eventId } = await params;
  //getting the event the t shoul be displayed
  const event = await getEvent(eventId);
  //geeting the usert(organizer) that creted this event
  const organiser = await getProfileByEventId(event.id);

  const alreadyAttending = await checkIfRegistrationExists(
    event.id,
    currentUser.id,
  );

  //checking if the event is passed
  const isPast = new Date(event.date) < new Date();
  //formmating the date
  const date = new Date(event.date);
  const formattedDate = format(date, "MMM dd, yyyy");

  //creating the innitials of the organizer
  const initialsIcon = organiser.fullName
    .split(" ")
    .map((el) => el[0].toUpperCase())
    .join("");

  //getting the reviews for this speciffic event
  const reviews = await getEventReviews(eventId);

  //seats left
  const seatsLeft = event.capacity - event.places_taken;
  const isFull = seatsLeft <= 0;

  const userIsNotTheOrganizer = organiser.id !== currentUser.id;

  async function handleRegister() {
    "use server";
    if (!currentUser) return;

    await attendEvent(eventId, currentUser.id);
  }

  return (
    <section className="xs:px-16 px-10 py-30 sm:px-30">
      <header
        className={`xs:h-45 relative h-45 rounded-xl bg-black/60 bg-cover bg-center bg-blend-darken sm:h-64`}
        style={{ backgroundImage: `url(${event.image_url})` }}
      >
        <div className="absolute bottom-[10%] left-[10%] flex flex-col gap-2 lg:bottom-[10%] lg:left-[10%]">
          <h4 className="flex w-[50%] items-center justify-center rounded-2xl bg-[var(--bg-secondary)] py-1 text-sm font-medium text-[var(--indigo-600)] sm:text-base">
            {event.type}
          </h4>
          <div className="flex items-center gap-6">
            <h2 className="text-xl font-semibold text-[var(--text-inverse)] sm:text-3xl">
              {event.title}
            </h2>
            <FavouriteButtonServer event={event} />
          </div>
        </div>
      </header>
      <main className="mx-auto w-full">
        <div className="my-12 flex gap-6 rounded-xl bg-[var(--bg-secondary)] p-4 shadow-sm">
          <p className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--indigo-100)] font-bold text-[var(--indigo-700)]">
            {initialsIcon}
          </p>
          <div>
            <h4 className="text-xs font-semibold text-[var(--text-disabled)] uppercase">
              Organized by
            </h4>
            <span className="text-lg font-semibold">{organiser.fullName}</span>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="flex flex-col gap-2 rounded-xl bg-[var(--bg-secondary)] p-4 shadow-sm">
            <div className="flex items-center gap-2">
              <MdDateRange className="text-lg text-[var(--indigo-600)]" />
              <p className="text-sm font-semibold text-[var(--text-tertiary)] uppercase">
                Date & Time
              </p>
            </div>
            <div className="font-semibold">
              {formattedDate} : {event.time}
            </div>
          </div>
          <div className="flex flex-col gap-2 rounded-xl bg-[var(--bg-secondary)] p-4 shadow-sm">
            <div className="flex items-center gap-2">
              <MdLocationOn className="text-lg text-[var(--indigo-600)]" />
              <p className="text-sm font-semibold text-[var(--text-tertiary)] uppercase">
                Location
              </p>
            </div>
            <p className="font-semibold">{event.location}</p>
          </div>
          <div className="flex flex-col gap-2 rounded-xl bg-[var(--bg-secondary)] p-4 shadow-sm">
            <div className="flex items-center gap-2">
              <MdPeople className="text-lg text-[var(--indigo-600)]" />
              <p className="text-sm font-semibold text-[var(--text-tertiary)] uppercase">
                Availability
              </p>
            </div>
            {isFull ? (
              <p className="font-semibold">0 seats left</p>
            ) : (
              <p className="font-semibold">
                {event?.places_taken} of {event?.capacity} seats left
              </p>
            )}
          </div>
          <div className="flex flex-col gap-2 rounded-xl bg-[var(--bg-secondary)] p-4 shadow-sm">
            <div className="flex items-center gap-2">
              <FaStar className="text-lg text-[var(--indigo-600)]" />
              <p className="text-sm font-semibold text-[var(--text-tertiary)] uppercase">
                Rating
              </p>
            </div>
            <p className="font-semibold">{reviews.length} reviews</p>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-4">
          <h3 className="text-lg font-semibold">About this event</h3>
          <p className="text-[var(--text-secondary)]">{event.description}</p>
        </div>
        <div className="mt-6 flex justify-end gap-4">
          {/* Secondary button */}
          <button className="rounded-xl border border-[var(--indigo-600)] px-6 py-3 font-semibold text-[var(--indigo-600)] transition hover:bg-[var(--indigo-50)]">
            <Link href={"/events"}>Browse for more events</Link>
          </button>

          {/* Primary button */}
          {!isPast && userIsNotTheOrganizer && (
            <RegisterButton
              disabled={alreadyAttending || isFull}
              handleRegister={handleRegister}
            />
          )}
        </div>
        {/* Reviews */}
        {isPast && (
          <aside className="mt-10">
            <h3 className="text-lg font-semibold">Reviews</h3>

            <ReviewInput eventId={event.id} />
            <ReviewsList reviews={reviews} />
          </aside>
        )}
      </main>
    </section>
  );
}

export default page;
