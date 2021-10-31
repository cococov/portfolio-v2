import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <link rel="shortcut icon" href="https://juanlamas.dev/favicon.ico" />
          <meta property="og:title" content="Portafolio profesional - Juan Carlos Lamas Alfaro" />
          <meta property="og:url" content="https://juanlamas.dev/" />
          <meta property="og:image" content="https://juanlamas.dev/img/portfoliopreview.png" />
          <meta property="og:description"
            content="Portafolio profesional, para demostrar mis habilidades como desarrollador, en donde emulando la interfaz gráfica de VsCode muestro una serie de proyectos personales, además de mi información de contacto, educación y experiencia." />
          <meta name="description"
            content="Portafolio profesional, para demostrar mis habilidades como desarrollador, en donde emulando la interfaz gráfica de VsCode muestro una serie de proyectos personales, además de mi información de contacto, educación y experiencia." />
          <meta name="keywords"
            content="cococov, juan carlos lamas, juan carlos lamas alfaro, juan lamas, jc lamas, juan, carlos, lamas, alfaro, react, portfolio, portafolio, programador, programmer" />
          <meta name="author" content="Juan Carlos Lamas Alfaro" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content="Portafolio profesional - Juan Carlos Lamas Alfaro" />
          <meta name="twitter:description"
            content="Portafolio profesional, para demostrar mis habilidades como desarrollador, en donde emulando la interfaz gráfica de VsCode muestro una serie de proyectos personales, además de mi información de contacto, educación y experiencia." />
          <meta name="twitter:site" content="@CoCoCov" />
          <meta name="twitter:creator" content="@CoCoCov" />
          <link rel="apple-touch-icon" href="logo192.png" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@100;200;300;400;500;700&family=Roboto:wght@100;300;400;500;700&display=swap" rel="stylesheet" />
          <link type="text/css" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
          <link type="text/css" href="/fontawesome/css/all.min.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument