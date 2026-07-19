import { getCurrentUser } from "@/lib/Data-services";
import SidebarAttandee from "../attendee/SideBarAttendee";
import SideBarOrgniser from "../organizer/SideBarOrgniser";
import SideBarAdmin from "../admin/SideBarAdmin";

async function SideBar() {
  const user = await getCurrentUser();
  if (user.role === "attendee") return <SidebarAttandee user={user} />;
  else if (user.role === "organizer") return <SideBarOrgniser user={user} />;
  else if (user.role === "admin") return <SideBarAdmin user={user} />;
}

export default SideBar;
