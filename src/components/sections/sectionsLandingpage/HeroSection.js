import Link from "next/link";
import NavBar from "@/components/ui/NavBar";
import { getCurrentUser, getNotifications } from "@/lib/Data-services";

async function HeroSection() {
  const [notifications, user] = await Promise.all([
    getNotifications(),
    getCurrentUser(),
  ]);
  return (
    <>
      <NavBar notifications={notifications} user={user} />
      <div className="h-[1px] border-t border-gray-200"></div>
      <section className="flex flex-col gap-16 pt-40 lg:gap-12">
        <header className="mx-auto flex w-full flex-col gap-5 text-center sm:gap-10">
          <h1 className="xs:text-5xl 2xs:text-4xl text-3xl font-bold md:text-7xl">
            The easiest way to <br />
            <span className="text-[var(--color-primary)]">discover events</span>
          </h1>
          <h3 className="xs:px-30 2xs:text:base xs:text-lg px-15 text-sm text-[var(--text-secondary)] md:text-2xl lg:px-80">
            Discover thousands of events near you, register in seconds, and
            connect with communities that share your passions.
          </h3>
        </header>
        <div className="mt-16 flex items-center justify-center text-xl font-semibold text-[var(--text-inverse)]">
          <Link
            href="/events"
            className="rounded-xl bg-[var(--color-primary)] px-6 py-3 text-base font-medium transition duration-300 hover:bg-[var(--color-primary-hover)] hover:text-white/90"
          >
            Explore Events &rarr;
          </Link>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="text-lg font-bold text-[var(--text-tertiary)]">
            Trusted by teams at
          </h3>
          <ul className="text-m xs:flex xs:mt-0 mt-1 mt-4 grid grid-cols-3 gap-5 font-bold text-[var(--text-disabled)]">
            <li>Stripe</li>
            <li>Figma</li>
            <li>Vercel</li>
            <li>Linear</li>
            <li>Notion</li>
            <li>Loom</li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default HeroSection;
