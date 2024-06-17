import "@fontsource/ubuntu-mono"; // Defaults to weight 400
import "@fontsource/ubuntu-mono/400-italic.css";
import "@fontsource/ubuntu-mono/400.css"; // Specify weight
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { useState } from "react";
import DesktopApp from "./Desktop/DesktopApp";
import { hackerTheme } from "./assets/Themes/hacker";
import RomanceTheme from "./assets/Themes/romance";

function App() {
  const [theme, setTheme] = useState("romance");

  const desktop = true;

  const currentTheme = () => {
    switch (theme) {
      case "hacker":
        return createTheme(hackerTheme);
      default:
        return RomanceTheme;
    }
  };

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      {desktop ? <DesktopApp setTheme={setTheme} /> : <>mobile app</>}
    </ThemeProvider>
  );
}

export default App;
