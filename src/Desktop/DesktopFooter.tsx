import { AppBar, Box, Typography } from "@mui/material";

const DesktopFooter = () => {
  const year = new Date().getFullYear();
  return (
    <AppBar position="fixed" sx={{ top: "auto", bottom: 0, padding: "1rem" }}>
      <Typography variant="subtitle1">
        <Box>© Copyright {year} by Robert K. Starr</Box>
        <Box>All Rights Reserved</Box>
      </Typography>
    </AppBar>
  );
};

export default DesktopFooter;
