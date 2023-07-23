"use client";
import Link from "next/link";
import useScroll from "@/hooks/useScroll";

export default function Header() {
  const { isInTop } = useScroll();
  return (
    <header
      className={`sticky top-0 z-50 backdrop-blur-lg bg-white/70 border-b duration-300 ${
        isInTop ? "border-b-transparent" : "border-b-slate-200"
      }`}
    >
      <div className="flex h-12 justify-between items-center max-w-5xl mx-auto px-4 sm:h-20 sm:px-8">
        <Link className="font-semibold text-lg" href="/">
          NL.
        </Link>
        <ul className="flex gap-8 items-center">
          <li>
            <Link
              className="text-sm text-slate-600 hover:text-slate-800 hover:border-b font-bold"
              href="/about-me"
            >
              About
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
