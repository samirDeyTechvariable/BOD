import { createAtom } from 'utils/recoil';
import { atom, selector, selectorFamily } from 'recoil';

import { EMPTY_OBJECT } from 'constants/app.constants';
import { specialityControlAtom } from './specialityControl.atom';
import DoctorService from '../services/DoctorService';

const intitState = {
  doctor: EMPTY_OBJECT,
};

export const doctorControlAtom = createAtom('doctorControlAtom', intitState);

export const doctorQuery = selector({
    key : 'doctorQuery',
    get : async () => {
        const doctors = await DoctorService.getAll();
        return doctors;
    }
})

export const clearDoctor = selector({
    key : 'clearDoctor',
    set : ({set}) => {
        set(doctorControlAtom,EMPTY_OBJECT)
    }
})

export const setDoctor = selector({
    key : 'setDoctor',
    set : ({set},doctor) => {
        set(doctorControlAtom,doctor)
    }
})

export const doctorByNameQuery = selectorFamily({
    key : 'doctorByNameQuery',
    get : (name) => async () => {
        const doctor = await DoctorService.getByName(name);
        return doctor;
    }
});

export const doctorBySpecilityQuery = selectorFamily({
    key : 'doctorBySpecilityQuery',
    get : (speciality) => async () => {
        const doctor = await DoctorService.getBySpeciality(speciality);
        return doctor;
    }
});

export const doctorBySpecilityFilterQuery = selector({
    key : 'doctorBySpecilityFilterQuery',
    get : async ({get})  => {
        const spec = get(specialityControlAtom);
        const doc = get(doctorControlAtom);
        if (spec.speciality === EMPTY_OBJECT && doc.doctor === EMPTY_OBJECT){
            const allDoctors = await DoctorService.getAll();
            console.log("spec and doc is not present")
            return allDoctors
        }

        else if(doc.doctor ){
            console.log("doc is  present",doc)
            const doctor = await DoctorService.getByName(doc.name);
            console.table(doctor)
            return doctor;
        }
        else{
            console.log("spec is  present",spec)
            const doctors = await DoctorService.getBySpeciality(spec);
            return doctors;
            
        }

       
    }
});