import "@fontsource/ubuntu-mono"; // Defaults to weight 400
import "@fontsource/ubuntu-mono/400-italic.css";
import "@fontsource/ubuntu-mono/400.css"; // Specify weight
import { CssBaseline, ThemeProvider } from "@mui/material";
import { useEffect, useState } from "react";
import { Content } from "./Main/Content";
import NavDropDownMenu from "./Main/Header/NavDropDownMenu";
import SiteHeader from "./Main/Header/SiteHeader";
import SiteFooter from "./Main/SiteFooter";
import DefaultTheme from "./assets/Themes/default";
import { chooseTheme } from "./assets/Themes/themes";

function App() {
  const [theme, setTheme] = useState("romance");
  const [section, setSection] = useState("About");
  const [currentTheme, setCurrentTheme] = useState(DefaultTheme);

  useEffect(() => {
    setCurrentTheme(chooseTheme(theme));
  }, [theme]);

  useEffect(() => {
    setSection(section);
  }, [section]);

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <SiteHeader
        navMenu={<NavDropDownMenu setSection={setSection} />}
        setTheme={setTheme}
      />
      {Content(section)}
      <SiteFooter />
    </ThemeProvider>
  );
}

export default App;
