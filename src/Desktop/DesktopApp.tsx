import Container from "@mui/material/Container";
import About from "../About/About";
import DesktopFooter from "./DesktopFooter";
import DesktopHeader from "./DesktopHeader";

const DesktopApp = () => {
  return (
    <>
      <DesktopHeader />
      <Container
        disableGutters
        sx={{
          display: "flex",
          alignItems: "stretch",
          width: "100%",
          height: "70vh",
          margin: "0",
          padding: "0",
          border: "0",
        }}
      >
        <About />
      </Container>
      <DesktopFooter />
    </>
  );
};

export default DesktopApp;
