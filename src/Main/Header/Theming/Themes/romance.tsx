import "@fontsource/homemade-apple";
import { ThemeOptions, createTheme } from "@mui/material/styles";

const themeSettings: ThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "#de4646",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#EAD9D9",
      contrastText: "#ffffff",
    },
    background: {
      default: "#EAD9D9",
      paper: "#e59797ff",
    },
  },
  typography: {
    fontFamily: "Open Sans",
    body1: {
      fontSize: 18,
    },
    body2: {
      fontSize: "1rem",
      color: "#000000ff",
    },
    h1: {
      fontFamily: "Homemade Apple",
    },
    h2: {
      fontFamily: "Homemade Apple",
    },
    h3: {
      fontFamily: "Homemade Apple",
    },
    h4: {
      fontFamily: "Homemade Apple",
    },
    h6: {
      fontFamily: "Homemade Apple",
    },
    h5: {
      fontFamily: "Homemade Apple",
    },
    subtitle1: {
      fontSize: "1rem",
      fontFamily: "Homemade Apple",
      color: "#de4646",
    },
    subtitle2: {
      fontFamily: "Homemade Apple",
      color: "#de4646",
      fontSize: 18,
    },
    button: {
      fontFamily: "Homemade Apple",
      fontSize: 18,
      fontWeight: 900,
      textTransform: "none",
    },
    overline: {
      fontFamily: "Homemade Apple",
    },
  },
};

const RomanceTheme = createTheme(themeSettings);

export default RomanceTheme;
