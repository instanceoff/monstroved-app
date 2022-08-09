export interface IArticleInput {
  title: string;
  description: string;
}

export interface IArticle extends IArticleInput {
  imagePath?: string;
  imageURL?: string;
}

export enum EBlockType {
  text = 'text',
  image = 'image',
  video = 'video',
}

// interface IText {
//   type: EBlockType.text;
//   content: string;
// }
// interface IImage {
//   type: EBlockType.image;
//   content: string;
// }
// interface IVideo {
//   type: EBlockType.video;
//   content: string;
// }

// type TBlockTypes = IText | IImage | IVideo;

export interface IBlock {
  position: number;
  type: EBlockType;
  content: string;
  path?: string;
  URL?: string;
}
