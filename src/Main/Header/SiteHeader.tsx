import { PaletteTwoTone } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { themes } from "../../assets/Themes/themes";

const pages = ["About", "Services", "Testimonials", "Portfolio", "Contact"];

interface HeaderProps {
  setSection: (input: string) => void;
  setTheme: (input: string) => void;
}

const SiteHeader = (props: HeaderProps) => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorTheme, setAnchorTheme] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

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
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon color="secondary" />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page}
                  onClick={() => {
                    handleCloseNavMenu();
                    props.setSection(page);
                  }}
                >
                  <Typography textAlign="center" variant="subtitle2">
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} /> */}
          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: "none",
                md: "flex",
                justifyContent: "space-between",
                maxWidth: "50rem",
              },
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => {
                  props.setSection(page);
                }}
                sx={{ my: 2, display: "block" }}
                variant="contained"
              >
                {page}
              </Button>
            ))}
          </Box>
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
