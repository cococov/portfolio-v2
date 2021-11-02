import { ExpandMore } from '@mui/icons-material';
import type { ProjectInfo } from 'utils/types';

const ProjectsBar: React.FC<{ projectsInfo: ProjectInfo[] }> = ({ projectsInfo }) => {
  return (
    <>
      <span className="pt-1 border-t border-light cursor-default font-normal text-sm">
        <ExpandMore />
        PROJECTS
      </span>
      <ul className="pt-1 flex-grow">
        {projectsInfo.map(
          (projectInfo, index) => (
            <li
              className={index === 1 ? 'selected-project-item' : 'project-item'}
              key={`lateral-bar-project-${index}`}
            >
              {projectInfo.display_name}
            </li>
          )
        )}
      </ul>
    </>
  );
};

export default ProjectsBar;