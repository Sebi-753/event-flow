import {
  MdOutlineCalendarMonth,
  MdOutlinePeople,
  MdOutlineStar,
} from "react-icons/md";
import Stat from "./Stat";
import {
  getAverageRatingForOrganizerEvents,
  getNumberOfRegistrations,
  getOrganiserEvents,
} from "@/lib/Data-services";

async function StatsList({ user }) {
  const events = await getOrganiserEvents();
  const satisfaction = await getAverageRatingForOrganizerEvents(user);

  const eventsLength = events.length;

  const registrationsNum = await getNumberOfRegistrations(events);

  return (
    <ul className="mt-10 grid grid-cols-3 gap-6">
      <Stat
        title={"Total Events"}
        icon={MdOutlineCalendarMonth}
        value={eventsLength}
      />
      <Stat
        title={"Registrations"}
        icon={MdOutlinePeople}
        value={registrationsNum}
      />
      <Stat
        title={"Satisfaction"}
        icon={MdOutlineStar}
        value={`${satisfaction} / 5`}
      />
    </ul>
  );
}

export default StatsList;
