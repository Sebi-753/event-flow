// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { Suspense } from "react";

// import { MdHome, MdEvent, MdPeople, MdAnalytics } from "react-icons/md";
// import { HiOutlineLightningBolt } from "react-icons/hi";

// import SignOutButton from "../../ui/SignOutButton";
// import AccountDetailsSidebar from "../deshboardsUi/AccountDetailsSidebar";

// function SideBarOrgniser({ user }) {
//   const pathname = usePathname();

//   const links = [
//     { href: "/dashboard", label: "Overview", icon: MdHome },
//     { href: "/dashboard/events", label: "Events", icon: MdEvent },
//     { href: "/dashboard/attendees", label: "Attendees", icon: MdPeople },
//     { href: "/dashboard/analytics", label: "Analytics", icon: MdAnalytics },
//   ];

//   const isActiveLink = (href) => {
//     if (href === "/dashboard") return pathname === "/dashboard";

//     return pathname === href || pathname.startsWith(href + "/");
//   };

//   return (
//     <div className="flex h-screen flex-col border-r border-gray-200 pt-5">
//       {/* Logo */}
//       <div className="border-b border-gray-200 px-5 pb-4">
//         <Link href="/" className="flex items-center gap-2 text-xl font-bold">
//           <div className="inline-flex items-center justify-center rounded-xl bg-[var(--color-primary)] p-2">
//             <HiOutlineLightningBolt className="h-4 w-4 text-[var(--color-slate-50)]" />
//           </div>
//           <p className="text-sm">EventFlow</p>
//         </Link>
//       </div>

//       {/* Header */}
//       <header className="flex items-center gap-2 border-b border-gray-200 pt-4 pb-5 pl-4">
//         <Suspense fallback={<p>Loading profileInfo...</p>}>
//           <AccountDetailsSidebar user={user} />
//         </Suspense>
//       </header>

//       {/* Body */}
//       <div className="flex flex-1 flex-col">
//         {/* Navigation */}
//         <ul className="flex flex-1 flex-col gap-2 px-4 pt-5">
//           {links.map((link) => {
//             const Icon = link.icon;
//             const active = isActiveLink(link.href);

//             return (
//               <li key={link.href}>
//                 <Link
//                   href={link.href}
//                   className={`flex items-center gap-3 rounded-2xl px-4 py-2 transition ${
//                     active
//                       ? "bg-indigo-600 text-white"
//                       : "text-[var(--text-secondary)] hover:bg-[var(--bg-secondary)]"
//                   }`}
//                 >
//                   <Icon size={20} />
//                   {link.label}
//                 </Link>
//               </li>
//             );
//           })}
//         </ul>

//         {/* Bottom */}
//         <aside className="border-t border-gray-200 px-5 py-5">
//           <Link
//             href="/dashboard/newEvent"
//             className={`flex w-full justify-start rounded-2xl px-4 py-2 transition ${
//               isActiveLink("/dashboard/newEvent")
//                 ? "bg-indigo-600 text-white"
//                 : "text-[var(--text-secondary)] hover:bg-[var(--bg-secondary)] hover:text-[var(--text-primary)]"
//             }`}
//           >
//             + New Event
//           </Link>

//           <SignOutButton />
//         </aside>
//       </div>
//     </div>
//   );
// }

// export default SideBarOrgniser;
"use client";

import { useState, Suspense } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { MdHome, MdEvent, MdPeople, MdAnalytics } from "react-icons/md";
import { HiOutlineLightningBolt, HiMenu, HiX } from "react-icons/hi";

import SignOutButton from "../../ui/SignOutButton";
import AccountDetailsSidebar from "../deshboardsUi/AccountDetailsSidebar";

function SideBarOrgniser({ user }) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/dashboard", label: "Overview", icon: MdHome },
    { href: "/dashboard/events", label: "Events", icon: MdEvent },
    { href: "/dashboard/attendees", label: "Attendees", icon: MdPeople },
    { href: "/dashboard/analytics", label: "Analytics", icon: MdAnalytics },
  ];

  const isActiveLink = (href) => {
    if (href === "/dashboard") return pathname === "/dashboard";

    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <>
      {/* Mobile Hamburger */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-4 left-4 z-50 rounded-xl bg-white p-2 shadow-md md:hidden"
      >
        <HiMenu size={24} />
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-50 flex h-screen w-72 flex-col border-r border-gray-200 bg-white transition-transform duration-300 md:static md:w-full md:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 rounded-lg p-2 hover:bg-gray-100 md:hidden"
        >
          <HiX size={24} />
        </button>

        {/* Logo */}
        <div className="border-b border-gray-200 px-5 py-4">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2 text-xl font-bold"
          >
            <div className="inline-flex items-center justify-center rounded-xl bg-[var(--color-primary)] p-2">
              <HiOutlineLightningBolt className="h-4 w-4 text-[var(--color-slate-50)]" />
            </div>

            <p className="text-sm">EventFlow</p>
          </Link>
        </div>

        {/* Profile */}
        <header className="flex items-center gap-2 border-b border-gray-200 px-4 py-5">
          <Suspense fallback={<p>Loading profile...</p>}>
            <AccountDetailsSidebar user={user} />
          </Suspense>
        </header>

        {/* Navigation */}
        <nav className="flex flex-1 flex-col">
          <ul className="flex flex-1 flex-col gap-2 px-4 pt-5">
            {links.map((link) => {
              const Icon = link.icon;
              const active = isActiveLink(link.href);

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-3 rounded-2xl px-4 py-2 transition ${
                      active
                        ? "bg-indigo-600 text-white"
                        : "text-[var(--text-secondary)] hover:bg-[var(--bg-secondary)]"
                    }`}
                  >
                    <Icon size={20} />
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Bottom */}
          <aside className="border-t border-gray-200 px-5 py-5">
            <Link
              href="/dashboard/newEvent"
              onClick={() => setIsOpen(false)}
              className={`mb-3 flex w-full justify-start rounded-2xl px-4 py-2 transition ${
                isActiveLink("/dashboard/newEvent")
                  ? "bg-indigo-600 text-white"
                  : "text-[var(--text-secondary)] hover:bg-[var(--bg-secondary)] hover:text-[var(--text-primary)]"
              }`}
            >
              + New Event
            </Link>

            <SignOutButton />
          </aside>
        </nav>
      </aside>
    </>
  );
}

export default SideBarOrgniser;
