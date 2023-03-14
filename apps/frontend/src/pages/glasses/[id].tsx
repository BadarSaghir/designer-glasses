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
import Logo from "../../assets/page2/img.png"
import SingleProductLayout from '../../components/Layout/SingleProductLayout';

const ProductPage = () => {
    
    
    return(
 <div>
         <Navbar navitems={navItems} logo={Logo} />
         <SingleProductLayout>
            
         </SingleProductLayout>
         <Footer logo={''} title={''} social={[]} signupLink={''}/>

</div>
)};


export const getStaticPaths:GetStaticPaths= async()=>{
    return {
    paths:[],
     
      fallback: true// See the "fallback" section below
    };
  }

export const getStaticProps:GetStaticProps=async(context)=> {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    // const res = await fetch('https://.../posts')

    // const posts = await res.json()
  
    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
      props: {
        // posts,
      },
    }
  }

export default ProductPage;
