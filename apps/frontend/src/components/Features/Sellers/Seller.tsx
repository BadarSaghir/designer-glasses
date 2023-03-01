import React from 'react'
import Image from "next/image"


const Seller = ({imgSrc}:{imgSrc:string}) => {
  return (
    <div><Image src={imgSrc}  width={50} height={50} alt={"Sellers"} /></div>
  )
}





export default Seller;
