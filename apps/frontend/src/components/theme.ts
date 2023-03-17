import { createTheme, ThemeOptions } from '@mui/material/styles';
declare module '@mui/material/styles' {
  interface Theme extends CustomOptions {
    customOptions: true;
  }
  // allow configuration using `createTheme`
  interface ThemeOptions extends CustomOptions {
    customOptions: true;
  }

  interface CustomOptions {
    navbar: {
      bg: string;
      text: string;
      active: string;
      bg_logo: string;
    };
    secondaryColor: string;
    sellerBg: string;
    button: {
      heroBtnBgColor: string;
      heroBtnTextColor: string;
    };
    paletes: {
      primary: string;
      secondary: string;
      tertiary: string;
      whiteMain: string;
    };
  }
}

export const theme = createTheme({
  navbar: {
    bg: '#143d59',
    active: '#912356',
    text: '#f4b41a',
    bg_logo: '#ffffff',
  },
  paletes: {
    primary: '#284177',
    secondary: '#143d59',
    tertiary: '#f4b41a',

    whiteMain: '#e5e5e5',
  },
  sellerBg: '#ddeffb',
  secondaryColor: '#f4b41a',
  button: {
    heroBtnBgColor: '#143d59',
    heroBtnTextColor: '#e5e5e5',
  },
} as ThemeOptions);
