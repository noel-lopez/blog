import Header from "@/components/Header";

export default function AboutMe() {
  return (
    <div>
      <Header />
      <main className="max-w-5xl mx-auto">
        <header className="flex flex-col items-center gap-2 py-8">
          <h1 className="font-bold text-2xl sm:text-4xl text-center tracking-tighter leading-tight selection:bg-black selection:text-white">
            In Progress...
          </h1>
        </header>
      </main>
    </div>
  );
}
