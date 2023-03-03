import {  Theme,styled, useTheme } from '@mui/material/styles';
import logo from "../../assets/home/guess logo.png" 
import React from 'react'
import Image from 'next/image';
import ViewButton from '../ViewButton';

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
const FooterButton = styled(ViewButton)(({theme})=>({
  backgroundColor:theme.paletes.secondary
}))
const Footer = (props: Props) => {
  const theme=useTheme()
  return (
    <FooterBox className="flex-col sm:flex-row gap-5 md:gap-0 flex min-h-[20vh] justify-evenly p-4">
    <div className="lg:w-1/4 flex-1 flex justify-center items-center">
      <Image src={logo}  className="h-[10rem] w-[10rem]" alt="designer logo"/>
    </div>
    <div className="lg:w-1/3 flex-1 flex flex-col font-extrabold text-3xl tracking-wider text-center justify-center items-center">
      <h5>LETS STAY IN TOUCH</h5>
      <h5>FOLLOW US ON</h5>

    </div>
    <div className="lg:w-1/4  flex-1 flex justify-center items-center ">{props.social.map((v,idx)=> <div className='flex-1 flex item-center justify-center' key={idx }><Image  width={50} height={50} src={v.icon} alt={v.placeholder}/></div>)}</div>
    <div className="lg:w-1/4 flex flex-1 justify-center items-center">
      <div  className="lg:w-1/4 flex flex-1 justify-center items-center">
<FooterButton bgColor={theme.paletes.secondary} route='/'  fontColor='white' size='small' shadowColor='blue' variant='contained' text='Sign Up' />
</div>
    </div>
  </FooterBox>
  )
}

export default Footer