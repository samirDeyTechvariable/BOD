import { createAtom } from 'utils/recoil';
import { atom, selector, selectorFamily } from 'recoil';

import { EMPTY_OBJECT } from 'constants/app.constants';

import SpecialityService from '../services/SpecialityService';


const intitState = {
  speciality: EMPTY_OBJECT,
};

export const specialityControlAtom = createAtom('specialityControlAtom', intitState);

export const specialityQuery = selector({
    key : 'specialityQuery',
    get : async () => {
        const specilaitities = await SpecialityService.getAll();
        return specilaitities;
    }
});

export const clearSpeciality = selector({
    key : 'clearSpeciality',
    set : ({set}) => {
        set(specialityControlAtom,EMPTY_OBJECT)
    }
});

export const setSpeciality = selector({
    key : 'setSpecality',
    set : ({set},speciality) => {
        set(specialityControlAtom,speciality)
    }
});

