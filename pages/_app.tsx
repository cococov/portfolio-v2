import 'styles/globals.css';
import 'styles/baseStyles.css';
import 'styles/tailwindUtilityClasses.css';
import type { AppProps } from 'next/app';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faJava,
  faReact,
  faPython,
  faJsSquare,
} from '@fortawesome/free-brands-svg-icons';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';

library.add(faJava, faReact, faPython, faJsSquare, faCopyright);

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
