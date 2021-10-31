import { ActionsBar, ProjectsBar } from 'components';

const LateralBar: React.FC = () => {
  return (
    <span className="lateral-bar">
      <ActionsBar />
      <ProjectsBar />
    </span>
  );
};

export default LateralBar;