import * as React from 'react';
import { makeStyles } from '@material-ui/core';

export const useGapStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function Gap() {
  const classes = useGapStyles();
  return <div className={classes.root} />;
}
