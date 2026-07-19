import Role from "@/components/ui/Role";

export const metadata = {
  title: "Roles",
  description: "Information about the roles and the autorizations.",
  robots: {
    index: false,
    follow: false,
  },
};

function page() {
  return (
    <div className="xs:px-10 px-6 py-10">
      <header className="text-center font-semibold md:text-start">
        <h2 className="text-2xl">Role Management</h2>
        <h3 className="text-base text-[var(--text-secondary)]">
          Platform roles and their associated permissions.
        </h3>
      </header>
      <main className="mt-10 flex flex-col gap-4">
        <Role type="admin" />
        <Role type="organizer" />
        <Role type="attendee" />
      </main>
    </div>
  );
}

export default page;
