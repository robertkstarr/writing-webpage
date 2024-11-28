import "@fontsource/ubuntu-mono"; // Defaults to weight 400
import "@fontsource/ubuntu-mono/400-italic.css";
import "@fontsource/ubuntu-mono/400.css"; // Specify weight
import { CssBaseline, Theme, ThemeProvider } from "@mui/material";
import { ReactElement, useEffect } from "react";
import MarcAaronsProps from "./Main/MarcAarons/MarcAaronsProps";
import RobertStarrProps from "./RobertStarr/RobertStarrProps";

interface SiteProps {
  theme: Theme;
  title: string;
  content: ReactElement;
}

const RoutedApp = (props: SiteProps) => {
  return (
    <ThemeProvider theme={props.theme}>
      <CssBaseline />
      {props.content}
    </ThemeProvider>
  );
};

const getProps = () => {
  const url = window.location.href;

  if (url.includes("robertkstarr.com")) {
    return RobertStarrProps;
  } else {
    return MarcAaronsProps;
  }
};

function App() {
  const props = getProps();
  useEffect(() => {
    document.title = props.title;
  }, []);
  return <RoutedApp {...props} />;
}

export default App;
