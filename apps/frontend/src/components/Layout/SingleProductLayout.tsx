import { Children, PropsWithChildren, useState } from 'react';
import { ProductModel } from '@designer-glasses/libs/models/Products/products.interface';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CircleIcon from '@mui/icons-material/Circle';
import CheckIcon from '@mui/icons-material/Check';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
function SingleProductLayout({
  children,
  product,
}: PropsWithChildren & { product?: ProductModel }) {
  const [selectedImage, setSelectedImage] = useState(0);
  const len = product?.images.length ||0;
  return (
    <div className="flex flex-col  pt-6 pb-16 w-[100%]">
      <div className="flex   flex-col justify-center p-4 md:justify-around md:flex-row w-[100%]  md:pl-28 md:p-16 md:pr-72">
        <div className=" gap-4 flex-col  w-[100%] aspect-square md:p-8 flex items-center justify-center bg-white  md:w-[600px]">
          <div
            className="flex-1 w-[100%] h-[100%] flex flex-col justify-between"
            style={{
              backgroundImage: `url(${product?.images[selectedImage]})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: '100% 100%',
            }}
          >
            <div className="w-[100%] flex justify-between px-4 py-2">
              <div
                className="bg-danger-200 w-28 text-secondaryMain font-semibold text-opacity-70 text-center px-2 py-1 rounded-md
              "
              >
                {product?.advertisment.type.toLocaleUpperCase()}
              </div>
              <div className="cursor-pointer opacity-70">
                {/* <FavoriteIcon fontSize='large'  sx={(theme)=>({color:theme.paletes.secondary})}/> */}
                <FavoriteBorderIcon
                  fontSize="large"
                  sx={(theme) => ({ color: theme.paletes.secondary })}
                />
              </div>
            </div>{' '}
            <div className="w-[100%] flex justify-between">
              <div className='cursor-pointer'  onClick={() =>
                    setSelectedImage((prevSelectedImage) => (prevSelectedImage - 1 + len) % len)

                }>
                {' '}
                <ArrowBackIosNewIcon />{' '}
              </div>
              <div
              className='cursor-pointer'
                onClick={() =>
                  setSelectedImage(
                    (prevSelectedImage) => (prevSelectedImage + 1) % len
                  )
                }
              >
                <ArrowForwardIosIcon />
              </div>
            </div>
            <div className="flex w-[100%] justify-center pb-4">
              {/* <div className="text-lg cursor-pointer font-bold text-secondaryMain border-solid border-tertiaryMain border-[2px] rounded-lg  text-opacity-70 px-3">
                {'TRY ON'}
              </div> */}
            </div>
          </div>
          <div className="images flex justify-evenly gap-6 pb-3 w-[100%]">
            {product?.images.map((item, idx) => {
              if (idx <= 2)
                return (
                  <div
                    onClick={(e) => {
                      setSelectedImage(idx);
                    }}
                    key={idx}
                    className="cursor-pointer  w-32 h-32 flex flex-col justify-between"
                    style={{
                      backgroundImage: `url(${item})`,
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: '100% 100%',
                    }}
                  ></div>
                );
            })}
          </div>

        </div>
        <div className="flex  text-2xl justify-center items-center flex-col">
          <div className="text-tertiaryMain font-bold">{product?.name}</div>
          <div>
            {product?.colors?.map((color, idx) =>
              idx <= 5 ? <CircleIcon key={idx} style={{ color: color }} /> : ''
            )}
          </div>
          <div className="text-secondaryMain text-lg font-bold">
            {product?.prices?.map((price, idx) => (idx == 0 ? price : ''))}
          </div>
          <div className="flex justify-center items-center gap-2">
            <h1 className="text-base font-bold text-secondaryMain">SIZES :</h1>{' '}
            {product?.sku?.map((size, idx) => (
              <div
                className="font-bold text-opacity-75 text-sm text-secondaryMain flex"
                key={idx}
              >
                {size.toLocaleUpperCase()}
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-danger-700 text-lg font-bold mt-4 text-center">
              PRICES INCLUDES
            </h2>{' '}
            {product?.warranties?.map((ads, idx) => (
              <div
                className=" text-base font-bold text-secondaryMain text-opacity-80"
                key={idx}
              >
                {<CheckIcon fontSize="small" color="info" />} {ads}
              </div>
            ))}
          </div>
          <div className="mt-8 flex gap-4 flex-col">
            {['SELECT LENSES', 'BUY FRAME ONLY', 'ADD TO CART'].map(
              (v, idx) => (
                <div key={idx}>
                  <button className="text-base rounded py-1 text-primaryMain  font-bold bg-tertiaryMain  block min-w-[200px]">
                    {v}
                  </button>
                </div>
              )
            )}
          </div>
          <div>{}</div>
          <div>{}</div>
          <div>
            {
              //
            }
          </div>
        </div>
      </div>
      {Children.toArray(children).map((child, idx) => (
        <div key={idx}>{child}</div>
      ))}
    </div>
  );
}

export default SingleProductLayout;
