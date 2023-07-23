export default function AboutMe() {
  return (
    <div>
      <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/70 border-b duration-300 border-b-transparent">
        <div className="flex h-12 justify-between items-center max-w-5xl mx-auto px-4 sm:h-20 sm:px-8">
          <a className="font-semibold text-lg" href="/">
            NL.
          </a>
          <ul className="flex gap-8 items-center">
            <li>
              <a
                className="text-sm text-slate-600 hover:text-slate-800 hover:border-b hover:cursor-pointer font-bold"
                href="/about-me"
              >
                About
              </a>
            </li>
          </ul>
        </div>
      </header>
      <main className="max-w-5xl mx-auto">
        <header className="flex flex-col items-center gap-2 py-8">
          <h1 className="font-bold text-4xl sm:text-6xl text-center tracking-tighter leading-tight selection:bg-black selection:text-white">
            In Progress...
          </h1>
        </header>
      </main>
    </div>
  );
}
