import React from 'react'
import Image from "next/image"


const Seller = ({imgSrc}:{imgSrc:string}) => {
  return (
    <div className="flex h-full w-full justify-center items center  "><Image className="h-[100%] w-[100%]" src={imgSrc}  width={160} height={8} alt={"Sellers"} /></div>
  )
}





export default Seller;