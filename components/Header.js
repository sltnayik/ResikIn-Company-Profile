"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/service" },
  { label: "Team", href: "/team" },
  { label: "Contact", href: "/contact" },
];

function isActiveLink(pathname, href) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-br from-[#0d2818] via-[#153d26] to-[#1a5d35] px-4 py-4 sm:px-6 lg:px-8">

      <div className="relative z-20 mx-auto flex w-full max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-white/10 px-4 py-4 shadow-[0_14px_40px_rgba(0,0,0,0.18)] backdrop-blur-xl sm:px-5">
        <Link
          href="/"
          className="flex items-center gap-3 text-white transition hover:text-emerald-200"
          aria-label="ResikIn homepage"
        >
          <Image
            src="/logo-no-bg.png"
            alt="ResikIn logo"
            width={190}
            height={62}
            priority
            className="h-12 w-auto object-contain sm:h-14"
          />
        </Link>

        <nav
          className="hidden items-center gap-3 md:flex"
          aria-label="Primary navigation"
        >
          {navLinks.map((link) => {
            const isActive = isActiveLink(pathname, link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  isActive
                    ? "bg-white/14 text-white"
                    : "text-emerald-50/90 hover:bg-white/10 hover:text-emerald-200"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center md:flex">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-[#4ade80] px-5 py-2.5 text-sm font-semibold text-[#0d2818] shadow-md shadow-emerald-950/20 transition duration-300 hover:bg-[#22c55e] hover:shadow-lg"
          >
            Get Started
          </Link>
        </div>

        <button
          type="button"
          className="relative z-50 inline-flex min-h-11 min-w-11 cursor-pointer touch-manipulation items-center justify-center rounded-full border border-white/15 bg-white/10 p-2 text-white shadow-sm transition hover:bg-white/15 active:scale-95 md:hidden"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          <span className="sr-only">Toggle navigation menu</span>
          <svg
            className={`h-6 w-6 transition-transform duration-300 ${
              isMenuOpen ? "rotate-90" : ""
            }`}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            {isMenuOpen ? (
              <path
                d="M6 6L18 18M6 18L18 6"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            ) : (
              <path
                d="M4 7H20M4 12H20M4 17H20"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            )}
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <div
          id="mobile-menu"
          className="relative z-40 mx-auto mt-3 w-full max-w-7xl rounded-2xl border border-white/10 bg-[#153d26]/95 p-4 shadow-[0_14px_40px_rgba(0,0,0,0.18)] backdrop-blur-xl md:hidden"
        >
          <nav className="flex flex-col gap-2" aria-label="Mobile navigation">
            {navLinks.map((link) => {
              const isActive = isActiveLink(pathname, link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`rounded-xl px-4 py-3 text-sm font-medium transition ${
                    isActive
                      ? "bg-white/14 text-white"
                      : "text-emerald-50/90 hover:bg-white/10 hover:text-emerald-200"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="mt-2 inline-flex items-center justify-center rounded-full bg-[#4ade80] px-5 py-3 text-sm font-semibold text-[#0d2818] transition duration-300 hover:bg-[#22c55e]"
            >
              Get Started
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
