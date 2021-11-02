export type Content = {
  contentInfo: ContentInfo;
  markdownBody: string;
}

export type ContentInfo = AboutMeInfo | ProjectInfo | any;

export type AboutMeInfo = {
  file_name: string;
  display_name?: string;
  title?: string;
}

export type ProjectInfo = {
  file_name: string;
  display_name: string;
  title: string;
  links?: Link[];
  technologies?: Technologies;
}

export type Link = {
  title: string;
  url: string;
}

export type Technologies = {
  languages?: string[];
  libraries?: string[];
  otros?: string[];
}

export type Language = 'spa';