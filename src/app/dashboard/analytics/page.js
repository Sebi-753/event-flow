import AnalyticsAdmin from "@/components/dashboards/deshboardsUi/AnalyticsAdmin";
import AnalyticsOrganizer from "@/components/dashboards/deshboardsUi/AnalyticsOrganizer";
import {
  getCurrentUser,
  getRegistrationsOfOrganizerEvents,
} from "@/lib/Data-services";
export const metadata = {
  title: "Analytics",
  description:
    "Track event performance, registrations, attendance, and platform insights.",
  robots: {
    index: false,
    follow: false,
  },
};
async function page() {
  const user = await getCurrentUser();
  const registrations = await getRegistrationsOfOrganizerEvents(user);
  if (user.role === "organizer")
    return <AnalyticsOrganizer user={user} registrations={registrations} />;
  if (user.role === "admin") return <AnalyticsAdmin />;
}

export default page;
