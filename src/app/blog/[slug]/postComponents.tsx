import Image, { ImageProps } from "next/image";
import Link, { LinkProps } from "next/link";
import { Code } from "bright";
import codeTheme from "./codeTheme.json";

Code.theme = codeTheme;

export const components = {
  h1: (props: React.HTMLProps<HTMLHeadingElement>) => (
    <h1
      {...props}
      className="border-b font-bold mb-4 pb-12 sm:text-4xl text-2xl text-center tracking-tight"
    />
  ),
  h2: (props: React.HTMLProps<HTMLHeadingElement>) => (
    <h2 {...props} className="font-medium mt-5 sm:text-3xl text-xl" />
  ),
  h3: (props: React.HTMLProps<HTMLHeadingElement>) => (
    <h3 {...props} className="font-medium mt-4 sm:text-2xl text-lg" />
  ),
  Image: (props: ImageProps) => (
    <Image
      {...props}
      className="h-auto leading-none w-full"
      width={props.width || 1280}
      height={props.height || 720}
      alt={props.alt || "Imagen"}
    />
  ),
  Link: (props: LinkProps) => (
    <Link
      {...props}
      className="hover:underline hover:text-blue-500 text-blue-400"
    />
  ),
  blockquote: (props: React.HTMLProps<HTMLQuoteElement>) => (
    <blockquote {...props} className="bg-blue-50 p-4" />
  ),
  pre: (props: React.HTMLProps<HTMLPreElement>) => (
    <Code {...props} />
  ),
  // Inline code
  Inline: (props: React.HTMLProps<HTMLElement>) => (
    <code {...props} className="bg-blue-50 p-0.5 border border-blue-300 text-black/95 rounded-lg inline-block " />
  ),
  // cursive text
  em: (props: React.HTMLProps<HTMLElement>) => (
    <span {...props} className="italic font-medium" />
  ),
  ul: (props: React.HTMLProps<HTMLUListElement>) => (
    <ul {...props} className="list-disc list-inside" />
  ),
  li: (props: React.HTMLProps<HTMLLIElement>) => (
    <li {...props} className="mb-2 list-item" />
  ),
};
