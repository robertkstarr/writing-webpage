import { AppBar, Toolbar } from "@mui/material";

interface HeaderProps {
  navDropDownMenu: React.ReactElement;
  navAppBarMenu: React.ReactElement;
  themeMenu: React.ReactElement;
}

const SiteHeader = (props: HeaderProps) => {
  return (
    <>
      <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: "center" }}>
          {props.navDropDownMenu}
          {props.navAppBarMenu}
          {props.themeMenu}
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
};

export default SiteHeader;
