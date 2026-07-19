import Link from "next/link";
import EmptyState from "@/components/ui/EmptyState";
import UsersList from "@/components/ui/UsersList";
import { getAllUsers, getUserEventsCount } from "@/lib/Data-services";

export const metadata = {
  title: "Users",
  description:
    "Manage user accounts, roles, permissions, and account status across the EventFlow platform.",
  robots: {
    index: false,
    follow: false,
  },
};

async function Page() {
  const users = await getAllUsers();

  const usersWithCounts = await Promise.all(
    users.map(async (user) => ({
      ...user,
      eventsCount: await getUserEventsCount(user.id),
    })),
  );

  return (
    <section className="px-3 py-10 text-center md:px-10 md:text-start">
      <header className="font-semibold">
        <h2 className="text-2xl">User Management</h2>
        <h3 className="text-base text-[var(--text-secondary)]">
          Manage, edit, and monitor all your users.
        </h3>
      </header>
      <UsersList users={usersWithCounts} />
    </section>
  );
}

export default Page;
