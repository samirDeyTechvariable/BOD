import React from 'react'
import { Typography, ListItem, ListItemText, List, ListItemIcon} from "@material-ui/core";
import logo from '../../../assets/icons/logo-2-1.png'
import call from '../../../assets/images/call (1).svg'
import envelope from '../../../assets/images/envelope.svg'
import styles from './Footer.module.css';


function Footer() {
    return (
        <div className={styles.footer_container}>

            <div className={styles.footer_logo_container}>

                <img src={logo} className={styles.footer_logo} />

                <Typography className={styles.footer_title}>
                    Board of Doctors
                </Typography>

            </div>

            <List component="nav" aria-label="mailbox folders" className={styles.footer_link_container}>
            
   
                <ListItem button className={styles.listitem}>
                    <ListItemText primary="Terms & condition" />
                </ListItem>
         
                <ListItem button className={styles.listitem}>
                    <ListItemText primary="Privacy policy" />
                </ListItem>
          
                <ListItem button component="a" href="tel:+91 9984 988 899" className={styles.listitem}>
                    <ListItemIcon className={styles.itemIcon}>
                        <img src={call} className={styles.footer_call}/>
                    </ListItemIcon>
                    <ListItemText primary="+91 9984 988 899" />
                </ListItem>
              
                <ListItem button  component="a" href="mailto:Spabod@bod.comm" className={styles.listitem}>
                    <ListItemIcon className={styles.itemIcon}>
                        <img src={envelope} className={styles.footer_envelope}/>
                    </ListItemIcon>
                    <ListItemText primary="Spabod@bod.comm" />
                </ListItem>

            </List>

        </div>
    )
}

export default Footer
