import { PropsWithChildren } from 'react';

function ProductsLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex-1 flex md:flex-col  md:relative md:top-[-40px] ">

      <div className="flex-1 flex flex-col    md:flex-row  md:relative md:top-[-10px] ">
        {children}
      </div>
    </div>
  );
}

export default ProductsLayout;
