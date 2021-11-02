import { getAllContentInfo } from 'utils/content';
import type { ProjectInfo, Language } from 'utils/types';

const getAllProjectsInfo = (language: Language): ProjectInfo[] => {
  return getAllContentInfo('projects', language)
};

export default getAllProjectsInfo;