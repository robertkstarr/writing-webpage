import "@fontsource/ubuntu-mono"; // Defaults to weight 400
import "@fontsource/ubuntu-mono/400-italic.css";
import "@fontsource/ubuntu-mono/400.css"; // Specify weight
import { CssBaseline, Theme, ThemeProvider } from "@mui/material";
import { ReactElement } from "react";

interface SiteProps {
  theme: Theme;

  content: ReactElement;
}

function App(props: SiteProps) {
  return (
    <ThemeProvider theme={props.theme}>
      <CssBaseline />
      {props.content}
    </ThemeProvider>
  );
}

export default App;
