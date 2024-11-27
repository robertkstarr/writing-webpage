import Box from "@mui/material/Box";
import About from "../About/About";
import portrait from "../assets/cartoon-shaded.jpg";
import Contact from "../Contact/Contact";
import Portfolio from "../Portfolio/Portfolio";
import Services from "../Services/Services";
import Testimonials from "../Testimonials/testimonials";
import RobertStarrAboutText from "./RobertStarrAboutText";

const Content = () => {
  const getBody = () => {
    return (
      <>
        <About AboutText={<RobertStarrAboutText />} image={portrait} />
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
