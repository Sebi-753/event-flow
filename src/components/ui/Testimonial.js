import Image from "next/image";

import StarRating from "../ui/StarRating";
import { getEventByReviewId, getUserByReviewId } from "@/lib/Data-services";

async function Testimonial({ review }) {
  const creator = await getUserByReviewId(review.id);
  const event = await getEventByReviewId(review.id);

  const { fullName: name, role, avatar } = creator;
  const { rating, comment } = review;
  const { image_url, title } = event;

  return (
    <li className="flex overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl md:block md:rounded-3xl">
      {/* Event image */}
      <div className="xs:h-44 xs:w-2/5 relative h-36 w-2/7 flex-shrink-0 md:aspect-[16/9] md:h-auto md:w-full">
        <Image
          src={image_url}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width:768px) 40vw, (max-width:1024px) 50vw, 33vw"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        <div className="absolute bottom-3 left-3 md:bottom-5 md:left-5">
          <p className="xs:text-[10px] text-[7px] font-semibold tracking-[0.2em] text-white/80 uppercase sm:text-xs">
            Reviewed Event
          </p>

          <h3 className="xs:text-base mt-1 text-sm font-bold text-white sm:text-lg md:text-2xl">
            {title}
          </h3>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-4 sm:p-5 lg:p-6">
        <StarRating rating={rating} />

        <p className="xs:mt-3 mt-1 flex-1 text-sm leading-6 text-[var(--text-secondary)] italic sm:text-base sm:leading-7 lg:mt-5 lg:text-[17px] lg:leading-8">
          &rdquo;{comment}&rdquo;
        </p>

        {/* Reviewer */}
        <div className="xs:mt-5 mt-2 flex items-center gap-3 border-t border-gray-100 pt-4 md:gap-2 md:pt-5 lg:mt-8">
          <div className="relative h-10 w-10 flex-shrink-0 overflow-hidden rounded-full ring-2 ring-[var(--indigo-100)] sm:h-11 sm:w-11 md:h-12 md:w-12 lg:h-14 lg:w-14">
            <Image
              src={avatar}
              alt={name}
              fill
              className="object-cover"
              sizes="56px"
            />
          </div>

          <div className="min-w-0 flex-1">
            <h4 className="2xs:text-sm truncate text-[12px] font-semibold text-gray-900 sm:text-base">
              {name}
            </h4>

            <p className="truncate text-xs tracking-wide text-[var(--text-tertiary)] uppercase sm:text-sm">
              {role}
            </p>
          </div>
        </div>
      </div>
    </li>
  );
}

export default Testimonial;
