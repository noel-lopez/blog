import { Post } from "@/shared/types";
import Link from "next/link";
import Tag from "../Tag";
import { getMDXFormattedDate } from "@/lib/mdx";

interface Props {
  data: Post;
}

export default function PostCard({ data }: Props) {

  const formattedDate = getMDXFormattedDate(data.date);

  return (
    <article className="relative before:content-['Click!'] before:absolute before:left-1/2 before:top-0 before:bg-blue-600 before:text-white before:-translate-x-1/2 before:-translate-y-1/2 before:-rotate-2 before:px-4 before:py-2 before:text-xs before:opacity-0 sm:before:hover:opacity-100 before:duration-300 before:rounded-full before:font-semibold before:z-20 before:shadow-lg before:shadow-blue-300">
      <Link
        href={`/blog/${data.slug}`}
        className="group/card relative p-4 sm:p-8 rounded grid gap-4 content-start hover:shadow-2xl hover:shadow-blue-100 border-2 border-blue-100 sm:border-transparent hover:border-blue-100 duration-300 h-full grid-rows-[repeat(3,auto)_1fr] overflow-hidden z-10 focus:ring-2 focus:ring-blue-200 focus:border-transparent"
      >
        <div className="flex flex-wrap gap-2">
          {data.tags.map((tag) => (
            <Tag tag={tag} key={tag} />
          ))}
        </div>
        <h3 className="font-semibold text-xl">{data.title}</h3>
        <p className="text-sm text-slate-600">{data.resume}</p>
        <span className="text-sm font-semibold place-self-end">
          {formattedDate}
        </span>
        <span className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 block w-1/4 h-1/4 blur-3xl bg-blue-200/75 group-hover/card:opacity-60 group-hover/card:w-full group-hover/card:h-full duration-300" />
      </Link>
    </article>
  );
}
