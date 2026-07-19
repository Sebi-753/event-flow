import ActivitiesSkeleton from "@/components/skeletons/ActivitiesSkeleton";
import Activities from "@/components/ui/Activities";
import { Suspense } from "react";

export const metadata = {
  title: "Activities",
  description:
    "View recent activity, monitor important actions, and stay updated with the latest changes across the platform.",
  robots: {
    index: false,
    follow: false,
  },
};

function page() {
  return (
    <div className="xs:px-10 px-6 py-10">
      <header className="text-center font-semibold md:text-start">
        <h2 className="text-2xl">Recent activities</h2>
        <h3 className="text-base text-[var(--text-secondary)]">
          An overview of the recent activities
        </h3>
      </header>
      <main className="my-10 h-[70vh] scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent overflow-y-auto rounded-3xl border border-gray-200 bg-white p-6 shadow-sm hover:scrollbar-thumb-gray-400">
        <Suspense fallback={<ActivitiesSkeleton />}>
          <Activities />
        </Suspense>
      </main>
    </div>
  );
}

export default page;
