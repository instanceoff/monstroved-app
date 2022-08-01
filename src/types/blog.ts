export enum EBlogBlockType {
  text = 'text',
  image = 'image',
  video = 'video',
}

export type TBlogBlockImage = {
  image: string[];
};

export type TBlogBlockText = {
  text: string;
};

export type TBlogBlockVideo = {
  url: string;
};

export type TBlogBlockContent<T> = TBlogBlockImage | TBlogBlockText;

export interface IBlock {
  type: EBlogBlockType;
  content: Object;
}

// export default EBlogBlockType;
