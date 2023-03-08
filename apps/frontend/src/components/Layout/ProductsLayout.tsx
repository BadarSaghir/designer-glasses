import { PropsWithChildren } from 'react';

function ProductsLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex-1 flex md:flex-col  md:relative md:top-[-40px]-z-10">

      <div className="flex-1 flex flex-col    md:flex-row  md:relative md:top-[-50px] -z-10">
        {children}
      </div>
    </div>
  );
}

export default ProductsLayout;
