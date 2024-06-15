import { AppBar, Box, Button, Toolbar } from "@mui/material";

import React from "react";

const pages = ["Products", "Pricing", "Blog"];

const DesktopHeader = () => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
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
