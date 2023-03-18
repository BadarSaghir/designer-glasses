import Button from '@mui/material/Button';
import { FunctionComponent, useState } from 'react';
import { FilterContainer, FilterHideButton, FilterSortButton } from './styles';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import React from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { filterAtomState, IFilterAtom } from '../../recoil/atom/filterAtom';
import Product from './Product';
import Pagination from '@mui/material/Pagination';
import { ProductModel } from '@designer-glasses/libs/models/Products/products.interface';
import ReactPaginate from 'react-paginate';
import { FilterHideState } from '../../recoil/atom/filterHideAtom';

interface ProductsProps {
  products: ProductModel[];
}

const Products = ({ products }: ProductsProps) => {
  const setFilterState = useSetRecoilState(filterAtomState);
  const [show, setShow] = useState(true);

  const handleReset = () => {
    setFilterState((state) => {
      for (const key in state) {
        state = {
          ...state,
          [key as keyof IFilterAtom]: {
            ...state[key as keyof IFilterAtom],
            selected: [],
          },
        };
      }
      return {
        ...state,
      };
    });
  };

  // following the API or data you're working with.
  const [hideState, setHideState] = useRecoilState(FilterHideState);

  return (
    <div className="w-full h-full  flex flex-col ">
      <FilterContainer >
        <FilterHideButton variant="text" onClick={() => setHideState((state)=>!state)}>
          {!hideState ? 'HIDE FILTER' : 'SHOW FILTER'}
        </FilterHideButton>
        <FilterSortButton
          // show={show}
          sx={{
            display: 'block' ,
          }}
          variant="contained"
          onClick={handleReset}
          className="bg-secondaryMain"
        >
          CLEAR Filter
        </FilterSortButton>
       
      </FilterContainer>
      <div className=" flex flex-col lg:h-[200vh] justify-items-center items-center px399:grid md:grid-rows-3  gap-12 grid-cols-1  pl-[20%] pr-[20%] pt-5 sm:grid-cols-1 px1260:grid-cols-3  md:grid-cols-1 md:grid-r lg:grid-cols-3 px1014:grid-cols-1  sm:p-24 md:gap-6 lg:gap-2 h-full w-full">
        
        {products.map((val, idx) =>
          idx < 9 ? <Product key={idx} {...val} /> : <div key={idx}></div>
        )}
      </div>
      <div className="w-full flex items-center justify-center">
        <ReactPaginate
          className="flex gap-3 text-secondaryMain font-semibold"
          breakLabel="..."
          nextLabel="next >"
          activeLinkClassName=" text-tertiaryMain"
          selectedPageRel={'a'}
          // onPageChange={(e)=>{void}}
          pageRangeDisplayed={6}
          pageCount={9}
          previousLabel="< previous"
          renderOnZeroPageCount={() => null}
        />{' '}
      </div>
    </div>
  );
};

export default Products;
