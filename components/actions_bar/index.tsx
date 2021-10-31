import { CloudDownload, LinkedIn, GitHub } from '@mui/icons-material';
import Link from 'next/link';

const ActionsBar: React.FC = () => {
  return (
    <span className="actions-bar">
      <Link href="/docs/cv_Juan_Lamas.pdf" passHref>
        <a target="_blank" rel="noopener noreferrer" title="Download CV">
          <CloudDownload className="lateral-action" />
        </a>
      </Link>
      <Link href="https://www.linkedin.com/in/juan-carlos-lamas-alfaro/" passHref>
        <a target="_blank" rel="noopener noreferrer" title="LinkedIn">
          <LinkedIn className="lateral-action" />
        </a>
      </Link>
      <Link href="https://github.com/cococov" passHref>
        <a target="_blank" rel="noopener noreferrer" title="GitHub">
          <GitHub className="lateral-action" />
        </a>
      </Link>
      <span className="flex flex-col flex-grow justify-end align-center">
        <button className="pb-1 text-sm text-darkText cursor-pointer hover:text-text">
          About
        </button>
      </span>
    </span>
  );
};

export default ActionsBar;