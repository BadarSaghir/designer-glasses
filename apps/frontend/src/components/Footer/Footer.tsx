import {  Theme,styled } from '@mui/material/styles';
 
import React from 'react'

type Props = {
  logo:string;
  title:string;
  social:{placeholder:string, url:string,icon:string}[];
  signupLink:string
}

const FooterBox = styled('footer')(({theme})=>({
backgroundColor:theme.sellerBg,
alignItems:"center",
color:theme.paletes.tertiary
})) 

const Footer = (props: Props) => {
  return (
    <FooterBox className="flex-col sm:flex-row flex h-[20vh] justify-between">
    <div className="w-1/4 flex justify-center items-center">

    </div>
    <div className="w-1/4 flex justify-center items-center">Item 2</div>
    <div className="w-1/4 flex justify-center items-center">Item 3</div>
    <div className="w-1/4 flex justify-center items-center">Item 4</div>
  </FooterBox>
  )
}

export default Footer