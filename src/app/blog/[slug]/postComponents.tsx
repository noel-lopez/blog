import Image, { ImageProps } from "next/image";
import Link, { LinkProps } from "next/link";

export const components = {
  h1: (props: React.HTMLProps<HTMLHeadingElement>) => (
    <h1
      {...props}
      className="border-b font-bold mb-4 pb-12 sm:text-4xl text-2xl text-center tracking-tight"
    />
  ),
  h2: (props: React.HTMLProps<HTMLHeadingElement>) => (
    <h2 {...props} className="font-medium mt-8 sm:text-3xl text-xl" />
  ),
  h3: (props: React.HTMLProps<HTMLHeadingElement>) => (
    <h3 {...props} className="font-medium mt-6 sm:text-2xl text-lg" />
  ),
  Image: (props: ImageProps) => (
    <Image
      {...props}
      className="h-auto leading-none w-full"
      alt={props.alt || "Imagen"}
    />
  ),
  Link: (props: LinkProps) => (
    <Link
      {...props}
      className="hover:underline hover:text-blue-600 text-blue-600 hover:bg-sky-50/50"
    />
  ),
  blockquote: (props: React.HTMLProps<HTMLQuoteElement>) => (
    <blockquote {...props} className="bg-blue-50 p-4" />
  ),
};
