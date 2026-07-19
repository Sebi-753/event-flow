import Link from "next/link";
import { MdBolt } from "react-icons/md";
import { FaBriefcase } from "react-icons/fa";
import { FaMoneyBill } from "react-icons/fa";
import { MdBrush } from "react-icons/md";
import { MdSportsSoccer } from "react-icons/md";
import { FaAppleAlt } from "react-icons/fa";

import EventChategory from "@/components/events/EventChategory";

function BrowseSection() {
  return (
    <section className="flex flex-col gap-4 bg-[var(--color-bg)] px-[2rem] pt-20 pb-20 md:px-[4rem] lg:px-[8rem]">
      <header className="flex flex-col items-center gap-3">
        <h3 className="text-m font-bold text-[var(--color-primary)]">
          Browse by interest
        </h3>
        <h2 className="text-3xl font-bold">Event Categories</h2>
      </header>
      <main className="mt-10">
        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-4 lg:flex lg:gap-6">
          <EventChategory className="bg-white">
            <Link
              href={"/events?category=technology"}
              className="flex flex-col items-center gap-1"
            >
              <div>
                <MdBolt size={32} color="gold" />
              </div>
              <h3 className="text-m font-semibold">Technology</h3>
              <p className="text-sm text-[var(--text-tertiary)]">142 events</p>
            </Link>
          </EventChategory>
          <EventChategory>
            <Link
              href={"/events?category=Business"}
              className="flex flex-col items-center gap-1"
            >
              <div>
                <FaBriefcase size={32} color="brown" />
              </div>
              <h3 className="text-m font-semibold">Business</h3>
              <p className="text-sm text-[var(--text-tertiary)]">98 events</p>
            </Link>
          </EventChategory>
          <EventChategory>
            <Link
              href={"/events?category=Design"}
              className="flex flex-col items-center gap-1"
            >
              <div>
                <FaMoneyBill size={32} color="green" />
              </div>
              <h3 className="text-m font-semibold">Design</h3>
              <p className="text-sm text-[var(--text-tertiary)]">98 events</p>
            </Link>
          </EventChategory>
          <EventChategory>
            <Link
              href={"/events?category=Arts"}
              className="flex flex-col items-center gap-1"
            >
              <div>
                <MdBrush size={32} color="red" />
              </div>
              <h3 className="text-m font-semibold">Arts</h3>
              <p className="text-sm text-[var(--text-tertiary)]">98 events</p>
            </Link>
          </EventChategory>
          <EventChategory>
            <Link
              href={"/events?category=Health"}
              className="flex flex-col items-center gap-1"
            >
              <div>
                <FaAppleAlt size={32} color="red" />
              </div>
              <h3 className="text-m font-semibold">Health</h3>
              <p className="text-sm text-[var(--text-tertiary)]">98 events</p>
            </Link>
          </EventChategory>
          <EventChategory>
            <Link
              href={"/events?category=Sports"}
              className="flex flex-col items-center gap-1"
            >
              <div>
                <MdSportsSoccer size={32} color="black" />
              </div>
              <h3 className="text-m font-semibold">Sports</h3>
              <p className="text-sm text-[var(--text-tertiary)]">98 events</p>
            </Link>
          </EventChategory>
        </ul>
      </main>
    </section>
  );
}

export default BrowseSection;
