import { atom } from "recoil";

import {FilterTypes} from "../../lib/FilterTypes"


import {
  FilterColor,
  FilterFrameType,
  FilterGender,
  FilterShape,
  FilterSize,
} from '../../components/data';

export type  IFooterState={

  [K in 'gender' | 'shape'|'color'|'frameType'|'size']: {
    title: string,
    selected: number,
    list:string[]
    filter: FilterTypes
    
  }
}
// interface FilterState {
  export const footerState = atom<IFooterState>({
    key: "FooterState",
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


