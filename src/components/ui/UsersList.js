"use client";

import Link from "next/link";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

import User from "./User";
import EmptyState from "./EmptyState";

function UsersList({ users }) {
  const [search, setSearch] = useState("");

  const filteredUsers = users.filter(
    (user) =>
      user.fullName.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="mt-10">
      {/* Search */}
      <div className="flex">
        <div className="relative w-full md:max-w-md">
          <FaSearch className="absolute top-1/2 left-4 -translate-y-1/2 text-[var(--text-disabled)]" />

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Search by name or email..."
            className="w-full rounded-2xl border border-gray-300 py-3 pr-4 pl-11 transition outline-none focus:border-blue-500"
          />
        </div>
      </div>

      <div className="px-3 md:rounded-2xl md:bg-white md:shadow-sm xl:px-0">
        <ul className="mt-8 space-y-4 md:space-y-0 md:overflow-hidden md:rounded-2xl md:bg-white md:shadow-sm">
          {/* Desktop header */}
          <li className="hidden h-12 grid-cols-[25fr_15fr_15fr_15fr_10fr_10fr] items-center border-y border-gray-200 bg-[var(--bg-secondary)] px-8 text-xs font-semibold tracking-wide text-[var(--text-tertiary)] uppercase xl:grid">
            <p>User</p>
            <p>Role</p>
            <p>Status</p>
            <p>Joined</p>
            <p>Events</p>
            <p></p>
          </li>
          <li className="mb-5 block text-center text-xl font-bold md:hidden">
            Users
          </li>
        </ul>
        {users.length !== 0 ? (
          <ul className="h-[70dvh] scrollbar-none overflow-y-scroll rounded-2xl">
            {filteredUsers.map((user) => (
              <User key={user.id} user={user} />
            ))}
          </ul>
        ) : (
          <EmptyState
            title="No users"
            description="There are no profiles created yet."
            action={
              <Link
                href="/"
                className="rounded-xl bg-indigo-600 px-5 py-3 text-white"
              >
                Home
              </Link>
            }
          />
        )}
      </div>

      {filteredUsers.length === 0 && (
        <div className="mt-8 rounded-2xl border border-dashed border-gray-300 bg-white py-12 text-center">
          <h3 className="text-lg font-semibold">No users found</h3>

          <p className="mt-2 text-sm text-gray-500">
            Try searching for a different name or email.
          </p>
        </div>
      )}
    </div>
  );
}

export default UsersList;
