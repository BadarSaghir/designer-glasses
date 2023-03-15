import { Children, PropsWithChildren } from 'react';
import {ProductModel} from "@designer-glasses/libs/models/Products/products.interface"

function SingleProductLayout({ children }: PropsWithChildren&{product?:ProductModel}) {
  return (
    <div className="flex col bg-gray-700 sm:p-52">
      <div className="flex-row">
        <div >

        </div>
        <div></div>
      </div>
      {Children.toArray(children).map((child, idx) => (
        <div key={idx}>{child}</div>
      ))}
    </div>
  );
}

export default SingleProductLayout;
