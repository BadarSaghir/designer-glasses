import { atom } from 'recoil';

type FilterHideType = boolean;

export const FilterHideState = atom<FilterHideType>({
  key: 'FilterHideState',
  default: false,
});
