import { create } from 'zustand';
import { combine, devtools, persist } from 'zustand/middleware';
import {
  FilterColor,
  FilterFrameType,
  FilterGender,
  FilterShape,
  FilterSize,
} from '../data';
// interface FilterState {

// }

export const useFilterStore = create(
  combine(
    {
      gender: {
        title: FilterGender.title,
        selectedGender: -1,
        genders: FilterGender.list,
      },
      shape: {
        title: FilterShape.title,
        selectedShape: -1,
        shapes: FilterShape.list,
      },
      color: {
        title: FilterColor.title,
        selectedColor: -1,
        colors: FilterColor.list,
      },
      frameType: {
        title: FilterFrameType.title,
        selectedframeTypes: -1,
        frameTypes: FilterFrameType.list,
      },
      size: {
        title: FilterSize.title,
        selectedSize: -1,
        sizes: FilterSize.list,
      },
    },

    (set,get) => ({

      setGender: (select: number) =>
        set((state) => ({
          ...state,
          gender: { ...state.gender, selectedGender: select },
        })),

      setColor: (select: number) =>
        set((state) => ({
          ...state,
          colors: { ...state.colors, selectedColor: select },
        })),

      setFrameType: (select: number) =>
        set((state) => ({
          ...state,
          frameType: { ...state.frameType, selectedframeType: select },
        })),
      setSize: (select: number) =>
        set((state) => ({
          ...state,
          size: { ...state.size, selectedSize: select },
        })),

      setShape: (select: number) =>
        set((state) => ({
          ...state,
          shape: { ...state.shape, selectedShape: select },
        })),

      getGender: () =>get().gender.genders[get().gender.selectedGender],
      getColor: () =>get().color.colors[get().color.selectedColor],
      getFrameType:() =>get().frameType.frameTypes[get().frameType.selectedframeTypes],
      getSize: () =>get().size.sizes[get().size.selectedSize],
      getShape: () =>get().shape.shapes[get().shape.selectedShape]

    })
  )
);
// useFilterStore((state)=>state.colors)
