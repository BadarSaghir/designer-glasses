import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../components/theme';
import { RecoilRoot } from "recoil";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader


function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to frontend!</title>
      </Head>
        <ThemeProvider theme={theme}>
          
      <main className="app">
        <RecoilRoot>
          <Component {...pageProps} />
          </RecoilRoot>
      </main>
        </ThemeProvider>
    </>
  );
}

export default CustomApp;
