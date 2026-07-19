import FooterSection from "@/components/sections/sectionsLandingpage/FooterSection";
import NavBar from "@/components/ui/NavBar";
import { getCurrentUser, getNotifications } from "@/lib/Data-services";

async function layout({ children }) {
  const [notifications, user] = await Promise.all([
    getNotifications(),
    getCurrentUser(),
  ]);
  return (
    <div>
      <NavBar user={user} notifications={notifications} />
      <main>{children}</main>
      <FooterSection />
    </div>
  );
}

export default layout;
