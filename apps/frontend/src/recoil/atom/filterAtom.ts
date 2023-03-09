import { atom } from "recoil";

import {FilterTypes} from "../../lib/FilterTypes"


import {
  FilterColor,
  FilterFrameType,
  FilterGender,
  FilterShape,
  FilterSize,
} from '../../components/data';

export type  IFilterAtom={

  [K in 'gender' | 'shape'|'color'|'frameType'|'size']: {
    title: string,
    selected: number,
    list:string[]
    filter: FilterTypes
    
  }
}
// interface FilterState {
  export const filterAtomState = atom<IFilterAtom>({
    key: "FilterState",
    default:  {
      gender: {
        title: FilterGender.title,
        selected: -1,
        list: FilterGender.list,
        filter:"text" as FilterTypes
        
      },
      shape: {
        title: FilterShape.title,
        selected: -1,
        list: FilterShape.list,
        filter:"text" as FilterTypes

      },
      color: {
        title: FilterColor.title,
        selected: -1,
        list: FilterColor.list,
        filter:"color" as FilterTypes

      },
      frameType: {
        title: FilterFrameType.title,
        selected: -1,
        list: FilterFrameType.list,
        filter:"text" as FilterTypes

      },
      size: {
        title: FilterSize.title,
        selected: -1,
        list: FilterSize.list,
        filter:"size" as FilterTypes

      },
    },

  });


  
// }

// export const useFilterStore = create(
//   combine(
   

//     (set,get) => ({

//       setGender: (select: number) =>
//         set((state) => ({
//           ...state,
//           gender: { ...state.gender, selectedGender: select },
//         })),

//       setColor: (select: number) =>
//         set((state) => ({
//           ...state,
//           colors: { ...state.colors, selectedColor: select },
//         })),

//       setFrameType: (select: number) =>
//         set((state) => ({
//           ...state,
//           frameType: { ...state.frameType, selectedframeType: select },
//         })),
//       setSize: (select: number) =>
//         set((state) => ({
//           ...state,
//           size: { ...state.size, selectedSize: select },
//         })),

//       setShape: (select: number) =>
//         set((state) => ({
//           ...state,
//           shape: { ...state.shape, selectedShape: select },
//         })),

//       getGender: () =>get().gender.genders[get().gender.selectedGender],
//       getColor: () =>get().color.colors[get().color.selectedColor],
//       getFrameType:() =>get().frameType.frameTypes[get().frameType.selectedframeTypes],
//       getSize: () =>get().size.sizes[get().size.selectedSize],
//       getShape: () =>get().shape.shapes[get().shape.selectedShape]

//     })
//   )
// );
// useFilterStore((state)=>state.colors)
