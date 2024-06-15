import { AppBar, Box } from "@mui/material";

const DesktopFooter = () => {
  const year = new Date().getFullYear();
  return (
    <AppBar
      position="fixed"
      color="primary"
      sx={{ top: "auto", bottom: 0, padding: "1rem" }}
    >
      <Box>© Copyright {year} by Robert K. Starr</Box>
    </AppBar>
  );
};

export default DesktopFooter;
