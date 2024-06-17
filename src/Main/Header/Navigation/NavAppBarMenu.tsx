import { Box, Button } from "@mui/material";
import { NavigationOptions } from "./NavigationOptions";

interface NavAppBarMenuProps {
  setSection: (section: string) => void;
}
const NavAppBarMenu = (props: NavAppBarMenuProps) => {
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
  );
};

export default NavAppBarMenu;
