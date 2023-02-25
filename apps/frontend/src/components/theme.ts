
import {createTheme,ThemeOptions} from "@mui/material/styles"
declare module '@mui/material/styles' {
  interface Theme extends CustomOptions{
    customOptions:true

  }
  // allow configuration using `createTheme`
  interface ThemeOptions extends CustomOptions {
    customOptions:true;
  }
 interface CustomOptions{
 navbar:{
  bg:string;
  text:string;
  bg_logo:string;
}
}
}


export const theme = createTheme({
navbar:{
  bg:"gray",
  text:"white",
  bg_logo:"white"
}
}as ThemeOptions);