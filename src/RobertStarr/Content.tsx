import Box from "@mui/material/Box";
import About from "../About/About";
import portrait from "../assets/cartoon-shaded.jpg";
import Contact from "../Contact/Contact";
import AboutText from "./AboutText";
import Testimonials from "./Testimonials/testimonials";

const Content = () => {
  const getBody = () => {
    return (
      <>
        <About AboutText={<AboutText />} image={portrait} />
        {/* <Services pageContent={<LoremIpsum p={20} />} /> */}
        <Testimonials />
        {/* <Portfolio /> */}
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
