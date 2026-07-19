import Image from "next/image";

import { getCurrentUser, getUserByReviewId } from "@/lib/Data-services";
import StarRating from "../ui/StarRating";
import DeleteReviewButton from "./DeleteReviewButton";

async function Review({ review }) {
  //current user
  const currentUser = await getCurrentUser();

  //the user that create the review
  const user = await getUserByReviewId(review.id);

  const date = new Date(review.created_at);

  const formatted = new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  const usersComment = currentUser.id === review.user_id;

  return (
    <li className="grid grid-cols-[10fr_90fr] gap-2 border-b border-gray-400 pb-2 last:border-none">
      <div className="xs:h-12 xs:w-12 relative h-10 w-10 overflow-hidden rounded-full border border-gray-200 shadow-sm">
        <Image
          src={user.avatar}
          fill
          alt={`Avatar of ${user.fullName}`}
          className="object-cover"
        />
      </div>
      <div>
        <header className="flex items-start justify-between">
          <div>
            <h3 className="xs:text-base text-sm font-semibold sm:text-lg">
              {user.fullName}
            </h3>
            <StarRating rating={review.rating} />
          </div>

          <div className="flex items-center gap-4">
            <span className="text-sm text-[var(--text-tertiary)]">
              {formatted}
            </span>
            {usersComment && (
              <DeleteReviewButton review={review} user_id={currentUser.id} />
            )}
          </div>
        </header>
        <p className="mt-4">{review.comment}</p>
      </div>
    </li>
  );
}

export default Review;
