import React, { useEffect, useState } from 'react'
import DoctorCard from '../../items/DoctorCard';
import { Grid } from "@material-ui/core";
import styles from './doctorCardContainer.module.css';
import { specialityQuery, specialityControlAtom, clearSpeciality, setSpecality } from '../../../recoil-atoms/specialityControl.atom'
import { doctorQuery, doctorControlAtom, clearDoctor, setDoctor, doctorByNameQuery, doctorBySpecilityQuery, doctorBySpecilityFilterQuery } from '../../../recoil-atoms/doctorControl.atom'
import { useRecoilState, useRecoilValue } from 'recoil'


export default function DoctorCardContainer() {
    const doctors = useRecoilValue(doctorQuery)
    const specialities = useRecoilValue(specialityQuery)
    const doctorsFiltered = useRecoilValue(doctorBySpecilityFilterQuery)
    const [doc, setDoc] = useRecoilState(doctorControlAtom)
    const [spec, setSpec] = useRecoilState(specialityControlAtom)

    if (doctorsFiltered.length === 0) {

        return <h3>No doctors for specified speciality</h3>;

    } else {

        return doctorsFiltered.map((doctor, index) => (

                <Grid
                    container
                    className="gridContainer"
                    display={Grid}
                    spacing={2}
                >

                    <Grid item xs={2}>

                        <DoctorCard key={index} doctor={doctor} />

                    </Grid>

                </Grid>

            )

        );

    }

};

