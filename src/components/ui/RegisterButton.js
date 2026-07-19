"use client";

import { useRouter } from "next/navigation";
import { toast } from "sonner";

function RegisterButton({ handleRegister, disabled }) {
  const router = useRouter();

  async function register() {
    try {
      await handleRegister();
      toast.success("Successfully registered!");
    } catch (error) {
      toast.error(error.message || "Registration failed");
    }
    router.push("/events");
  }

  return (
    <button
      onClick={register}
      disabled={disabled}
      className="cursor-pointer rounded-xl bg-[var(--indigo-600)] px-6 py-3 font-semibold text-white transition hover:bg-[var(--indigo-700)] disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-[var(--indigo-600)]"
    >
      Register Now
    </button>
  );
}

export default RegisterButton;
