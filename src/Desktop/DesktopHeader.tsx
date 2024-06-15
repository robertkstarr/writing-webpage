import { AppBar, Box, Button, Toolbar } from "@mui/material";

const pages = ["Products", "Pricing", "Blog"];

const DesktopHeader = () => {
  return (
    <AppBar position="fixed">
      <Toolbar sx={{ justifyContent: "center" }}>
        <Box
          sx={{
            flexGrow: 1,
            display: {
              xs: "flex",
              justifyContent: "space-between",
              maxWidth: "50rem",
            },
          }}
        >
          {pages.map((page) => (
            <Button
              key={page}
              onClick={() => {}}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              {page}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default DesktopHeader;
