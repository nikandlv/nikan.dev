import * as React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import Logo from './Logo';
import TestIcon from '@material-ui/icons/DetailsRounded';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  text: {
    marginLeft: 8,
    fontWeight: 'bold',
  },
  tinted: {
    opacity: 0.3,
  },
  rotate: {
    transform: 'rotate(23deg)',
    fontSize: 32,
  },
}));

export default function LogoType() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <TestIcon className={classes.rotate} />
      <Typography className={classes.text}>
        Nikan<span className={classes.tinted}>.dev</span>
      </Typography>
    </div>
  );
}
