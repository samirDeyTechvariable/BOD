/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';
import Col from 'components/bits/Col';
import Button from 'components/bits/Button';
import Header from 'components/pieces/Header';
import Landing from 'components/pieces/Landing';
import Consult from 'components/pieces/Consult';
import AppDownload from 'components/pieces/AppDownload';
import Footer from 'components/pieces/Footer';
import { Grid } from "@material-ui/core";


const Homepage = props => {
  const { history } = props;

  return (
  
    <Grid container>
      <Grid item  xs={12} history ={history}>
        <Header/>
      </Grid>
      <Grid item xs={12}>
        <Landing/>
      </Grid>
      <Grid item xs={12}>
        <Consult/>
      </Grid>
      <Grid item xs={12}>
        <AppDownload/>
      </Grid>
      <Grid item xs={12} style={{background: "#29323A"}}>
        <Footer/>
      </Grid>
    </Grid >
  );
};

Homepage.propTypes = {
  history: PropTypes.object.isRequired,
};

export default Homepage;
