import MenuIcon from "@mui/icons-material/Menu";
import { Box, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./NavDropDownMenu.css";

const NavDropDownMenu = (props: { navigationOptions: string[] }) => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenNavMenu}
        color="inherit"
      >
        <MenuIcon color="secondary" fontSize="large" />
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
        {props.navigationOptions.map((page) => (
          <MenuItem
            key={page}
            onClick={() => {
              handleCloseNavMenu();
            }}
          >
            <Typography textAlign="center" variant="subtitle2">
              <AnchorLink offset={64} href={"#" + page}>
                {page}
              </AnchorLink>
            </Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default NavDropDownMenu;
