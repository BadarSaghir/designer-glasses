import { Children, PropsWithChildren } from 'react';
import { ProductModel } from '@designer-glasses/libs/models/Products/products.interface';
import CircleIcon from '@mui/icons-material/Circle';
function SingleProductLayout({
  children,
  product,
}: PropsWithChildren & { product?: ProductModel }) {
  return (
    <div className="flex col bg-gray-700 pt-16 pb-16 w-[100%]">
      <div className="p-8 flex flex-col justify-center items-center md:flex-row w-[100%] md:p-16">
        <div
          className="   w-[60vw] aspect-square md:p-28  bg-white  md:w-[600px]"
         
        >
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
        <div className="flex flex-1 text-2xl justify-center items-center flex-col">
          <div>{product?.name}</div>
          <div>
            {product?.colors?.map((color, idx) =>
              idx <= 5 ? <CircleIcon key={idx} style={{ color: color }} /> : ''
            )}
          </div>
          <div>
            {product?.prices?.map((price, idx) => (idx == 0 ? price : ''))}
          </div>
          <div>{product?.sku?.map((size, idx) => (idx == 0 ? size : ''))}</div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      {Children.toArray(children).map((child, idx) => (
        <div key={idx}>{child}</div>
      ))}
    </div>
  );
}

export default SingleProductLayout;
