import { Typography, useTheme } from '@mui/material'
import React, { Children, PropsWithChildren } from 'react'


type Props = PropsWithChildren;

const FeaturesLayout = ({children}:Props) => {
  const childrens=Children.toArray(children);
  // const theme= useTheme()
  return (
    <div className=' h-[100%] flex flex-col  items-center'>
<div className='flex'>
        {childrens[0]}

    </div>

    <div  className=' w-full h-full flex'>
      <div className='flex h-full gap-1 p-1  items-center w-full justify-evenly'>
        {childrens[1]}</div>
      </div>
    <div className="">
      {childrens[2]}
    </div>
    <div className="">
      {childrens[3]}
    </div>
    </div>
  )
}

export default FeaturesLayout
