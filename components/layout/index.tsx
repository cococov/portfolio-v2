import Head from 'next/head';
import { LateralBar, TabsBar, PathBar } from 'components';
import React from 'react';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Juan Carlos Lamas Alfaro</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="app">
        <LateralBar />
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