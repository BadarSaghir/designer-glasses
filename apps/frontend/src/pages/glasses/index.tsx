import React, { useEffect } from 'react';
import GlassesLayout from '../../components/Layout/GlassesLayout';
import heroImg from '../../assets/page2/img.png';
import ProductsLayout from '../../components/Layout/ProductsLayout';
import Filter from '../../components/Filter/Filter';
import Products from '../../components/Products/Products';
import { products } from '../../dumyData/products.data';
import { useRecoilState } from 'recoil';
import { FilterHideState } from '../../recoil/atom/filterHideAtom';
import { styled } from '@mui/material';



const FilterBox=styled('div')({})

const Index = () => {
  const [hideState, setHideState] = useRecoilState(FilterHideState);
useEffect(()=>{
  console.log(hideState)

},[hideState])
  
  return(
  <GlassesLayout header={heroImg.src} showHeader={true}>
    <ProductsLayout>
      <FilterBox sx={{display:hideState?"none":" flex"}}
        className={`md:bg-tertiaryMain md:bg-opacity-40 md:flex-1 md:pt-12`}
      >
        <Filter />
      </FilterBox>
      <div className="md:flex-[4] flex-col flex justify-center md:flex md:pt-12">
        <Products products={products} />
      </div>
    </ProductsLayout>
  </GlassesLayout>
)};

export default Index;
