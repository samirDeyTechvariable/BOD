import { AppBar, Toolbar, IconButton, Button, Typography, Slide, Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions } from "@material-ui/core";
import React from 'react'
import  './header.css';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import logo from '../../../assets/icons/logo-2-1.png'
import identity from '../../../assets/icons/outline_perm_identity_white_24dp.png'
import arrow from '../../../assets/images/keyboard_arrow_down-24px (4).svg'
import { useHistory } from "react-router-dom";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#40484F',
    }
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    boxShadow: 0,
    shadows:0,

  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  },
}));

function Header() {
  const classes = useStyles();
  let history = useHistory();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseLogin = () => {
    history.push("/schedulePage");
    // setOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <AppBar position="static"  >
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <img src={logo} />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Board of Doctors
            </Typography>
            <img src={identity} />
            <Button color="inherit" onClick={handleClickOpen}>Login </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title"
              TransitionComponent={Transition}
              keepMounted>

              <DialogTitle id="form-dialog-title">Login</DialogTitle>
              <DialogContent>
                <TextField
                  autoFocus
                  margin="dense"
                  id="email"
                  label="Email Address"
                  type="email"
                  fullWidth
                />

                <TextField
                  autoFocus
                  margin="dense"
                  id="password"
                  label="Password"
                  type="password"
                  fullWidth
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} color="primary">
                  Cancel
          </Button>
                <Button onClick={handleCloseLogin} color="primary">
                  Login
          </Button>
              </DialogActions>
            </Dialog>
            <img src={arrow} />
          </Toolbar>
        </AppBar>
      </div>
    </ThemeProvider>
  )
}

export default Header


