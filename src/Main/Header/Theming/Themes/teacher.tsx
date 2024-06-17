import "@fontsource/cabin-sketch";
import { ThemeOptions, createTheme } from "@mui/material/styles";

const themeOptions: ThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "#375a3b",
    },
    secondary: {
      main: "#fff",
    },
    background: {
      default: "#fff",
      paper: "#fff",
    },
  },
  typography: {
    fontFamily: "Cabin Sketch",
    body1: {
      fontFamily: "serif",
      fontSize: 18,
    },
    h4: {
      fontSize: 48,
    },
    subtitle1: {
      fontSize: 16,
    },
    subtitle2: {
      fontSize: 18,
    },
    button: {
      fontSize: 24,
      textTransform: "none",
    },
  },
};

const TeacherTheme = createTheme(themeOptions);
export default TeacherTheme;
