import React from 'react'
import Image from "next/image"


const Seller = ({imgSrc}:{imgSrc:string}) => {
  return (
    <div className="flex h-full w-full justify-center items center  "><Image className="" src={imgSrc}  width={160} height={90} alt={"Sellers"} /></div>
  )
}





export default Seller;
