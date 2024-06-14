import PostCard from "@/components/PostCard";
import TagsFilter from "@/components/TagsFilter";
import { getAllFilesMetadata } from "@/lib/mdx";
import { Post } from "@/shared/types";

interface HomeProps {
  posts: Post[];
  currentTag?: string;
}

function Home({ posts, currentTag }: HomeProps) {
  return (
    <main className="max-w-5xl mx-auto p-4 sm:p-8 mb-16 grid gap-16">
      <header className="flex flex-col items-center gap-2 py-8">
        <h1 className="font-bold text-4xl sm:text-6xl text-center tracking-tighter leading-tight selection:bg-black selection:text-white">
          Web Dev and Design
        </h1>
        <h2 className="text-center selection:bg-black selection:text-white">
          I{"'"}m{" "}
          <span className="text-blue-400 selection:bg-black selection:text-blue-100">
            Noel Lopez
          </span>{" "}
          and I talk about technology, programming, and personal experiences
        </h2>
      </header>
      <TagsFilter currentTag={currentTag} />
      {posts.length === 0 && (
        <>
          <p className="text-center text-2xl w-full text-slate-600 mt-12 grid gap-4">
           {' There are no posts with that tag yet :('}
           <span className="text-xl">
           {' More content coming soon!'}
           </span>
          </p>
         </>
        )}
      <section className="grid grid-cols-[repeat(auto-fill,minmax(min(350px,100%),1fr))] gap-4 sm:gap-8">
        {posts.map((post) => (
          <PostCard key={post.slug} data={post} />
        ))}
      </section>
    </main>
  );
}

async function getPosts() {
  const posts = getAllFilesMetadata();

  return posts;
}

interface PageProps {
  params: { slug: string }
  searchParams: { [key: string]: string | undefined }
}

export default async function HomePage({ searchParams }: PageProps) {
  let posts = await getPosts();
  const tagFilter = searchParams.tag;
  if (tagFilter) {
    posts = posts.filter((post) => post.tags.includes(tagFilter));
  }
  return <Home posts={posts} currentTag={tagFilter} />;
}
