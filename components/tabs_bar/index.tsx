import { Tab } from 'components';
import { Person, School, Work, Build } from '@mui/icons-material';

const TabsBar: React.FC = () => {
  return (
    <span className="tabs-bar">
      <Tab language={<Person />} selected>Profile</Tab>
      <Tab language={<Work />}>Experience</Tab>
      <Tab language={<School />}>Education</Tab>
      <Tab language={<Build />}>Skills</Tab>
    </span>
  );
};

export default TabsBar;