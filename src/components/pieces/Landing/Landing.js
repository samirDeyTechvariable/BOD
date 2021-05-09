import React from 'react'
import styles from './landing.module.css';
import { Typography, Grid } from "@material-ui/core";
import background from '../../../assets/images/Pixelbook@2x.png'

function Landing() {
    return (
        <Grid container
        >
            <Grid item xs="12" className={styles.landing_container}>
                <Grid container>
                    <Grid item className={styles.background_text} xs={6}>
                        <Typography variant = "h4" className = {styles.landing_title}>Ethical . Efficient . Expert</Typography>
                        <Typography className = {styles.landing_text}>The Board of Doctors platform enables online medical consultations with reputed specialist doctors .
                        Board of doctors allows efficient access to experienced doctors for primary consultations and second opinions.
                        The platform enables live face to face interactions with medical experts globally.</Typography>
                        <Typography className = {styles.landing_link}>Meet the doctors</Typography>
                    </Grid>
                    <Grid item xs={6} > 
                        <img src ={background} className={styles.background_img}/> 
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Landing
