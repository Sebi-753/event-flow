import CreateEventForm from "@/app/dashboard/newEvent/CreateEventForm";
import { getCurrentUser } from "@/lib/Data-services";

export const metadata = {
  title: "Create Event",
  description:
    "Create a new event by adding its details, schedule, location, capacity, and other essential information.",
  robots: {
    index: false,
    follow: false,
  },
};

export default async function Page() {
  const user = await getCurrentUser();

  if (!user || user.role !== "organizer") {
    throw new Error("You are not authorized to create an event!");
  }

  return <CreateEventForm />;
}
