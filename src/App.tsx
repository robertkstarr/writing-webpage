import "@fontsource/ubuntu-mono"; // Defaults to weight 400
import "@fontsource/ubuntu-mono/400-italic.css";
import "@fontsource/ubuntu-mono/400.css"; // Specify weight
import { CssBaseline, Theme, ThemeProvider } from "@mui/material";
import { ReactElement, useEffect } from "react";

interface SiteProps {
  theme: Theme;
  title: string;
  content: ReactElement;
}

function App(props: SiteProps) {
  useEffect(() => {
    document.title = props.title;
  }, []);
  return (
    <ThemeProvider theme={props.theme}>
      <CssBaseline />
      {props.content}
    </ThemeProvider>
  );
}

export default App;
