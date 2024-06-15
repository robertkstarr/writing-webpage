import { ThemeOptions, ThemeProvider, createTheme } from "@mui/material";
import "./App.css";
import DesktopApp from "./Desktop/DesktopApp";

function App() {
  const desktop = true;

  const themeOptions: ThemeOptions = {
    palette: {
      mode: "dark",
      primary: {
        main: "#90caf9",
      },
      secondary: {
        main: "#ce93d8",
      },
      background: {
        default: "#121212",
        paper: "#121212",
      },
    },
    spacing: 10,
  };

  const theme = createTheme(themeOptions);

  return (
    <ThemeProvider theme={theme}>
      {desktop ? <DesktopApp /> : <>mobile app</>}
    </ThemeProvider>
  );
}

export default App;
