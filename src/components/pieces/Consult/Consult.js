import React, { useState } from 'react'
import { Button, Typography, Avatar, Grid, Select, MenuItem,FormControl ,InputLabel} from "@material-ui/core";
import group_mobile from '../../../assets/images/Group APP.svg'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import styles from './consult.module.css'
import {useHistory} from 'react-router-dom'
import {specialityQuery,specialityControlAtom,clearSpeciality,setSpecality} from '../../../recoil-atoms/specialityControl.atom'
import {doctorQuery,doctorControlAtom,clearDoctor,setDoctor,doctorByNameQuery,doctorBySpecilityQuery,doctorBySpecilityFilterQuery} from '../../../recoil-atoms/doctorControl.atom'
import {useRecoilState,useRecoilValue} from 'recoil'

function Consult() {

    const [doc, setDoc] = useRecoilState(doctorControlAtom);
    const [spec, setSpec] = useRecoilState(specialityControlAtom);
    const history = useHistory();
    const speciality = useRecoilValue(specialityQuery)
    const doctors = useRecoilValue(doctorQuery)
    const [doctorsFiltered, setDoctorsFiltered] = useState([...doctors])

    const specialityHandler = (value) => {
        const specility_value = value.title
        setSpec(value)
        setDoctorsFiltered(doctors.filter(doctor => doctor.speciality === specility_value))
        if (specility_value !== doc.speciality) {
            setDoc(null)
        }
    }

    return (
        <Grid container className={styles.consult_container}>

            <Grid item className={styles.mobile_container}>

                <img src={group_mobile} className={styles.mobile} />
                
            </Grid>

            <Grid className={styles.content_container}>

                <div className={styles.consult_title}>

                    <Typography variant="h4" >
                        Our experts offer multidisciplinary medical opinions.
                    </Typography>

                </div>

                <div className={styles.content_input}>

                    {/* Specilaity Section section uses specility arry of objects */}
                        
                    <Autocomplete
                        id = "speciality"
                        style={{ width: 500 }}
                        options = {speciality}
                        value = {spec}
                        // clearOnEscape = {true}
                        disableClearable
                        getOptionLabel = {(option) => option.title}
                        onChange = {(event, value) => specialityHandler(value)} 
                        renderOption={option => (
                            <>
                              <span ><img src={option.icon} className = {styles.option_icon}/></span>
                                {option.title}
                            </>
                          )}
                        renderInput={(params) => <TextField {...params} label="Select Speciality" variant="outlined"  noWrap zeroMinWidth onChange = {specialityHandler} />}
                    />

                        {/* Specilaity Section section uses doctos arry of objects */}

                        <Autocomplete
                            id="doctors"
                            options={doctorsFiltered}
                            style={{ width: 500 }}
                            getOptionLabel={(option) => option.name}
                            value={doc}
                            onChange={(event, value) => setDoc(value)}
                            renderOption={option => (
                                <Grid container>
                                    <Grid item xs={3}>
                                        <Avatar alt={option.name} src={option.avatar} className={styles.option_icon}></Avatar>
                                    </Grid>
                                    <Grid item xs={9} >
                                        <div className="doctor-detail">
                                            <div>{option.name}</div>
                                            <div>Experience : {option.experience}</div>
                                            <div>{option.degree}</div>
                                            <div>{option.speciality}</div>
                                        </div>
                                    </Grid>
                                </Grid>
                            )}
                            renderInput={(params) => <TextField {...params} label="Select Doctors" zeroMinWidth noWrap variant="outlined" />}
                        />

                        <Button variant="contained" color="secondary" onClick={()=>history.push("/SchedulePage")}>
                            Consult Now
                    </Button>
                </div>
            </Grid>
        </Grid>
    )
}

export default Consult
