import { getFileBySlug } from "@/lib/mdx";
import { Post as IPost } from "@/shared/types";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote/rsc";
import { components } from "./postComponents";

interface Props {
  content: string;
  frontMatter: IPost;
}

function Post({ content, frontMatter }: Props) {
  return (
    <main className="grid gap-8 max-w-3xl mb-36 mx-auto p-4">
      <MDXRemote source={content} components={components} />
    </main>
  );
}

async function getPost(slug: string) {
  const { content, frontMatter } = await getFileBySlug({ slug });
  return { content, frontMatter };
}

interface PostPageProps {
  params: {
    slug: string;
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const slug = params.slug;
  const { content, frontMatter } = await getPost(slug);
  return <Post content={content} frontMatter={frontMatter} />;
}
