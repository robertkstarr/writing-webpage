import { AppBar, Box, Toolbar, Typography } from "@mui/material";

const DesktopFooter = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <Toolbar />
      <AppBar
        position="fixed"
        sx={{
          top: "auto",
          bottom: 0,

          display: "flex",
          alignItems: "center",
        }}
      >
        <Toolbar>
          <Typography
            variant="subtitle1"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box>© Copyright {year} by Robert K. Starr</Box>
            <Box>All Rights Reserved</Box>
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default DesktopFooter;
