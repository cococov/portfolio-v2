import ActionsBar from './actionsBar';
import ContentBar from './content_bar';
import type { ProjectInfo } from 'utils/types';

const LateralBar: React.FC<{ projectsInfo: ProjectInfo[] }> = ({ projectsInfo }) => {
  return (
    <span className="lateral-bar">
      <ActionsBar />
      <ContentBar projectsInfo={projectsInfo} />
    </span>
  );
};

export default LateralBar;