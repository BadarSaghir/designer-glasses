import { Typography, useTheme } from '@mui/material'
import Grid from '@mui/material/Grid'
import React, { PropsWithChildren } from 'react'
import { SEE_ALL_SELLERS_BUTTON, SHOW_ALL_BRANDS_BUTTON } from '../../strings'
import ViewButton from '../../ViewButton'
import Brand from './Brand'

type Props = PropsWithChildren &{
  brandImagesSrc?:string[]
  brandTitles:string[],
  route?:string,

}

const Brands = ({route,brandImagesSrc=['none','none','none','none','none','none'],brandTitles}: Props) => {
  const theme= useTheme()
  return (
    <div className=' h-[100%] flex flex-col  items-center justify-center py-16 gap-2'>
<div className='flex flex-1'>

        {brandTitles.map((txt,idx)=>{

          return <div className="" key={idx} ><Typography letterSpacing={'0.5rem'} variant='h6' key={idx} color={(theme)=>theme.button.heroBtnBgColor}>{txt}</Typography></div>
        })}

    </div>

    <div  className='flex-1 w-full  flex'>
      <div className='flex h-16 gap-1 p-1 sm:h-16 md:h-24  items-center w-full justify-evenly'>{brandImagesSrc.map((src,idx)=><div className='flex items-center h-full' key={idx} ><Brand src={src} key={idx} /></div>)}</div>
      </div>
    <div className="flex-1"><ViewButton bgColor={theme.navbar.bg_logo} shadowColor={"rgba(255,160,160,0.75)"} route={route?route:"/brands"}size='medium' fontColor={theme.secondaryColor} variant='outlined' text={SHOW_ALL_BRANDS_BUTTON}/></div>
    </div>
  )
}

export default Brands
