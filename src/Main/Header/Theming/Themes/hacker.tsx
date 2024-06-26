import "@fontsource/vt323";
import { ThemeOptions, createTheme } from "@mui/material";

const themeSettings: ThemeOptions = {
  palette: {
    mode: "dark",
    primary: {
      main: "#0f0",
    },
    secondary: { main: "#0f0" },
    background: {
      default: "#111111",
      paper: "#212121",
    },
  },
  typography: {
    fontFamily: "Ubuntu Mono",
    body1: {
      fontSize: 18,
    },
    h1: {
      fontFamily: "VT323",
    },
    h2: {
      fontFamily: "VT323",
    },
    h3: {
      fontFamily: "VT323",
    },
    h4: {
      fontFamily: "VT323",
    },
    h6: {
      fontFamily: "VT323",
    },
    h5: {
      fontFamily: "VT323",
      color: "#0f0",
    },
    subtitle1: {
      fontFamily: "VT323",
      color: "#0f0",
      fontSize: "1rem",
    },
    subtitle2: {
      fontFamily: "VT323",
      color: "#0f0",
      fontSize: 18,
    },
    button: {
      fontFamily: "VT323",
      // fontWeight: 900,
      color: "#0f0",
      fontSize: 20,
      textTransform: "none",
    },
    overline: {
      fontFamily: "VT323",
    },
  },
};

const HackerTheme = createTheme(themeSettings);

export default HackerTheme;
