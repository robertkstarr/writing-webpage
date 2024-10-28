import { Box, Button } from "@mui/material";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { NavigationOptions } from "./NavigationOptions";

const NavAppBarMenu = () => {
  return (
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
      {NavigationOptions.map((page) => (
        <Button
          component={AnchorLink}
          href={"#" + page}
          sx={{ my: 2, display: "block" }}
          variant="contained"
          offset={48}
        >
          {page}
        </Button>
      ))}
    </Box>
  );
};

export default NavAppBarMenu;
