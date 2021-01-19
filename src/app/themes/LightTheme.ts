// @ts-ignore
import { createMuiTheme, Theme } from "@material-ui/core/styles";
import { orange, red } from "@material-ui/core/colors";
import "./index";

const LightTheme = createMuiTheme({
  palette: {
    overlays: {
      default: "#000",
    },
    primary: {
      main: "#000",
    },
    secondary: {
      // main: '#ffab40',
      main: orange[800],
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#f7f8f9",
    },
  },
  shape: {
    borderRadius: 32,
  },
  props: {
    MuiButton: {
      disableElevation: true,
    },
  },
  overrides: {
    MuiBackdrop: {
      root: {
        // background: "rgba(255,255,255,0.8) !important",
      },
    },

    MuiIconButton: {
      root: {
        padding: 8,
      },
    },
    MuiButton: {
      root: {
        textTransform: "none",
      },
      contained: {
        backgroundColor: "#d5d5d5",
      },
    },
  },
});

export default LightTheme;
