import { Suspense } from "react";

import SideBar from "@/components/dashboards/deshboardsUi/SideBar";
import SidebarSkeleton from "@/components/skeletons/SidebarSkeleton";

function Layout({ children }) {
  return (
    <div className="grid h-screen md:grid-cols-[15rem_85fr]">
      <Suspense fallback={<SidebarSkeleton />}>
        <SideBar />
      </Suspense>
      <main className="overflow-y-auto bg-[var(--bg-secondary)]">
        {children}
      </main>
    </div>
  );
}

export default Layout;
