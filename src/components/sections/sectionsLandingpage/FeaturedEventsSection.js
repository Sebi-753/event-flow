import Link from "next/link";
import FeaturesEvents from "@/components/events/FeaturesEvents";

function FeaturedEventsSection() {
  return (
    <section className="xs:px-[3rem] mt-20 flex flex-col gap-3 px-[2rem] pb-20 md:px-[4rem] lg:px-[8rem]">
      <header>
        <h2 className="xs:text-base 2xs:text-sm text-[12px] font-bold text-[var(--color-primary)]">
          Handpicked for you
        </h2>
        <div className="flex justify-between">
          <h3 className="xs:text-3xl xxs:text-2xl text-xl font-bold">
            Featured Events
          </h3>
          <Link
            className="xxs:text-base flex items-center justify-center rounded-xl px-4 py-2 text-sm transition duration-150 hover:bg-gray-100"
            href={"/events"}
          >
            View all &rarr;
          </Link>
        </div>
      </header>
      <FeaturesEvents />
    </section>
  );
}

export default FeaturedEventsSection;
