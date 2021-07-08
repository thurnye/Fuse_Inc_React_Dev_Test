
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Link} from "react-router-dom";
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));

export default function Links() {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();

  return (
      <nav>
        <Typography className={classes.root}>
        <Link to={{
                pathname: '/',
                }} size="small" color="primary">Home</Link>
        </Typography>

      </nav>
  );
}
