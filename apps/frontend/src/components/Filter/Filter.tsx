import { FunctionComponent, useEffect } from 'react';
import MainItem from './MainItem/MainItem';
import {
  FilterColor,
  FilterFrameType,
  FilterGender,
  FilterShape,
  FilterSize,
} from '../data';
import {
  filterAtomState as filterAtom,
  IFilterAtom,
} from '../../recoil/atom/filterAtom';
import { useRecoilState } from 'recoil';
import { styled } from '@mui/material';
import { FilterHideState } from '../../recoil/atom/filterHideAtom';

const FilerBox = styled('div')({});
const Filter: FunctionComponent = () => {
  // const items = [
  //   FilterGender,
  //   FilterShape,
  //   FilterColor,
  //   FilterFrameType,
  //   FilterSize,
  // ];
  const [items, setItems] = useRecoilState(filterAtom);
  return (
    <FilerBox
      className="w-full h-full  flex-col items-center"
    >
      <h2 className="text-secondaryMain text-center text-opacity-95  text-lg font-bold">
        {'Filter By'.toUpperCase()}
      </h2>
      <div className="w-full relative md:block grid xs:grid-cols-2">
        {/* {items.((item, idx) => (
          <MainItem key={idx} list={item.list} title={item.title} />
        ))} */}
        {Object.entries(items as IFilterAtom).map(([key, value], idx) => (
          <MainItem
            current={value.selected}
            filterKey={key}
            list={value.list}
            title={value.title}
            type={value.filter}
            isHorizontal={value.filter == 'size' ? false : true}
            key={key}
          />
        ))}
      </div>
      {/* <div> {state.color.selectedColor}</div> */}
    </FilerBox>
  );
};

export default Filter;
