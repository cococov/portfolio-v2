import { KeyboardArrowRight } from '@mui/icons-material';
import ProjectsBar from './projectsBar';
import type { ProjectInfo } from 'utils/types';

const ContentBar: React.FC<{ projectsInfo: ProjectInfo[] }> = ({ projectsInfo }) => {
  return (
    <span className="content-bar">
      <span className="pl-4 pt-4 pb-1 text-xs text-darkText">
        <p className="cursor-default">
          EXPLORER
        </p>
      </span>
      <ProjectsBar projectsInfo={projectsInfo} />
      <span className="pt-1 border-t border-light cursor-default font-normal text-sm">
        <KeyboardArrowRight />
        OUTLINE
      </span>
      <span className="pt-1 border-t border-light cursor-default font-normal text-sm">
        <KeyboardArrowRight />
        TIMELINE
      </span>
    </span>
  );
};

export default ContentBar;