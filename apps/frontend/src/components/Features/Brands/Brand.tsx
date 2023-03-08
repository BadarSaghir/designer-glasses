import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
type Props = {
  src: string;
};

const Brand = ({ src }: Props) => {

  return (
    <div
    className=" flex justify-center h-full w-full"
     
    >
      <div className=" flex justify-center h-full w-full">
        <Image
          className="h-full w-full"
          src={src}
          width={120}
          height={120}
          alt=""
        />
      </div>
    </div>
  );
};

export default Brand;



