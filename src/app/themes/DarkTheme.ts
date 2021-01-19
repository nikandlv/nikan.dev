import { createMuiTheme } from "@material-ui/core/styles";
import { orange, red } from "@material-ui/core/colors";
import "./index";

const DarkTheme = createMuiTheme({
  palette: {
    type: "dark",
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
      default: "#111",
      paper: "#000",
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
        backgroundColor: "#222",
        color: "#fff",
      },
    },
  },
});

export default DarkTheme;
