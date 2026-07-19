import { getActivities } from "@/lib/Data-services";
import Activity from "./Activity";

async function Activities() {
  const activities = await getActivities();

  return (
    <ul className="flex flex-col gap-4">
      {activities.map((activity) => (
        <Activity activity={activity} key={activity.id} />
      ))}
    </ul>
  );
}

export default Activities;
