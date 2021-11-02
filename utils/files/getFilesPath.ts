import path from 'path';
import { map } from 'ramda';
import { getFiles } from 'utils/files';
import type { Language } from 'utils/types';

const root = process.cwd();

const getFilesPath = (contentType: string, language: Language): string[] => {
  return map(
    content => path.join(root, 'database', contentType, language, content),
    getFiles(contentType, language)
  );
}

export default getFilesPath;