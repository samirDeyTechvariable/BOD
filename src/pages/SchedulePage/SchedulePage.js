import React from 'react';
import PropTypes from 'prop-types';
import styles from './SchedulePage.module.css'
import Header from 'components/pieces/Header';
import { Grid } from "@material-ui/core";
import DoctorCardContainer from "components/pieces/DoctorCardContainer";
import FilterContainer from "components/pieces/FilterContainer"

const SchedulePage = props => {
  const { history } = props;
    return (
        <Grid container>
        <Grid item  xs={12}>
          <Header/>
        </Grid>
        <Grid item xs={12} className={styles.filterContainer}>
          <FilterContainer/>
        </Grid>
        <Grid item xs={12}>
          <DoctorCardContainer/>
        </Grid>
        <Grid item xs={12}>
     
        </Grid>
        <Grid item xs={12}>
      
        </Grid>
      </Grid >
    )
}

SchedulePage.propTypes = {
    history: PropTypes.object.isRequired,
  };

export default SchedulePage;
