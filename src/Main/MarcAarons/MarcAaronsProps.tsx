import LoremIpsum from "react-lorem-ipsum";
import About from "../../About/About";
import portrait from "../../assets/dragon.jpg";
import Contact from "../../Contact/Contact";
import Services from "../../Services/Services";
import NavAppBarMenu from "../Header/Navigation/NavAppBarMenu";
import NavDropDownMenu from "../Header/Navigation/NavDropDownMenu";
import SiteHeader from "../Header/SiteHeader";
import HackerTheme from "../Header/Theming/Themes/hacker";
import SiteFooter from "../SiteFooter";

const NavigationOptions = ["About", "Services", "Contact"];

export default {
  theme: HackerTheme,

  content: (
    <>
      <SiteHeader
        navDropDownMenu={
          <NavDropDownMenu navigationOptions={NavigationOptions} />
        }
        navAppBarMenu={<NavAppBarMenu navigationOptions={NavigationOptions} />}
      />
      <About AboutText={<LoremIpsum p={4} />} image={portrait} />
      <Services pageContent={<LoremIpsum p={3} />} />
      <Contact />
      <SiteFooter author={"Marc Aarons"} />
    </>
  ),

  title: "Marc Aarons - M/M Romance Author",
};
