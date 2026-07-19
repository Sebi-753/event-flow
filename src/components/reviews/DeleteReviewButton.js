"use client";

import { useTransition } from "react";
import { FaTrash } from "react-icons/fa";
import { toast } from "sonner";

import { deleteReview } from "@/lib/actions";

function DeleteReviewButton({ review, user_id }) {
  const [pending, startTransition] = useTransition();

  function handleDelete() {
    const toastId = toast.loading("Deleting review...");

    startTransition(async () => {
      try {
        await deleteReview(review, user_id);

        toast.success("Review deleted successfully!", {
          id: toastId,
        });
      } catch (error) {
        toast.error(error.message || "Failed to delete review.", {
          id: toastId,
        });
      }
    });
  }

  return (
    <button
      type="button"
      disabled={pending}
      onClick={handleDelete}
      className="rounded-lg p-2 text-red-500 transition-all duration-200 hover:bg-red-50 hover:text-red-600 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:text-red-500"
      aria-label="Delete review"
    >
      <FaTrash size={15} className={pending ? "animate-pulse" : ""} />
    </button>
  );
}

export default DeleteReviewButton;
