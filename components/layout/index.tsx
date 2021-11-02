import Head from 'next/head';
import LateralBar from './lateral_bar';
import TabsBar from './tabs_bar';
import PathBar from './pathBar';
import type { ProjectInfo } from 'utils/types';

const Layout: React.FC<{ projectsInfo: ProjectInfo[] }> = ({ children, projectsInfo }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Juan Carlos Lamas Alfaro</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="app">
        <LateralBar projectsInfo={projectsInfo} />
        <span className="content-container">
          <TabsBar />
          <PathBar />
          {children}
        </span>
      </main>
    </>
  );
};

export default Layout;