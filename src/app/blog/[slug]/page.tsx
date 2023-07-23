import { getFileBySlug } from "@/lib/mdx";
import { Post as IPost } from "@/shared/types";
import { MDXRemoteSerializeResult } from "next-mdx-remote";

interface Props {
  source: MDXRemoteSerializeResult;
  frontMatter: IPost;
}

function Post({ source, frontMatter }: Props) {
  return <h1>Post {frontMatter.title}</h1>;
}

async function getPost(slug: string) {
  const { source, frontMatter } = await getFileBySlug({ slug });
  return { source, frontMatter };
}

interface PostPageProps {
  params: {
    slug: string;
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const slug = params.slug;
  const { source, frontMatter } = await getPost(slug);
  return <Post source={source} frontMatter={frontMatter} />;
}
