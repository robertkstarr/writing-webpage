import { ThemeOptions, createTheme } from "@mui/material/styles";

const themeOptions: ThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#ffffff",
    },
    background: {
      default: "#fff",
      paper: "#fff",
    },
  },
  typography: {
    body1: {
      fontSize: 18,
    },
    subtitle1: {
      fontSize: 12,
    },
    subtitle2: {
      fontSize: 18,
    },
    button: {
      fontSize: 18,
    },
  },
};

const DefaultTheme = createTheme(themeOptions);
export default DefaultTheme;
