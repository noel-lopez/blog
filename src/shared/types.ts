export interface PostMdxData {
  title: string;
  resume: string;
  date: string;
  tags: string[];
}

export interface Post extends PostMdxData {
  slug: string;
}
