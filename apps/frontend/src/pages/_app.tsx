import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../components/theme';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to frontend!</title>
      </Head>
        <ThemeProvider theme={theme}>
          
      <main className="app">
          <Component {...pageProps} />
      </main>
        </ThemeProvider>
    </>
  );
}

export default CustomApp;
