import Tab from './tab';
import { Person, School, Work, Build } from '@mui/icons-material';

const TabsBar: React.FC = () => {
  return (
    <span className="tabs-bar">
      <Tab selected>
        <Person /><p className="ml-2">Profile</p>
      </Tab>
      <Tab>
        <Work /><p className="ml-2">Experience</p>
      </Tab>
      <Tab>
        <School /><p className="ml-2">Education</p>
      </Tab>
      <Tab>
        <Build /><p className="ml-2">Skills</p>
      </Tab>
    </span>
  );
};

export default TabsBar;