import React, { FunctionComponent } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Shop } from '../../models/Shops';
import { Typography } from '@material-ui/core';


interface IShopDisplayProps {
  shop:Shop
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }),
);

export const ShopDisplayComponent: FunctionComponent<IShopDisplayProps> = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs>
          <Paper>
          <Typography variant='body1'>
            Shop ID : {props.shop.shopId}
          </Typography>
          <Typography variant='body1'>
            Shop Name : {props.shop.shopName}
          </Typography>
          <Typography variant='body1'>
            Street Address : {props.shop.streetAddress}
          </Typography>
          <Typography variant='body1'>
            City : {props.shop.city}
          </Typography>
          <Typography variant='body1'>
            State : {props.shop.state}
          </Typography>
          <Typography variant='body1'>
            Phone Number : {props.shop.phoneNumber}
          </Typography>
          <Typography variant='body1'>
            Email : {props.shop.email}
          </Typography>
          <Typography variant='body1'>
            Open at : {props.shop.openAt}
          </Typography>
          <Typography variant='body1'>
            Close at : {props.shop.closeAt}
          </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}