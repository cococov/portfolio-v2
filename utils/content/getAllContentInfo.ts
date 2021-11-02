import { getContentByFileName, getFiles } from 'utils/files';
import type { Content, ContentInfo, Language } from 'utils/types';
import { reduce, map, pipe, split, slice, join, isEmpty } from 'ramda';


const getAllContentInfo = (contentType: string, language: Language): ContentInfo[] => {
  const contents = map(
    pipe(split('.'), slice(0, -1), join('')),
    getFiles(contentType, language)
  );

  return reduce((acc: ContentInfo[], elm: ContentInfo) => {
    const file: Content = getContentByFileName(contentType, language, elm);
    const info: ContentInfo = file.contentInfo;
    return isEmpty(info) ? acc : [...acc, info];
  }, [], contents);
};

export default getAllContentInfo;