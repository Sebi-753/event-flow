"use client";

import { signOut, useSession } from "next-auth/react";
import { MdLogout } from "react-icons/md";

function SignOutButton() {
  const { data: session } = useSession();

  return (
    <>
      {session ? (
        <button
          onClick={() => {
            signOut({
              callbackUrl: "/",
            });
          }}
          className="flex w-full items-center justify-start gap-1 rounded-2xl px-4 py-2 text-[var(--text-secondary)] transition duration-200 hover:bg-[var(--danger-bg-hover)] hover:text-[var(--danger-text)]"
        >
          <MdLogout />
          <span>Sign Out</span>
        </button>
      ) : (
        ""
      )}
    </>
  );
}

export default SignOutButton;
