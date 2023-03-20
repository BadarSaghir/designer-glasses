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
// import 'bootstrap/dist/css/bootstrap.min.css';
const ProductPage = ({product}:{product:ProductModel}) => {
  return (
    <div>
      <Navbar navitems={navItems} logo={Logo} />
      <SingleProductLayout product={product}>
        {/* <p className='' >Divi</p> */}
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

      // posts,
    },
  };
};

export default ProductPage;
