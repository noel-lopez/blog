import fs from "fs";
import path from "path";
import matter from "gray-matter";
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

  const frontMatter: Post = {
    ...(data as PostMdxData),
    slug,
  };

  return {
    content,
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
  }, [])
  .sort((a, b) => {
    let arrDateA = a.date.split("-").map((item) => parseInt(item)); // DD-MM-YYYY
    let arrDateB = b.date.split("-").map((item) => parseInt(item)); // DD-MM-YYYY
    let dateA = new Date(arrDateA[2], arrDateA[1] - 1, arrDateA[0]);
    let dateB = new Date(arrDateB[2], arrDateB[1] - 1, arrDateB[0]);
    return dateB.getTime() - dateA.getTime();
  });
};

export const getMDXFormattedDate = (date: string) => {
  // date is formatted as DD-MM-YYYY
  const [day, month, year] = date.split("-");
  const dateObj = new Date(
    parseInt(year),
    parseInt(month) - 1,
    parseInt(day)
  );
  return dateObj.toLocaleDateString("es-ES", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });
};
