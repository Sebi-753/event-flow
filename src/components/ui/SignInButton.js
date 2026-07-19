"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";

function SignInButton() {
  async function handleSignIn() {
    try {
      signIn("google", {
        callbackUrl: "/",
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <button
      onClick={handleSignIn}
      className="border-primary-300 2xs:gap-6 2xs:px-10 flex items-center gap-3 rounded-xl border bg-[var(--color-primary)] px-5 py-4 text-sm font-semibold text-[var(--text-inverse)] transition duration-200 hover:bg-[var(--color-primary-hover)] sm:text-lg"
    >
      <Image
        src="https://authjs.dev/img/providers/google.svg"
        alt="Google logo"
        height="24"
        width="24"
      />
      <span>Continue with Google</span>
    </button>
  );
}

export default SignInButton;
