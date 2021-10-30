import Head from 'next/head';

const Layout: React.FC = ({ children }) => {
  return (
    <div className="app">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 text-center">
        {children}
      </main>
    </div>
  )
}

export default Layout;