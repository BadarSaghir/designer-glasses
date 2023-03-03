
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
  bg:"#14213d",
  active:"#912356",
  text:"#fca311",
  bg_logo:"#ffffff"
},
paletes:{
  primary:"#000000",
  secondary:"#14213d",
  tertiary:"#fca311",
  whiteMain:"#e5e5e5",
},
sellerBg:"#ddeffb",
secondaryColor:"#fca311",
button:{
  heroBtnBgColor:"#14213d",
  heroBtnTextColor:"#e5e5e5"
}

}as ThemeOptions);
