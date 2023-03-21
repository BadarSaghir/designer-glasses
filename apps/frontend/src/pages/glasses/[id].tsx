import React from 'react';
import GlassesLayout from '../../components/Layout/GlassesLayout';
import heroImg from '../../assets/page2/img.png';
import ProductsLayout from '../../components/Layout/ProductsLayout';
import Filter from '../../components/Filter/Filter';
import Products from '../../components/Products/Products';
import { products } from '../../dumyData/products.data';
import { GetStaticPaths, GetStaticProps } from 'next';
import { Footer } from '../../components/Footer';
import { navItems } from '../../components/data';
import { Navbar } from '../../components/Navbar';
import Logo from '../../assets/page2/img.png';
import SingleProductLayout from '../../components/Layout/SingleProductLayout';
import { ProductModel } from '@designer-glasses/libs/models/Products/products.interface';
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
import InfoIcon from '@mui/icons-material/Info';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import ProductInfoTabs from '../../components/Products/ProductTabs/ProductTabs';
const iconsWarranty = [
  <AssuredWorkloadIcon key={0} className="text-primaryMain" />,
  <InfoIcon key={1} className="text-primaryMain" />,
  <VerifiedUserIcon key={1} className="text-primaryMain" />,
];
// import 'bootstrap/dist/css/bootstrap.min.css';
const ProductPage = ({ product,id }: { product: ProductModel,id:string }) => {
  return (
    <div>
      <Navbar navitems={navItems} logo={Logo} />
      <SingleProductLayout product={product} id={id}>
        <div className="w-[100%] bg-tertiaryMain justify-evenly bg-opacity-30 flex flex-wrap items-center md:h-[104px] p-3 text-start">
          {product?.promises &&
            Object.entries(product.promises).map(([key, val], idx) => {
              return (
                <div
                  className="text-secondaryMain font-bold flex items-center justify-center gap-1 "
                  key={idx}
                >
                  <div className="h-[100%] flex text-lg items-baseline">
                    {' '}
                    {iconsWarranty[idx]}
                  </div>
                  <div className="h-[100%] flex gap-1 mt-1">
                    <div> {val.status.toLocaleUpperCase()}</div>
                    <div className="h-[100%]"> {val.endstring}</div>
                  </div>
                </div>
              );
            })}

        
        </div>
        <div className='flex mt-14  px-[20%]'>
        <ProductInfoTabs product={product} />
        </div>
      </SingleProductLayout>
      <Footer logo={''} title={''} social={[]} signupLink={''} />
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],

    fallback: true, // See the "fallback" section below
  };
};

export const getStaticProps: GetStaticProps<
  { [key: string]: any },
  { id: string },
  { product: ProductModel | null }
> = async ({ params }) => {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  // const res = await fetch('https://.../posts')

  // const posts = await res.json()
  let product: ProductModel | null = null;
  let id = 0;
  if (params?.id) id = +params.id;
  if (products[id]) product = products[id];
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      product: product as ProductModel,
      id:id,

      // posts,
    },
  };
};

export default ProductPage;
