import { ProductModel } from '@designer-glasses/libs/models/Products/products.interface';
import Image from 'next/image';
import { useState } from 'react';
import { Button } from '@mui/material';
import { motion } from 'framer-motion';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
// import {Favfil} from '@mui/icons-material';


function Product({
  advertisment,
  colors,
  date,
  frameType,
  genders,
  id,
  images,
  name,
  fav,
  shape,
  sku,
}: ProductModel & { fav?: boolean }) {
  const [selected, setSelected] = useState(0);
  const [timer, setTimer] = useState<NodeJS.Timer | null>(null);

  return (
    <div className=" bg-white cursor-pointer  pb-6  shadow-md relative h-[200px] w-[90%]  sm:[200px]   aspect-square sm:w-[200px] md:h-[200px] md:w-[200px]  flex flex-col justify-center items-center lg:min-w-[280px]  lg:min-h-[280px]">
      <div className="flex-1  aspect-square  items-center justify-center relative ">
        {images.map((value, idx) => (
          <>
            {selected == idx && (
              <motion.div
                className="px1025:h-[180px] relative  w-[100px] h-[100px] sm:h-[100px] sm:w-[100px] px1025:w-[180px]    px399:h-[100px] px399:w-[100px]"
                key={idx}
                initial={{ x: 0 }}
                animate={{ x: [-20, 0] }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}

                // onMouseEnter={() => {
                //   if (timer==null)
                //     setTimer(
                //       setInterval(() => {
                //         setSelected(images.length - selected);
                //       }, 1000)
                //     );
                // }}
                // onMouseLeave={() => {
                //   if (timer) clearInterval(timer);
                //   setTimer(null)
                // }}

                // transition={{ duration: selected === idx ? .5 : .2 }}
              >
                <div className="flex justify-between absolute w-[100%] p-2">
                  <div>
                    {advertisment.type && <Button  size='small' className='bg-tertiaryMain text-secondaryMain bg-opacity-30 font-bold'>{advertisment.type}</Button>}
                  </div>
                { fav? <div><FavoriteBorderIcon className='text-secondaryMain text-opacity-60' /></div>:
                  <div><FavoriteIcon className='text-secondaryMain bgse text-opacity-60' /></div>
            }
                </div>
                <Image
                  className="h-full w-full aspect-auto"
                  src={value}
                  height={240}
                  width={240}
                  alt={name}
                />
              </motion.div>
            )}
          </>
        ))}
        {/* <AnimatePresence>
          <motion.div
            className="px1025:h-[180px] flex  sm:h-[100px] sm:w-[100px] px1025:w-[180px]   border-solid border-black border-[1px]"
            key={selected}
            variants={{
              open: { opacity: 1, x: 0 },
              closed: { opacity: 0, x: '-100%' },
            }}
            animate={selected? "open" : "closed"}
          >
            <Image
              className="h-full w-full aspect-auto"
              src={images[selected]}
              height={240}
              width={240}
              alt={name}
            />
          </motion.div>
        </AnimatePresence> */}
      </div>
      <div className="flex flex-col w-[100%] text-center  items-center  gap-2  ">
        <div className="flex flex-row flex-1 gap-2 relative mb-[-20px] top-[-20px]">
          {colors.map((value, idx) => (
            <div
              key={idx}
              className="h-4 w-4 rounded-full bg-secondaryMain text-tertiaryMain "
              onClick={() => setSelected(idx)}
              style={{
                backgroundColor: idx === selected ? '' : value,
                border: idx === selected ? '2px solid ' : '',
              }}
            >
              {' '}
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-8">
          <h1 className="text-tertiaryMain font-bold text-lg h-[1px]">
            {name}{' '}
          </h1>
          <div className="flex flex-col gap-1 h-[60px]">
            <h3 className="text-secondaryMain h-28 flex-1 text-lg font-bold ">
              {advertisment.title}
            </h3>
            {advertisment.tryOn &&
            <Button
              className="lg:w-24 h-11 w-24 text-xs flex-1 hover:bg-secondaryMain hover:text-tertiaryMain bg-tertiaryMain bg-opacity-60 text-secondaryMain font-bold"
              variant="contained"
            >
              Try Now
            </Button>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
