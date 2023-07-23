export interface MatterPostData {
  title: string;
  resume: string;
  date: string;
  tags: string[];
}

export interface Post extends MatterPostData {
  slug: string;
}
