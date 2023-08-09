interface TagClassMap {
  [key: string]: string;
}

export const tagClassMap: TagClassMap = {
  css: "bg-blue-100 text-blue-700",
  javascript: "bg-yellow-200 text-yellow-800",
  html: "bg-orange-100 text-orange-700",
  react: "bg-cyan-100 text-cyan-600",
  design: "bg-indigo-100 text-indigo-700",
  web: "bg-slate-200 text-slate-700",
  node: "bg-lime-100 text-lime-700",
  next: "bg-violet-100 text-violet-700",
  git: "bg-amber-100 text-amber-700",
  seo: "bg-rose-100 text-rose-700",
  npm: "bg-emerald-100 text-emerald-700",
  personal: "bg-blue-100 text-blue-700",
};

export const getTagClassname = ({ tag }: { tag: string }) => {
  return tagClassMap[tag] || "bg-gray-100 text-gray-700";
};
