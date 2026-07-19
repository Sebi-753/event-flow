"use client";

import { useTransition } from "react";
import { cancelRegistration } from "@/lib/actions";
import { toast } from "sonner";

function CancelRegistrationButton({ event }) {
  const [pending, startTransition] = useTransition();

  function handleCancel() {
    startTransition(async () => {
      const toastId = toast.loading("Canceling your registration...");

      try {
        await cancelRegistration(event.id);

        toast.success("Registration canceled successfully.", {
          id: toastId,
        });
      } catch (error) {
        toast.error(
          error instanceof Error
            ? error.message
            : "Failed to cancel registration.",
          {
            id: toastId,
          },
        );
      }
    });
  }

  return (
    <button
      disabled={pending}
      onClick={handleCancel}
      className="rounded-lg border border-red-300 px-4 py-1.5 text-sm font-medium text-red-600 transition hover:bg-red-50 disabled:cursor-not-allowed disabled:border-gray-300 disabled:bg-gray-100 disabled:text-gray-400 disabled:opacity-50 disabled:hover:bg-gray-100"
    >
      {pending ? "Canceling..." : "Cancel"}
    </button>
  );
}

export default CancelRegistrationButton;
