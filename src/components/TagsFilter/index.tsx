import { tagClassMap } from "../Tag/controller"
import Tag from "../Tag"

export default function TagsFilter() {
  return (
    <div className="flex justify-center flex-wrap gap-2">
      <span className="text-center w-full text-sm font-semibold mb-2">
        Filtrar por etiquetas:
      </span>
      {Object.keys(tagClassMap).map((tag) => (
        <Tag key={tag} tag={tag} />
      ))}
    </div>
  )
}