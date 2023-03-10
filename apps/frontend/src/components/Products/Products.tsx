import Button from '@mui/material/Button';
import { FunctionComponent, useState } from 'react';
import { FilterContainer, FilterHideButton, FilterSortButton } from './styles';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import React from 'react';
import { useSetRecoilState } from 'recoil';
import { filterAtomState, IFilterAtom } from '../../recoil/atom/filterAtom';
import Product from './Product';
import Pagination from '@mui/material/Pagination';
import { ProductModel } from '@designer-glasses/libs/models/Products/products.interface';
import ReactPaginate from 'react-paginate';

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
            selected: -1,
          },
        };
      }
      return {
        ...state,
      };
    });
  };

  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + 6;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = products.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(products.length / 6);

  // Invoke when user click to request another page.
  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * 6) % products.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <div className="w-full h-full flex flex-col pb-24">
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
      <div className=" flex flex-col justify-center items-center px399:grid  gap-12 grid-cols-1 px399:grid-cols-2 pl-[20%] pr-[20%] pt-5  sm:grid-cols-2 px1260:grid-cols-3   sm:p-24 md:gap-6 lg:gap-12 h-full w-full">
        {products.map((val, idx) =>
          idx < 6 ? <Product key={idx} {...val} /> : <></>
        )}
      </div>
      <div className="w-full flex items-center justify-center">
        <ReactPaginate
        className='flex gap-3 text-secondaryMain font-semibold'
          breakLabel="..."
          nextLabel="next >"
          activeLinkClassName=' text-tertiaryMain'
          selectedPageRel={"a"}
          onPageChange={handlePageClick}
          pageRangeDisplayed={6}
          pageCount={9}
          previousLabel="< previous"
          renderOnZeroPageCount={()=>null}
        />{' '}
      </div>
    </div>
  );
};

export default Products;
