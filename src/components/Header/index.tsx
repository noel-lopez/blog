import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/70 border-b duration-300 border-b-transparent">
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
