import Box from "@mui/material/Box";
import About from "../About/About";
import portrait from "../assets/cartoon-shaded.jpg";
import Contact from "../Contact/Contact";
import Portfolio from "../Portfolio/Portfolio";
import AboutText from "./AboutText";
import PortfolioContent from "./PortfolioContent";
import Testimonials from "./Testimonials/testimonials";

const Content = () => {
  const getBody = () => {
    return (
      <>
        <About AboutText={<AboutText />} image={portrait} />
        {/* <Services pageContent={<LoremIpsum p={20} />} /> */}
        <Portfolio entries={PortfolioContent} />
        <Testimonials />
        <Contact email={"robert@robertkstarr.com"} phoneNumber="818-378-4899" />
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
