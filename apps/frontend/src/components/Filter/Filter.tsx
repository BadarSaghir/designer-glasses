import { FunctionComponent, useEffect } from 'react';
import MainItem from './MainItem/MainItem';
import {
  FilterColor,
  FilterFrameType,
  FilterGender,
  FilterShape,
  FilterSize,
} from '../data';
import { filterAtom } from '../../recoil/atom/filterAtom';
import { useRecoilState } from 'recoil';

const Filter: FunctionComponent = () => {
  // const items = [
  //   FilterGender,
  //   FilterShape,
  //   FilterColor,
  //   FilterFrameType,
  //   FilterSize,
  // ];

 const [items,setItems] =useRecoilState(filterAtom)
  return (
    <div className="w-full h-ful  flex flex-col items-center">
      <h2 className="text-secondaryMain text-opacity-95  text-lg font-bold">
        {'Filter By'.toUpperCase()}
      </h2>
      <div>
        {/* {items.((item, idx) => (
          <MainItem key={idx} list={item.list} title={item.title} />
        ))} */}
      {Object.entries(items).map(([key,value],idx)=><div key={key}>he</div>)}
      </div>
      {/* <div> {state.color.selectedColor}</div> */}
    </div>
  );
};

export default Filter;
