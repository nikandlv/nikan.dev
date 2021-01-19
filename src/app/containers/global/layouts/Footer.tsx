import * as React from "react";
import { Divider, makeStyles } from "@material-ui/core";

export interface IFooterProps {}

const useStyles = makeStyles({
  root: {
    padding: "10% 5%",
  },
});

export default function Footer(_: IFooterProps) {
  const classes = useStyles();
  return (
    <footer className={classes.root}>
      <Divider />
      <br />
      <br />
      Footer here
    </footer>
  );
}
