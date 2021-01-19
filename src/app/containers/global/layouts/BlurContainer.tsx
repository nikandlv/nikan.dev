import { Container, makeStyles } from "@material-ui/core";
import { pink } from "@material-ui/core/colors";
import * as React from "react";

const useOverlayStyles = makeStyles({
  overlay: {
    position: "fixed",
    backdropFilter: "blur(5px)",
    boxShadow:
      "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
    borderRadius: 0,
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    border: `2px solid ${pink[500]}`,
    backgroundColor: "rgba(0,0,0,0.1)",
  },
  ["@media(max-width: 500px)"]: {
    overlay: {
      top: "0%",
      left: "0%",
      transform: "translate(0%, 0%)",
      height: "100%",
    },
  },
});
export default function BlurContainer({
  children,
}: {
  children?: React.ReactNode;
}) {
  const classes = useOverlayStyles();
  return (
    <Container maxWidth="sm" className={classes.overlay}>
      <main>{children}</main>
    </Container>
  );
}
