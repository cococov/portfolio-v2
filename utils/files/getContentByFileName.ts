import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import type { Content, Language } from 'utils/types';

const root = process.cwd();

const getContentByFileName = (contentType: string, language: Language, fileName: string | string[]): Content => {
  const source = fs.readFileSync(path.join(root, 'database', contentType, language, `${fileName}.md`), 'utf8');

  const { data, content } = matter(source);

  return {
    contentInfo: data,
    markdownBody: content,
  };
};

export default getContentByFileName;