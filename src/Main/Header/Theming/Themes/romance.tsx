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
      paper: "#fff",
    },
  },
  typography: {
    fontFamily: "Open Sans",
    body1: {
      fontSize: 18,
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
      color: "#EAD9D9",
    },
    subtitle2: {
      fontFamily: "Homemade Apple",
      color: "#de4646",
      fontSize: "1rem",
    },
    button: {
      fontFamily: "Homemade Apple",
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
