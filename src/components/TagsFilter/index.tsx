import { tagClassMap } from "../Tag/tagTypes"
import ActionTag from "../Tag/actionTag"
import Link from "next/link"

interface TagsFilterProps {
  currentTag?: string
}

export default function TagsFilter({currentTag}: TagsFilterProps) {
  return (
    <div className="flex justify-center flex-wrap gap-2">
      <span className="text-center w-full text-sm font-semibold mb-2">
        Filter by tag:
      </span>
      {Object.keys(tagClassMap).map((tag) => (
        <ActionTag key={tag} tag={tag} currentTag={currentTag} />
      ))}
      {currentTag && (
        <Link href="/" className="text-neutral-900/70 text-center text-sm font-semibold mt-4 hover:underline underline-offset-4">
          Clear filter
        </Link>
      )}
    </div>
  )
}