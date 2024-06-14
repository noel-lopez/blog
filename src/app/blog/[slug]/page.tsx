import { getFileBySlug, getFiles, getMDXFormattedDate } from "@/lib/mdx";
import { Post as IPost } from "@/shared/types";
import { MDXRemote } from "next-mdx-remote/rsc";
import { components } from "./postComponents";
import Link from "next/link";

interface Props {
    content: string;
    frontMatter: IPost;
}

function Post({ content, frontMatter }: Props) {
    return (
        <main className="grid gap-5 max-w-3xl mb-10 mx-auto p-4">
            <p className="text-center mt-2 text-xs mb-2">
                {getMDXFormattedDate(frontMatter.date)}
            </p>
            <MDXRemote source={content} components={components} />
            <Link
                href="/"
                className="hover:underline hover:text-blue-500 text-blue-400 mt-8"
            >
                Go back
            </Link>
        </main>
    );
}

function PostNotFoundError() {
    return (
        <main className="grid gap-5 max-w-3xl mb-10 mx-auto p-4">
            <p className="text-center mt-2 text-s">
                Something went wrong
            </p>
            <h1 className="font-bold mb-2 sm:text-4xl text-2xl text-center tracking-tight">
                Post not found.
            </h1>
            <Link
                href="/"
                className="hover:underline hover:text-blue-500 text-blue-400 mt-8"
            >
                Go back
            </Link>
        </main>
    );
}

export const generateStaticParams = async () => {
    const filesList = getFiles();
    const paramsList = filesList.map((filename) => {
        return { slug: filename.replace(".mdx", "") };
    });

    return paramsList;
};

async function getPostContent(slug: string) {
    try {
        const { content, frontMatter } = await getFileBySlug({ slug });
        return { content, frontMatter };
    } catch (e) {
        return { error: { message: "Post not found" } };
    }
}

interface PostPageProps {
    params: {
        slug: string;
    };
}

export default async function PostPage({ params }: PostPageProps) {
    const slug = params.slug;
    const { content, frontMatter, error } = await getPostContent(slug);
    if (error) {
        return <PostNotFoundError />;
    }
    return <Post content={content} frontMatter={frontMatter} />;
}
