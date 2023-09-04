import Link from "next/link";
import { getTagClassname } from "./tagTypes";

interface Props {
  tag: string;
  currentTag?: string;
}

export default function ActionTag({ tag, currentTag }: Props) {
  return (
    <Link href={`/?tag=${tag}`}>
      <span
      className={`cursor-pointer text-xs font-semibold px-4 py-2 rounded-full ${getTagClassname(
        { tag, currentTag }
      )}`}
    >
      {tag}
    </span>
    </Link>
  )
}