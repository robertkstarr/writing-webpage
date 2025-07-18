import Box from "@mui/material/Box";
import LoremIpsum from "react-lorem-ipsum";
import About from "../About/About";
import portrait from "../assets/dragon.jpg";
import Contact from "../Contact/Contact";
import NavAppBarMenu from "../Main/Header/Navigation/NavAppBarMenu";
import NavDropDownMenu from "../Main/Header/Navigation/NavDropDownMenu";
import SiteHeader from "../Main/Header/SiteHeader";
import DefaultTheme from "../Main/Header/Theming/Themes/default";
import SiteFooter from "../Main/SiteFooter";
import Services from "../Services/Services";

const NavigationOptions = ["About", "Services", "Contact"];

export default {
  theme: DefaultTheme,

  content: (
    <Box
      width="100%"
      justifyContent={"center"}
      display={"flex"}
      flexDirection={"column"}
    >
      <SiteHeader
        navDropDownMenu={
          <NavDropDownMenu navigationOptions={NavigationOptions} />
        }
        navAppBarMenu={<NavAppBarMenu navigationOptions={NavigationOptions} />}
      />
      <About
        AboutText={
          <>
            <div>
              Marc Aarons grew up in Central Texas where he always dreamed of
              becoming a firefighter.
            </div>
          </>
        }
        image={portrait}
      />
      <Services pageContent={<LoremIpsum p={3} />} />
      <Contact />
      <SiteFooter author={"Marc Aarons"} />
    </Box>
  ),

  title: "Marc Aarons - M/M Romance Author",
};
