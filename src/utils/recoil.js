import { atom } from 'recoil';

export const createAtom = (key, initialState) =>
  atom({
    key,
    default: initialState,
  });
