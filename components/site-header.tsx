"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { label: "Головна", href: "/" },
  { label: "Курси", href: "/courses" },
  { label: "Про Ірину", href: "/about" },
  { label: "Відгуки", href: "/reviews" },
  { label: "Контакти", href: "/contact" },
  { label: "Консультації", href: "/consult" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#eadbd2]/80 bg-[#f8f3ee]/80 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-6 py-4 md:px-10 lg:px-16">
        <Link
          href="/"
          className="shrink-0"
          onClick={() => setIsMenuOpen(false)}
        >
          <div>
            <p className="text-[10px] uppercase tracking-[0.35em] text-[#9a6d5b]">
              Онлайн-школа
            </p>
            <p className="mt-1 text-base font-semibold tracking-[0.08em] text-[#3c2b25] md:text-lg">
              Формула любові
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 rounded-full border border-[#e7d7cf] bg-white/70 p-2 shadow-[0_12px_35px_rgba(90,60,50,0.06)] md:flex">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  isActive
                    ? "bg-[#8a5d4f] text-white"
                    : "text-[#6d544b] hover:bg-[#f3e8e1] hover:text-[#3c2b25]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/courses"
          className="hidden h-11 items-center justify-center rounded-full bg-[#8a5d4f] px-6 text-sm font-semibold text-white transition hover:bg-[#774c40] md:inline-flex"
        >
          Перейти до курсів
        </Link>

        <button
          type="button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="inline-flex h-11 items-center justify-center rounded-full border border-[#d8c6bc] bg-white/75 px-5 text-sm font-medium text-[#4c3731] md:hidden"
          aria-label="Відкрити меню"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? "Закрити" : "Меню"}
        </button>
      </div>

      {isMenuOpen && (
        <div className="border-t border-[#eadbd2]/80 bg-[#f8f3ee] px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`rounded-2xl px-4 py-3 text-sm font-medium transition ${
                    isActive
                      ? "bg-[#8a5d4f] text-white"
                      : "bg-white/80 text-[#6d544b] hover:bg-[#f3e8e1] hover:text-[#3c2b25]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}

            <Link
              href="/courses"
              onClick={() => setIsMenuOpen(false)}
              className="mt-2 inline-flex h-11 items-center justify-center rounded-full bg-[#8a5d4f] px-6 text-sm font-semibold text-white transition hover:bg-[#774c40]"
            >
              Перейти до курсів
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}