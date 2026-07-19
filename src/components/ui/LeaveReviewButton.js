"use client";

import { useRouter } from "next/navigation";
import { FaRegStar } from "react-icons/fa";

function LeaveReviewButton({ eventId }) {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push(`/events/${eventId}`)}
      className="flex items-center justify-center gap-2 rounded-lg border border-amber-300 bg-amber-50 px-4 py-1.5 text-sm font-medium text-amber-700 transition hover:bg-amber-100"
    >
      <FaRegStar size={16} />
      Leave Review
    </button>
  );
}

export default LeaveReviewButton;
