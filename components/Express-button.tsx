"use client";

import Link from "next/link";

export default function ExpressButton() {
  return (
    <Link
      href="https://secure.wayforpay.com/button/b47edb91ab96a"
      onClick={() => {
        (window as typeof window & { fbq?: (...args: unknown[]) => void }).fbq?.(
          "track",
          "Lead"
        );
      }}
      className="inline-flex items-center justify-center rounded-full bg-red-600 px-12 py-8 text-xl font-semibold text-white transition hover:bg-red-700"
    >
      Оплатити
    </Link>
  );
}