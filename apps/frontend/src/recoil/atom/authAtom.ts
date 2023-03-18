import { atom } from 'recoil';

type ModalType = 'none' | 'login' | 'signup';

export const modalState = atom<ModalType>({
  key: 'modalState',
  default: 'none',
});
