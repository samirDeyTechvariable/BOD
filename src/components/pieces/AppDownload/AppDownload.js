import React from 'react'
import { Typography, Grid, IconButton } from "@material-ui/core";
import appImage from "../../../assets/images/DownloadGroup1.png";
import apple from "../../../assets/images/apple-store-logo-png-7@2x.png";
import google from "../../../assets/images/en_badge_web_generic@2x.png";
import { makeStyles } from '@material-ui/core/styles';
import styles from './AppDownload.module.css'

function AppDownload() {
    const useStyles = makeStyles(theme => ({
        container: {
            backgroundColor: 'black'
        }
    }))

    const classes = useStyles()

    return (

        <Grid container className={styles.appDownload_container}>
            <Grid item xs={6} className={styles.appDownload_content} >

                <div className={styles.appDownload_title}>
                    
                    <Typography variant="h4">
                        Download our app now
                    </Typography>

                </div>

                <div className={styles.appDownload_text}>

                    <Typography>
                        Browse doctor, manage booking and get prescreption and video consultation online through the Board of doctor mobile app
                    </Typography>

                </div>

                <div className={styles.appDownload_image_container}>

                    <a href="https://samkun5570.github.io/reactRecipie/">
                        <img src={apple} className={styles.appDownload_apple} />
                    </a>
                    <a href="https://samkun5570.github.io/reactRecipie/">
                        <img src={google} className={styles.appDownload_google} />
                    </a>

                </div>

            </Grid>

            <Grid item xs={6} >
                <img src={appImage} className={styles.appDownload_appImage} />
            </Grid>

        </Grid>

    )
}

export default AppDownload
