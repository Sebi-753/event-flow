import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function EventSkeleton() {
  return (
    <div className="relative grid h-fit w-full grid-cols-2 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm lg:flex lg:h-[20rem] lg:flex-col">
      {/* IMAGE */}
      <div className="relative w-full overflow-hidden lg:h-1/2">
        <Skeleton className="h-full w-full" />
      </div>

      {/* TOP BADGES */}
      <div className="absolute top-3 right-3 left-3 flex items-center justify-between">
        <Skeleton width={70} height={24} borderRadius={999} />

        <Skeleton circle width={32} height={32} />
      </div>

      {/* CONTENT */}
      <div className="flex h-1/2 flex-col justify-between p-4">
        <div>
          <Skeleton width="75%" height={24} />

          <div className="mt-4 space-y-3">
            <div className="flex items-center gap-2">
              <Skeleton circle width={16} height={16} />
              <Skeleton width={140} />
            </div>

            <div className="flex items-center gap-2">
              <Skeleton circle width={16} height={16} />
              <Skeleton width={120} />
            </div>
          </div>
        </div>

        <div>
          <div className="my-3 h-px bg-gray-200" />

          <div className="flex flex-col items-start justify-between gap-2 lg:flex-row lg:items-center">
            <div className="flex items-center gap-2">
              <Skeleton width={90} />
            </div>

            <div className="flex w-full items-center gap-2 lg:w-[52%]">
              <Skeleton height={8} className="flex-1" />
              <Skeleton width={45} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventSkeleton;
