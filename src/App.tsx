import "@fontsource/ubuntu-mono"; // Defaults to weight 400
import "@fontsource/ubuntu-mono/400-italic.css";
import "@fontsource/ubuntu-mono/400.css"; // Specify weight
import { CssBaseline, ThemeProvider } from "@mui/material";
import { useEffect, useState } from "react";
import { Content } from "./Main/Content";
import NavAppBarMenu from "./Main/Header/Navigation/NavAppBarMenu";
import NavDropDownMenu from "./Main/Header/Navigation/NavDropDownMenu";
import SiteHeader from "./Main/Header/SiteHeader";
import ThemeMenu from "./Main/Header/Theming/ThemeMenu";
import DefaultTheme from "./Main/Header/Theming/Themes/default";
import { chooseTheme } from "./Main/Header/Theming/Themes/themes";
import SiteFooter from "./Main/SiteFooter";

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
        navDropDownMenu={<NavDropDownMenu setSection={setSection} />}
        navAppBarMenu={<NavAppBarMenu setSection={setSection} />}
        themeMenu={<ThemeMenu setTheme={setTheme} />}
      />
      {Content(section)}
      <SiteFooter />
    </ThemeProvider>
  );
}

export default App;
