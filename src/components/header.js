
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Link} from "react-router-dom";
import Typography from '@material-ui/core/Typography';
import SubNav from './subNav'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <header>
      <SubNav/>
      <nav>
        <Typography className={classes.root}>
        <Link to={{
                pathname: '/',
                }} size="small" color="primary">Home</Link>
        </Typography>

      </nav>
    </header>
      
  );
}
