import { Children, PropsWithChildren } from 'react';
import { ProductModel } from '@designer-glasses/libs/models/Products/products.interface';
import CircleIcon from '@mui/icons-material/Circle';
function SingleProductLayout({
  children,
  product,
}: PropsWithChildren & { product?: ProductModel }) {
  return (
    <div className="flex col  pt-16 pb-16 w-[100%]">
      <div className="flex   flex-col justify-center p-8 md:justify-between md:flex-row w-[100%] md:p-16">
        <div className="   w-[100%] aspect-square md:p-28  bg-white  md:w-[600px]">
          <div
            className="flex-1 w-[100%] h-[100%]"
            style={{
              backgroundImage: `url(${product?.images[0]})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: '100% 100%',
            }}
          >
            {' '}
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
          <div className="flex gap-2">
            <h1>sizes :</h1>{' '}
            {product?.sku?.map((size, idx) => (idx == 0 ? size : ''))}
          </div>
          <div className="flex flex-col gap-2">
            <h2 className='text-danger-700 text-lg font-bold mt-4 '>Price Includes</h2>{' '}
            {product?.sku?.map((size, idx) => (idx == 0 ? size : ''))}
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
