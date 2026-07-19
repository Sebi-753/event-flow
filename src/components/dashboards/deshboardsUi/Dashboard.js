import { getCurrentUser } from "@/lib/Data-services";
import DashboardAdmin from "../admin/DashboardAdmin";
import DashboardAttendee from "../attendee/DashboardAttendee";
import DashboardOrganizer from "../organizer/DashboardOrganizer";

async function Dashboard() {
  const user = await getCurrentUser();
  if (user.role === "attendee") return <DashboardAttendee />;
  else if (user.role === "organizer") return <DashboardOrganizer />;
  else if (user.role === "admin") return <DashboardAdmin />;
}

export default Dashboard;
