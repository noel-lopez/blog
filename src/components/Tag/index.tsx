import { getTagClassname } from "./controller";

interface Props {
  tag: string;
}

export default function Tag({ tag }: Props) {
  return (
    <span
      className={`cursor-pointer text-xs font-semibold px-4 py-2 rounded-full ${getTagClassname(
        { tag }
      )}`}
    >
      {tag}
    </span>
  );
}
