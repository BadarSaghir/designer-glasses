import Image from 'next/image'
import React from 'react'

type Props = {
  src:string
}

const Brand = ({src}:Props) => {
  return (
    <div className=' flex justify-center h-full w-full'>
      <Image className='h-full w-full' src={src} width={80} height={80} alt="" />
      
      </div>
  )
}

export default Brand