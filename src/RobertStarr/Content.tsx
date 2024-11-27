import Box from "@mui/material/Box";
import LoremIpsum from "react-lorem-ipsum";
import About from "../About/About";
import portrait from "../assets/cartoon-shaded.jpg";
import Contact from "../Contact/Contact";
import Portfolio from "../Portfolio/Portfolio";
import Services from "../Services/Services";
import AboutText from "./AboutText";
import Testimonials from "./Testimonials/testimonials";

const Content = () => {
  const getBody = () => {
    return (
      <>
        <About AboutText={<AboutText />} image={portrait} />
        <Services pageContent={<LoremIpsum p={20} />} />
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
