import "@fontsource/courier-prime";

import { ThemeOptions, createTheme } from "@mui/material/styles";

const themeOptions: ThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "#6D6D71",
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
    fontFamily: "Courier Prime",
    body1: {
      fontSize: 18,
    },
    button: { fontSize: 18 },
    subtitle1: {
      fontSize: 12,
    },
  },
};

const ScreenwriterTheme = createTheme(themeOptions);
export default ScreenwriterTheme;
