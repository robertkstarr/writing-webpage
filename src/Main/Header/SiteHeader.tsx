import {
  AppBar,
  ThemeProvider,
  Toolbar,
  createTheme,
  useTheme,
} from "@mui/material";

interface HeaderProps {
  navDropDownMenu: React.ReactElement;
  navAppBarMenu: React.ReactElement;
  themeMenu: React.ReactElement;
}

const SiteHeader = (props: HeaderProps) => {
  const theme = useTheme();
  const modifiedTheme = createTheme({ ...theme });
  return (
    <ThemeProvider theme={modifiedTheme}>
      <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: "center" }}>
          {props.navDropDownMenu}
          {props.navAppBarMenu}
          {props.themeMenu}
        </Toolbar>
      </AppBar>
      <Toolbar />
    </ThemeProvider>
  );
};

export default SiteHeader;
