import React, { useState } from 'react'
import { Grid, FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { useRecoilValueLoadable,useRecoilState } from 'recoil';
import { doctorQuery ,setDoctor ,clearDoctor ,doctorByNameQuery ,doctorBySpecilityQuery} from '../../../recoil-atoms/doctorControl.atom'
import { specialityQuery ,clearSpeciality ,doctorByTitleQuery ,setSpecality} from '../../../recoil-atoms/specialityControl.atom'

const useStyles = makeStyles((theme) => ({
  formControl: {
    // margin: theme.spacing(1),
    minWidth: 150,
    margin: 'dense'
  },
  selectEmpty: {
    // marginTop: theme.spacing(1),
  },
  mainContainer:{
    margin: 'dense',
    paddingBottom:'120'
  }
  
}));


function FilterContainer() {
  const classes = useStyles();
  const [speciality, setSpeciality] = useState('')
  const [availibilty, setAvailibilty] = useState('')
  const [location, setLocation] = useState('')

  const handleSpeciality = (event) => {
    setSpeciality(event.target.value);
  };

  const handleAvailibilty = (event) => {
    setAvailibilty(event.target.value);
  };
  
  const handleLocation = (event) => {
    setLocation(event.target.value);
  };

  return (
    <Grid container className={classes.mainContainer}>
      <Grid item xs={3}>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Speciality</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={speciality}
            onChange={handleSpeciality}
          >
            <MenuItem value={"Naphrology"}>Naphrology</MenuItem>
            <MenuItem value={"Cardiology"}>Cardiology</MenuItem>
            <MenuItem value={"Gastro Entomologist"}>Gastro Entomologist</MenuItem>
            <MenuItem value={"Rheumatology"}>Rheumatology</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={3}>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Availibility</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={availibilty}
            onChange={handleAvailibilty}
          >
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={6}>6</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={3}>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Location</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={location}
            onChange={handleLocation}
          >
            <MenuItem value={"Bangalore"}>Bangalore</MenuItem>
            <MenuItem value={"Mumbai"}>Mumbai</MenuItem>
            <MenuItem value={"Guwahati"}>Guwahati</MenuItem>
            <MenuItem value={"Pune"}>Pune</MenuItem>
            <MenuItem value={"Surat"}>Surat</MenuItem>
            <MenuItem value={"Delhi"}>Delhi</MenuItem>
          </Select>
        </FormControl>
      </Grid>

    </Grid>
  )
}

export default FilterContainer
