import "@fontsource/ubuntu-mono"; // Defaults to weight 400
import "@fontsource/ubuntu-mono/400-italic.css";
import "@fontsource/ubuntu-mono/400.css"; // Specify weight
import { CssBaseline, ThemeProvider } from "@mui/material";
import { useEffect, useState } from "react";
import DesktopApp from "./Desktop/DesktopApp";
import HackerTheme from "./assets/Themes/hacker";
import RomanceTheme from "./assets/Themes/romance";

function App() {
  const [theme, setTheme] = useState("romance");
  const [currentTheme, setCurrentTheme] = useState(RomanceTheme);

  const desktop = true;

  useEffect(() => {
    switch (theme) {
      case "Software Developer":
        setCurrentTheme(HackerTheme);
        break;
      case "Romance Author":
        setCurrentTheme(RomanceTheme);
        break;
      default:
        setCurrentTheme(RomanceTheme);
        break;
    }
  }, [theme]);

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      {desktop ? <DesktopApp setTheme={setTheme} /> : <>mobile app</>}
    </ThemeProvider>
  );
}

export default App;
