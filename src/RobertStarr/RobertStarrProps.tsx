import Content from "./Content";
import NavAppBarMenu from "../Main/Header/Navigation/NavAppBarMenu";
import NavDropDownMenu from "../Main/Header/Navigation/NavDropDownMenu";
import SiteHeader from "../Main/Header/SiteHeader";
import RomanceTheme from "../Main/Header/Theming/Themes/romance";
import SiteFooter from "../Main/SiteFooter";

const NavigationOptions = [
  "About",
  "Services",
  "Testimonials",
  "Portfolio",
  "Contact",
];

export default {
  theme: RomanceTheme,

  content: (
    <>
      <SiteHeader
        navDropDownMenu={
          <NavDropDownMenu navigationOptions={NavigationOptions} />
        }
        navAppBarMenu={<NavAppBarMenu navigationOptions={NavigationOptions} />}
      />
      <Content />
      <SiteFooter />
    </>
  ),

  title: "Robert Starr — Writer for Hire"
};
