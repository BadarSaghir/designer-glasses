import Button from '@mui/material/Button';
import { FunctionComponent, useState } from 'react';
import { FilterContainer, FilterHideButton, FilterSortButton } from './styles';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import React from 'react';
import { useSetRecoilState } from 'recoil';
import { filterAtomState, IFilterAtom } from '../../recoil/atom/filterAtom';
import { products } from '../../dumyData/products.data';
import Product from './Product';

// interface ProductsProps {

// }

const Products: FunctionComponent = () => {
  const setFilterState = useSetRecoilState(filterAtomState);
  const [show, setShow] = useState(true);

  const handleReset = () => {
    setFilterState((state) => {
      for (const key in state) {
        state = {
          ...state,
          [key as keyof IFilterAtom]: {
            ...state[key as keyof IFilterAtom],
            selected: -1,
          },
        };
      }
      return {
        ...state,
      };
    });
  };

  return (
    <div className="w-full h-full flex flex-col">
      <FilterContainer>
        <FilterHideButton variant="text" onClick={() => setShow(!show)}>
          {show ? 'HIDE FILTER' : 'SHOW FILTER'}
        </FilterHideButton>
        <FilterSortButton
          show={show}
          variant="contained"
          onClick={handleReset}
          className="bg-secondaryMain"
        >
          CLEAR Filter
        </FilterSortButton>
      </FilterContainer>
      <div className=" flex flex-col justify-center items-center px399:grid  gap-2 grid-cols-1 px399:grid-cols-2 pl-[20%] pr-[20%] pt-5  sm:grid-cols-2 px1260:grid-cols-3   sm:p-24 md:gap-6 lg:gap-6 h-full w-full">
        {products.map((val, idx) => (
         
         idx<6? <Product key={idx} {...val} />:<></>
        ))}
      </div>
    </div>
  );
};

export default Products;
