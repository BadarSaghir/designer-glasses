import React from 'react'
import Image from "next/image"


const Seller = ({imgSrc}:{imgSrc:string}) => {
  return (
    <div className="flex h-full w-full justify-center items center  "><Image className="w]" src={imgSrc}  width={160} height={8} alt={"Sellers"} /></div>
  )
}





export default Seller;
