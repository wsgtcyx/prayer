export type Post = {
  slug?: string;
  title?: string;
  content: string;
  metadata: {
    [key: string]: any;
  };
};
