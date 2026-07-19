import ActivitySkeleton from "./ActivitySkeleton";

export default function ActivitiesSkeleton() {
  return (
    <ul className="flex flex-col gap-4">
      {Array.from({ length: 6 }).map((_, index) => (
        <ActivitySkeleton key={index} />
      ))}
    </ul>
  );
}
