
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
paletes:{
  primary:string;
  secondary:string;
  tertiary:string;
  whiteMain:string
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
paletes:{
  primary:"#000000",
  secondary:"#14213d",
  tertiary:"#fca311",
  whiteMain:"#e5e5e5",
},
sellerBg:"#ddeffb",
secondaryColor:"#fecf00",
button:{
  heroBtnBgColor:"#3e369a",
  heroBtnTextColor:"#fdfdff"
}

}as ThemeOptions);
