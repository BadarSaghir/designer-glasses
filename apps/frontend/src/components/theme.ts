
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
  active:string;
  bg_logo:string;
};
secondaryColor:string;
sellerBg:string;
button:{
  heroBtnBgColor:string;
  heroBtnTextColor:string;
}

}
}


export const theme = createTheme({
navbar:{
  bg:"#42379c",
  active:"#912356BB",
  text:"#DFCA9D",
  bg_logo:"#ffffff"
},
sellerBg:"#ddeffb",
secondaryColor:"#fecf00",
button:{
  heroBtnBgColor:"#3e369a",
  heroBtnTextColor:"#fdfdff"
}
}as ThemeOptions);
