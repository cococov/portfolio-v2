import fs from 'fs';
import path from 'path';
import type { Language } from 'utils/types';

const root = process.cwd();

const getFiles = (contentType: string, language: Language): string[] => {
  return fs.readdirSync(path.join(root, 'database', contentType, language), 'utf-8');
}

export default getFiles;