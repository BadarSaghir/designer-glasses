import React from 'react';
import GlassesLayout from '../../components/Layout/GlassesLayout';
import heroImg from '../../assets/page2/img.png';
import { useTheme } from '@mui/material';
import ProductsLayout from '../../components/Layout/ProductsLayout';
import Filter from '../../components/Filter/Filter';

const Index = () => {
  return (
    <GlassesLayout header={heroImg.src} showHeader={true}>
      <ProductsLayout>
        <div className={`md:bg-tertiaryMain flex md:bg-opacity-40 md:flex-1 md:pt-12`}>
         <Filter />
        </div>


        <div className="md:flex-[4] flex-col flex md:flex md:pt-12">
          


        </div>
      </ProductsLayout>
    </GlassesLayout>
  );
};

export default Index;
