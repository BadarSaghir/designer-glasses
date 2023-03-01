import { Typography } from '@mui/material'
import Grid from '@mui/material/Grid'
import React, { PropsWithChildren } from 'react'
import Brand from './Brand'

type Props = PropsWithChildren &{
  brandImagesSrc?:string[]
  brandTitles:string[],

}

const Brands = ({brandImagesSrc=['none','none','none','none','none','none'],brandTitles}: Props) => {
  return (
    <div className=' h-[100%] flex flex-col justify-between items-center pt-11 pb-6'>
<div className='flex'>
        {brandTitles.map((txt,idx)=>{

          return <div key={idx} ><Typography letterSpacing={'0.5rem'} variant='h6' key={idx} color={(theme)=>theme.button.heroBtnBgColor}>{txt}</Typography></div>
        })}

    </div>

    <div  className=' w-full flex'> 
      <div className='flex h-11 gap-1 p-1 sm:h-16 md:h-24 md:gap-12 items-center w-full justify-center'>{brandImagesSrc.map((src,idx)=><div className='flex items-center h-full' key={idx} ><Brand src={src} key={idx} /></div>)}</div>
      </div>
    <div className='bg-emerald-500'>ViewAll</div>
    </div>
  )
}

export default Brands
