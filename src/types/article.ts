export interface IArticleInput {
  title: string;
  description: string;
}

export interface IArticle extends IArticleInput {
  imagePath?: string;
  imageURL?: string;
}
