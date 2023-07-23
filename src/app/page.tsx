import PostCard from "@/components/PostCard";
import { getAllFilesMetadata } from "@/lib/mdx";
import { Post } from "@/shared/types";
import Link from "next/link";

interface HomeProps {
  posts: Post[];
}

function Home({ posts }: HomeProps) {
  return (
    <div>
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
      <main className="max-w-5xl mx-auto">
        <header className="flex flex-col items-center gap-2 py-8">
          <h1 className="font-bold text-4xl sm:text-6xl text-center tracking-tighter leading-tight selection:bg-black selection:text-white">
            Desarrollo y Diseño Web
          </h1>
          <h2 className="text-center selection:bg-black selection:text-white">
            Soy <span className="text-blue-300">Noel Lopez</span> y hablo de
            tecnología, programación y experiencias personales
          </h2>
        </header>
        <section className="grid grid-cols-[repeat(auto-fill,minmax(min(350px,100%),1fr))] gap-4 sm:gap-8">
          {posts.map((post) => (
            <PostCard key={post.slug} data={post} />
          ))}
        </section>
      </main>
    </div>
  );
}

async function getPosts() {
  const posts = getAllFilesMetadata();

  return posts;
}

export default async function HomePage() {
  const posts = await getPosts();
  return <Home posts={posts} />;
}
