import { PaletteTwoTone } from "@mui/icons-material";
import {
  AppBar,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { themes } from "../../assets/Themes/themes";

interface HeaderProps {
  setTheme: (input: string) => void;
  navDropDownMenu: React.ReactElement;
  navAppBarMenu: React.ReactElement;
}

const SiteHeader = (props: HeaderProps) => {
  const [anchorTheme, setAnchorTheme] = useState<null | HTMLElement>(null);

  const handleOpenThemeMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorTheme(event.currentTarget);
  };

  const handleCloseThemeMenu = () => {
    setAnchorTheme(null);
  };

  return (
    <>
      <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: "center" }}>
          {props.navDropDownMenu}
          {props.navAppBarMenu}
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenThemeMenu}
            color="inherit"
            sx={{ position: "fixed", right: { xs: 10, md: 10, lg: 25 } }}
          >
            <PaletteTwoTone />
          </IconButton>
          <Menu
            id="theme-menu-appbar"
            anchorEl={anchorTheme}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorTheme)}
            onClose={handleCloseThemeMenu}
            sx={{
              display: "block",
            }}
          >
            {themes.map((theme) => (
              <MenuItem
                key={theme}
                onClick={() => {
                  handleCloseThemeMenu();
                  setTimeout(() => {
                    props.setTheme(theme);
                  }, 100);
                }}
              >
                <Typography textAlign="center" variant="subtitle2">
                  {theme}
                </Typography>
              </MenuItem>
            ))}
          </Menu>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
};

export default SiteHeader;
