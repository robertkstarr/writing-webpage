import { AppBar, Box, Toolbar, Typography } from "@mui/material";

const SiteFooter = (props: { author: string }) => {
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
              padding: { xs: 1, md: 0 },
            }}
          >
            <Box sx={{ display: "flex", textAlign: "center" }}>
              © Copyright {year} by {props.author}
            </Box>
            <Box sx={{ display: "flex", textAlign: "center" }}>
              All Rights Reserved
            </Box>
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default SiteFooter;
