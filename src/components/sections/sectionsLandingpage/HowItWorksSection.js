import { FaSearch } from "react-icons/fa";
import { MdCheck } from "react-icons/md";
import { MdStar } from "react-icons/md";

import HowItWorksStep from "@/components/ui/HowItWorksStep";

function HowItWorksSection() {
  return (
    <section className="2xs:px-[3rem] px-[2rem] py-30 md:px-[5rem] lg:px-40 xl:px-50">
      <h2 className="text-center text-3xl font-bold">How EventFlow works</h2>
      <main className="mt-16">
        <ul className="flex flex-col gap-5 md:gap-8 lg:flex-row">
          <HowItWorksStep>
            <span>
              <FaSearch size={32} color="#2563eb" />
            </span>
            <h3 className="text-lg font-semibold">Discover</h3>
            <p className="text-[var(--text-tertiary)]">
              Browse thousands of curated events by category, location, or date.
              Your perfect event is always one search away.
            </p>
          </HowItWorksStep>
          <HowItWorksStep>
            <span>
              <MdCheck size={32} color="#2563eb" />
            </span>
            <h3 className="text-lg font-semibold">Register</h3>
            <p className="text-[var(--text-tertiary)]">
              Secure your spot in seconds with our frictionless checkout.
              Instant confirmation every time — no friction.
            </p>
          </HowItWorksStep>
          <HowItWorksStep>
            <span>
              <MdStar size={32} color="#2563eb" />
            </span>
            <h3 className="text-lg font-semibold">Attend</h3>
            <p className="text-[var(--text-tertiary)]">
              Show your digital ticket, connect with other attendees, and make
              memories with your community.
            </p>
          </HowItWorksStep>
        </ul>
      </main>
    </section>
  );
}

export default HowItWorksSection;
