import "@fontsource/ubuntu-mono"; // Defaults to weight 400
import "@fontsource/ubuntu-mono/400-italic.css";
import "@fontsource/ubuntu-mono/400.css"; // Specify weight
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import DesktopApp from "./Desktop/DesktopApp";
import { romanceTheme } from "./assets/Themes/romance";

function App() {
  const desktop = true;

  const theme = createTheme(romanceTheme);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {desktop ? <DesktopApp /> : <>mobile app</>}
    </ThemeProvider>
  );
}

export default App;
