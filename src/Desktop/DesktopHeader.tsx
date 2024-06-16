import { AppBar, Box, Button, Toolbar } from "@mui/material";

const pages = ["About", "Services", "Testimonials", "Portfolio", "Contact"];

interface HeaderProps {
  setSection: (input: string) => void;
}

const DesktopHeader = (props: HeaderProps) => {
  return (
    <>
      <AppBar position="fixed">
        {/* See: https://mui.com/material-ui/react-app-bar/#app-bar-with-responsive-menu for how to make it responsive (mobile vs desktop) */}
        <Toolbar sx={{ justifyContent: "center" }}>
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
                  console.log(page);
                  props.setSection(page);
                }}
                sx={{ my: 2, display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
};

export default DesktopHeader;
