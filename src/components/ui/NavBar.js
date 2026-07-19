"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

import Logo from "./Logo";
import ProfileInfoNavbar from "./ProfileInfoNavbar";
import Notifications from "../notifications/Notifications";

function NavBar({ user, notifications }) {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/events", label: "Events" },
    { href: "/dashboard", label: "Dashboard" },
    { href: "/profile", label: "Profile" },
  ];

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[998] bg-black/40 backdrop-blur-sm md:hidden"
          onClick={closeMenu}
        />
      )}

      <nav className="fixed z-[1000] flex h-[10dvh] min-h-[5rem] w-screen items-center bg-[var(--bg-secondary)]/90 px-4 backdrop-blur-sm md:px-5 lg:px-30">
        {/* Mobile menu */}
        <button
          onClick={() => setIsOpen((open) => !open)}
          className="rounded-lg p-2 transition hover:bg-gray-100 md:hidden"
          aria-label="Open navigation"
        >
          <FiMenu className="h-7 w-7" />
        </button>

        {/* Desktop logo */}
        <div className="hidden md:block">
          <Logo />
        </div>

        {/* Navigation */}
        <ul
          className={`fixed top-0 left-0 z-[999] flex h-screen w-72 flex-col bg-[var(--bg-secondary)] px-6 py-8 shadow-2xl transition-transform duration-300 md:static md:ml-8 md:h-auto md:w-auto md:flex-row md:items-center md:gap-8 md:bg-transparent md:p-0 md:shadow-none ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0`}
        >
          {/* Drawer header */}
          <li className="mb-8 flex items-center justify-between md:hidden">
            <Logo />

            <button
              onClick={closeMenu}
              className="rounded-lg p-2 hover:bg-gray-100"
            >
              <FiX className="h-7 w-7" />
            </button>
          </li>

          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={closeMenu}
                className="block rounded-xl px-4 py-3 text-lg font-medium transition hover:bg-gray-100 hover:text-black md:px-0 md:py-0 md:text-base md:font-normal md:hover:scale-[1.04] md:hover:bg-transparent"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right */}
        <div className="ml-auto flex items-center gap-2 md:gap-4">
          <Notifications user={user} notifications={notifications} />

          <ProfileInfoNavbar user={user} />
        </div>
      </nav>
    </>
  );
}

export default NavBar;
