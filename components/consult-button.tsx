"use client";

import Link from "next/link";

export default function ConsultButton() {
  return (
    <Link
      href="https://t.me/iryna_tabaka?text=Хочу%20замовити%20консультацію"
      onClick={() => {
        (window as typeof window & { fbq?: (...args: unknown[]) => void }).fbq?.(
          "track",
          "Lead",
          "Purchase"
        );
      }}
      className="mt-8 inline-flex items-center justify-center rounded-full bg-[#16195a] px-8 py-4 text-sm tracking-[0.2em] text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#222770]"
    >
      ЗАРЕЄСТРУВАТИСЯ
    </Link>
  );
}