import AttendesList from "@/components/ui/AttendesList";
import {
  getCurrentUser,
  getRegistrationsOfOrganizerEvents,
} from "@/lib/Data-services";

export const metadata = {
  title: "Attendees",
  description:
    "Manage attendees, monitor activity, and view participant information.",
  robots: {
    index: false,
    follow: false,
  },
};

async function page() {
  const user = await getCurrentUser();
  const data = await getRegistrationsOfOrganizerEvents(user);

  return (
    <section className="flex flex-col px-6 py-10 sm:px-10">
      <header className="flex flex-col gap-2 text-center md:text-start">
        <h2 className="xs:text-3xl text-2xl font-semibold">
          Registration & Attendees
        </h2>
        <p className="xs:text-base text-sm text-[var(--text-secondary)]">
          All registered attendees across your events.
        </p>
      </header>

      <AttendesList data={data} />
    </section>
  );
}

export default page;
