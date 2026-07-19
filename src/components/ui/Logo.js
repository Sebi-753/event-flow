import Link from "next/link";
import { HiOutlineLightningBolt } from "react-icons/hi";

function Logo() {
  return (
    <div className="">
      <Link
        href="/"
        className="flex items-center gap-2 font-bold md:text-xl lg:text-2xl"
      >
        <div className="inline-flex items-center justify-center rounded-xl bg-[var(--color-primary)] p-2">
          <HiOutlineLightningBolt className="text-[var(--color-slate-50)] md:h-6 md:w-6 lg:h-8 lg:w-8" />
        </div>
        <p>EventFlow</p>
      </Link>
    </div>
  );
}

export default Logo;
//
