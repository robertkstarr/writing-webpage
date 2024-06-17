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
    fontFamily: "Open Sans",
    fontSize: 18,
    h1: {
      fontFamily: "Ubuntu Mono",
    },
    h2: {
      fontFamily: "Ubuntu Mono",
    },
    h3: {
      fontFamily: "Ubuntu Mono",
    },
    h4: {
      fontFamily: "Ubuntu Mono",
    },
    h6: {
      fontFamily: "Ubuntu Mono",
    },
    h5: {
      fontFamily: "Ubuntu Mono",
      color: "#0f0",
    },
    subtitle1: {
      fontFamily: "Ubuntu Mono",
      color: "#0f0",
      fontSize: "1rem",
    },
    subtitle2: {
      fontFamily: "Ubuntu Mono",
    },
    button: {
      fontFamily: "Ubuntu Mono",
      fontWeight: 900,
      color: "#0f0",
    },
    overline: {
      fontFamily: "Ubuntu Mono",
    },
  },
};

const HackerTheme = createTheme(themeSettings);

export default HackerTheme;
