import Box from "@mui/material/Box";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Portfolio from "../Portfolio/Portfolio";
import Services from "../Services/Services";
import Testimonials from "../Testimonials/testimonials";

const Content = (props: { section: string }) => {
  const getBody = () => {
    return (
      <>
        <About />
        <Services />
        <Testimonials />
        <Portfolio />
        <Contact />
      </>
    );
  };

  return (
    <Box
      width="100%"
      justifyContent={"center"}
      display={"flex"}
      flexDirection={"column"}
    >
      {getBody()}
    </Box>
  );
};

export default Content;
