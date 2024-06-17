import "@fontsource/ubuntu-mono"; // Defaults to weight 400
import "@fontsource/ubuntu-mono/400-italic.css";
import "@fontsource/ubuntu-mono/400.css"; // Specify weight
import { CssBaseline, ThemeProvider } from "@mui/material";
import { useEffect, useState } from "react";
import DesktopApp from "./Desktop/DesktopApp";
import DefaultTheme from "./assets/Themes/default";
import HackerTheme from "./assets/Themes/hacker";
import RomanceTheme from "./assets/Themes/romance";
import ScreenwriterTheme from "./assets/Themes/screenwriter";
import { themes } from "./assets/Themes/themes";

function App() {
  const [theme, setTheme] = useState("romance");
  const [currentTheme, setCurrentTheme] = useState(DefaultTheme);

  const desktop = true;

  useEffect(() => {
    switch (theme) {
      case themes[0]:
        setCurrentTheme(DefaultTheme);
        break;
      case themes[1]:
        setCurrentTheme(HackerTheme);
        break;
      case themes[2]:
        setCurrentTheme(RomanceTheme);
        break;
      case themes[3]:
        setCurrentTheme(ScreenwriterTheme);
        break;
      default:
        setCurrentTheme(DefaultTheme);
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
