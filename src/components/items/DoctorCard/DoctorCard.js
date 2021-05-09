import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Avatar from '@material-ui/core/Avatar';
import Typography from "@material-ui/core/Typography";
import styles from "./doctorCard.module.css";
import doc4 from '../../../assets/images/2453867e820b312541fee6a4b40798c6.png'
import doc3 from '../../../assets/images/363dd723f6d87e2b17072d1eb23bf87f.png';
import doc2 from '../../../assets/images/08b6c8662c7afef67b33ac23bb37f1e2.png';
import doc1 from '../../../assets/images/6bf4a20dde8b7d8e6c92c2565c5f8a6b.png';



function DoctorCard({doctor}) {
console.log(doctor.avatar)
    return (
      <div>
        <Card className={styles.card} style={{justifyContent:'center',alignItems:'center'}}>
          
          <CardActionArea>
            <CardMedia style={{height: '80%',width : '80%',borderRadius: '50%',textAlign:'center',justifyContent:'center',alignItems:'center',paddingTop:'100%'}}
              
              image={doctor.avatar}
            />
             {/* <Avatar>    <img src={doctor.avatar}/></Avatar> */}
        
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {doctor.name}
              </Typography>
              <Typography variant="body2"  component="p">
                {doctor.experience}
              </Typography>
              <Typography variant="body2"  component="p">
                {doctor.speciality}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Schedule Now
            </Button>
          
          </CardActions>
        </Card>
      </div>
    );
};

export default DoctorCard



