import type { NextPage, GetStaticProps } from 'next';
import { Layout, Content } from 'components';
import { getAllProjectsInfo } from 'utils/content';
import type { ProjectInfo } from 'utils/types';

const Home: NextPage<{ projectsInfo: ProjectInfo[] }> = ({ projectsInfo }) => {
  return (
    <Layout projectsInfo={projectsInfo}>
      <Content>
        Hola Mundo
      </Content>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const projectsInfo = getAllProjectsInfo('spa');

  return {
    props: {
      projectsInfo
    },
  }
}

export default Home;
