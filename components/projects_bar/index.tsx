import { ExpandMore, KeyboardArrowRight } from '@mui/icons-material';

const ProjectsBar: React.FC = () => {
  return (
    <span className="projects-bar">
      <span className="pl-4 pt-4 pb-1 text-xs text-darkText">
        <p className="cursor-default">
          EXPLORER
        </p>
      </span>
      <span className="pt-1 border-t border-light cursor-default font-normal text-sm">
        <ExpandMore />
        PROJECTS
      </span>
      <ul className="pt-1 flex-grow">
        <li className="project-item">project.js</li>
        <li className="selected-project-item">project.js</li>
        <li className="project-item">project.js</li>
      </ul>
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

export default ProjectsBar;