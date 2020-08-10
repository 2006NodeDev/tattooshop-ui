import React from 'react';// you have to import React from react
import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import { Container, CssBaseline, Grid } from '@material-ui/core';

const images = [
  {
    title: 'Shops',
    width: '100%',
  }
];
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      minWidth: 300,
      width: '100%',
    },
    header:{

      alignItems:'center'
    },
    image: {
      position: 'relative',
      height: 200,
      [theme.breakpoints.down('xs')]: {
        width: '100% !important', // Overrides inline-style
        height: 100,
      },
      '&:hover, &$focusVisible': {
        zIndex: 1,
        '& $imageBackdrop': {
          opacity: 0.15,
        },
        '& $imageMarked': {
          opacity: 0,
        },
        '& $imageTitle': {
          border: '4px solid currentColor',
        },
      },
    },
    focusVisible: {},
    imageButton: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: theme.palette.common.white,
    },
    imageSrc: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundSize: 'cover',
      backgroundPosition: 'center 40%',
    },
    imageBackdrop: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundColor: theme.palette.common.black,
      opacity: 0.4,
      transition: theme.transitions.create('opacity'),
    },
    imageTitle: {
      position: 'relative',
      padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
    },
    imageMarked: {
      height: 3,
      width: 18,
      backgroundColor: theme.palette.common.white,
      position: 'absolute',
      bottom: -2,
      left: 'calc(50% - 9px)',
      transition: theme.transitions.create('opacity'),
    },
  }),
);
export function HomepageComponent(props:any){
    //you have to return jsx
    const classes = useStyles();
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline/>
        <div className={classes.root}>
        <form>

        <Grid container>
        <Grid item>
        <h1 className = {classes.header}> Book Your Appointment Today </h1>
        </Grid>
        </Grid>

        <h1 className = {classes.header}> --------------------------------- </h1>
        <Grid container>

        <Grid item>
        <h1>  Sign In Or Sign Up To Search For Tattoo Shops Near You </h1>
        </Grid>
        </Grid>
      
        </form>
        {images.map((image) => (
        <ButtonBase
          component={Link} to="/shops"
          focusRipple
          key={image.title}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: image.width,
          }}>          
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}>
              {image.title}
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
))}
        </div>
        <br></br>
        <br></br>
        </Container>
    );//without the paraenthese the interperator tries to put a semicolon after every line of jsx
}