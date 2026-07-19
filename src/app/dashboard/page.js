import Dashboard from "@/components/dashboards/deshboardsUi/Dashboard";

export const metadata = {
  title: "Dashboard",
  description:
    "Access your personalized dashboard to manage events, registrations, favorites, analytics, and account settings.",
  robots: {
    index: false,
    follow: false,
  },
};

function page() {
  return <Dashboard />;
}

export default page;
