"use client";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <Link href="/" className="text-xl font-bold tracking-wide text-gray-900">
          Charme&nbsp;Eyelash
        </Link>
        <Link
          href="#booking"
          className="rounded-xl bg-pink-600 px-4 py-2 text-sm font-semibold text-white shadow transition hover:bg-pink-700 hover:shadow-md"
        >
          予約する
        </Link>
      </div>
    </header>
  );
}