import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { PostMdxData, Post } from "@/shared/types";

const root = process.cwd();

export const getFiles = (): string[] =>
  fs.readdirSync(path.join(root, "src/data"));

export const getFileBySlug = async ({ slug }: { slug: string }) => {
  const mdxSource = fs.readFileSync(
    path.join(root, "src/data", `${slug}.mdx`),
    "utf-8"
  );

  const { data, content } = matter(mdxSource);

  const source = await serialize(content, {}); // TODO: implement mdx prism for code highlighting

  const frontMatter: Post = {
    ...(data as PostMdxData),
    slug,
  };

  return {
    source,
    frontMatter,
  };
};

export const getAllFilesMetadata = (): Post[] => {
  const files = getFiles();

  return files.reduce((allPosts: Post[], postSlug: string) => {
    const mdxSource = fs.readFileSync(
      path.join(root, "src/data", postSlug),
      "utf-8"
    );

    const { data } = matter(mdxSource);

    const post: Post = {
      ...(data as PostMdxData),
      slug: postSlug.replace(".mdx", ""),
    };

    return [
      {
        ...post,
      },
      ...allPosts,
    ];
  }, []);
};
