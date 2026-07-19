"use client";

import { addReview } from "@/lib/actions";
import { useState } from "react";
import { useFormStatus } from "react-dom";
import { FaRegStar, FaStar } from "react-icons/fa";
import { toast } from "sonner";

function ReviewInput({ eventId }) {
  const [query, setQuery] = useState("");
  const [rating, setRating] = useState(0);
  const [hovered, setHovered] = useState(0);

  async function handleSubmit(formData) {
    if (rating === 0) {
      toast.error("Please select a rating.");
      return;
    }

    if (!query.trim()) {
      toast.error("Please write a review.");
      return;
    }

    const toastId = toast.loading("Submitting your review...");

    try {
      await addReview(formData);

      toast.success("Review submitted successfully!", {
        id: toastId,
      });
    } catch (error) {
      toast.error(error.message || "Something went wrong.", {
        id: toastId,
      });
    } finally {
      setQuery("");
      setRating(0);
      setHovered(0);
    }
  }

  return (
    <form
      action={handleSubmit}
      className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
    >
      <h3 className="mb-2 text-lg font-semibold text-gray-900">
        Leave a Review
      </h3>

      <p className="mb-6 text-sm text-gray-500">
        Tell others what you thought about this event.
      </p>

      {/* Rating */}
      <div className="mb-6">
        <p className="mb-3 text-sm font-medium text-gray-700">Your Rating</p>

        <div className="flex flex-row items-center gap-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => setRating(star)}
              onMouseEnter={() => setHovered(star)}
              onMouseLeave={() => setHovered(0)}
              className="transition-transform duration-150 hover:scale-110"
            >
              <FaStar
                size={30}
                className={
                  (hovered || rating) >= star
                    ? "text-yellow-400"
                    : "text-gray-300"
                }
              />
            </button>
          ))}

          <span className="ml-2 text-sm font-medium text-gray-600">
            {rating === 0 ? "Select a rating" : `${rating}/5`}
          </span>
        </div>
      </div>

      {/* Review */}
      <textarea
        rows={5}
        name="comment"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Share your experience with this event..."
        className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm transition outline-none focus:border-indigo-500 focus:bg-white"
      />
      <input type="hidden" name="rating" value={rating} />
      <input type="hidden" name="event_id" value={eventId} />

      <div className="mt-5 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center md:gap-0">
        <p className="text-sm text-gray-500">
          Your review helps others choose events.
        </p>
        <SumbitButton />
      </div>
    </form>
  );
}

function SumbitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="xs:w-fit xs:justify-start flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--indigo-600)] px-6 py-3 font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--indigo-700)] hover:shadow-md active:translate-y-0 disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-500 disabled:shadow-none disabled:hover:translate-y-0 disabled:hover:bg-gray-300"
    >
      <FaRegStar size={18} />
      {pending ? "Submitting..." : "Leave Review"}
    </button>
  );
}

export default ReviewInput;
