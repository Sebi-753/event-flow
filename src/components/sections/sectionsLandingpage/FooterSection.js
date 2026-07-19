import { HiOutlineLightningBolt } from "react-icons/hi";

function FooterSection() {
  return (
    <footer className="flex flex-col gap-8 bg-[var(--bg-footer)] px-6 py-18 text-start text-[var(--text-footer-copyright)] md:px-0 md:px-[4rem] lg:px-30">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-[40fr_60fr] md:gap-0">
        <div className="flex flex-col gap-6">
          <h3 className="flex items-center gap-4 text-lg font-semibold text-white">
            <div className="inline-flex items-center justify-center rounded-xl bg-[var(--color-primary)] p-2">
              <HiOutlineLightningBolt className="h-6 w-6 text-[var(--color-slate-50)]" />
            </div>
            <p>EventFlow</p>
          </h3>
          <p className="pr-40">
            The modern platform for discovering and managing events that bring
            people together.
          </p>
          <aside>
            <ul className="flex items-center gap-4 text-sm">
              <li>X</li>
              <li>LinkedIn</li>
              <li>GitHub</li>
            </ul>
          </aside>
        </div>
        <div className="flex justify-between">
          {/* <div className="grid grid-cols-1 justify-items-center md:flex md:justify-between"> */}
          <div className="flex flex-col gap-4">
            <h3 className="text-md font-semibold text-[var(--text-inverse)] uppercase">
              Product
            </h3>
            <ul className="flex flex-col gap-3">
              <li>Events</li>
              <li>Organizers</li>
              <li>Pricing</li>
              <li>Enterprise</li>
              <li>Changelog</li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-md font-semibold text-[var(--text-inverse)] uppercase">
              Company
            </h3>
            <ul className="flex flex-col gap-3">
              <li>About</li>
              <li>Blog</li>
              <li>Careers</li>
              <li>Press</li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-md font-semibold text-[var(--text-inverse)] uppercase">
              Legal
            </h3>
            <ul className="flex flex-col gap-3">
              <li>Privacy</li>
              <li>Terms</li>
              <li>Cookies</li>
              <li>Security</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="h-[1px] bg-gray-800"></div>
      <div className="flex justify-between text-xs text-[var(--text-footer-copyright2)]">
        <p>© 2025 EventFlow, Inc. All rights reserved.</p>
        <div className="flex items-center gap-1">
          <div className="flex h-2 w-2 items-center rounded-full bg-green-300" />
          <p>All systems operational</p>
        </div>
      </div>
    </footer>
  );
}

export default FooterSection;
