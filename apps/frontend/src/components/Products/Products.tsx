import Button from '@mui/material/Button';
import { FunctionComponent, useState } from 'react';
import { FilterContainer, FilterHideButton, FilterSortButton } from './styles';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import React from 'react';
import { useSetRecoilState } from 'recoil';
import { filterAtomState, IFilterAtom } from '../../recoil/atom/filterAtom';
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
    </div>
  );
};

export default Products;
