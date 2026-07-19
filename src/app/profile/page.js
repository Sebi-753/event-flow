import ProfileForm from "@/components/ui/ProfileForm";

export const metadata = {
  title: "Profile",
  description:
    "View and manage your EventFlow profile, update your personal information, avatar, and account settings.",
  keywords: ["profile", "account", "user profile", "settings", "EventFlow"],
};
async function page() {
  return (
    <section className="xs:px-30 bg-[var(--bg-secondary)] px-10 py-25 md:px-50 xl:px-80">
      <header className="flex w-full flex-col gap-1 text-center md:text-start">
        <h2 className="2xs:text-2xl text-xl font-semibold">Profile Settings</h2>
        <p className="2xs:text-sm text-xs text-[var(--text-secondary)]">
          Manage your personal information and account preferences.
        </p>
      </header>

      <ProfileForm />
    </section>
  );
}

export default page;
