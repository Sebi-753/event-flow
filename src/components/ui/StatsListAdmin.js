import { MdOutlineEvent, MdOutlinePeople } from "react-icons/md";
import Stat from "./Stat";
import { getAllUsers, getEvents, getRegistrations } from "@/lib/Data-services";
import { FiUserCheck } from "react-icons/fi";

async function StatsListAdmin() {
  //getting the users
  const users = await getAllUsers();
  const usersLength = users.length;

  //getting the events
  const now = new Date();

  const events = await getEvents();
  const eventsLegth = events.filter(
    (event) => new Date(event.date) > now,
  ).length;

  //getting the registrations

  const registrations = await getRegistrations();
  const regisrtationsLength = registrations.length;

  return (
    <ul className="mt-10 grid grid-cols-3 gap-6">
      <Stat title={"Total Users"} icon={MdOutlinePeople} value={usersLength} />
      <Stat title={"Active Events"} icon={MdOutlineEvent} value={eventsLegth} />
      <Stat
        title={"Registrations"}
        icon={FiUserCheck}
        value={regisrtationsLength}
      />
    </ul>
  );
}

export default StatsListAdmin;
