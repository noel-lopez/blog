interface TagClassMap {
  [key: string]: string;
}

export const tagClassMap: TagClassMap = {
  html: "bg-orange-100 text-orange-700",
  css: "bg-blue-100 text-blue-700",
  javascript: "bg-yellow-200 text-yellow-800",
  react: "bg-cyan-100 text-cyan-600",
  design: "bg-indigo-100 text-indigo-700",
  web: "bg-slate-200 text-slate-700",
  productividad: "bg-red-100 text-red-700",
  node: "bg-lime-100 text-lime-700",
  next: "bg-violet-100 text-violet-700",
  git: "bg-amber-100 text-amber-700",
  seo: "bg-rose-100 text-rose-700",
  npm: "bg-emerald-100 text-emerald-700",
  personal: "bg-blue-100 text-blue-700",
};

export const activeTagClassMap: TagClassMap = {
  html: "bg-orange-500 text-white",
  css: "bg-blue-500 text-white",
  javascript: "bg-yellow-300 text-black",
  react: "bg-cyan-400 text-black",
  design: "bg-indigo-500 text-white",
  web: "bg-slate-500 text-white",
  productividad: "bg-red-500 text-white",
  node: "bg-lime-500 text-black",
  next: "bg-violet-500 text-white",
  git: "bg-amber-500 text-black",
  seo: "bg-rose-500 text-white",
  npm: "bg-emerald-500 text-white",
  personal: "bg-blue-500 text-white",
};

export const getTagClassname = ({ tag, currentTag }: { tag: string, currentTag?: string }) => {
  if (currentTag && currentTag === tag) {
    return activeTagClassMap[tag] || "bg-gray-500 text-white";
  }
  return tagClassMap[tag] || "bg-gray-100 text-gray-700";
};
