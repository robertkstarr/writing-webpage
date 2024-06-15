import "@fontsource/ubuntu-mono"; // Defaults to weight 400
import "@fontsource/ubuntu-mono/400-italic.css";
import "@fontsource/ubuntu-mono/400.css"; // Specify weight
import {
  CssBaseline,
  ThemeOptions,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import "./App.css";
import DesktopApp from "./Desktop/DesktopApp";

function App() {
  const desktop = true;

  const themeOptions: ThemeOptions = {
    palette: {
      mode: "dark",
      primary: {
        main: "#0f0",
      },
      background: {
        default: "#111111",
        paper: "#212121",
      },
    },
    typography: {
      fontFamily: "Ubuntu Mono",
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
      },
      subtitle1: {
        fontFamily: "Ubuntu Mono",
      },
      subtitle2: {
        fontFamily: "Ubuntu Mono",
      },
      button: {
        fontFamily: "Ubuntu Mono",
        fontWeight: 900,
      },
      overline: {
        fontFamily: "Ubuntu Mono",
      },
    },
  };

  const theme = createTheme(themeOptions);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {desktop ? <DesktopApp /> : <>mobile app</>}
    </ThemeProvider>
  );
}

export default App;
