import NavAppBarMenu from "../Main/Header/Navigation/NavAppBarMenu";
import NavDropDownMenu from "../Main/Header/Navigation/NavDropDownMenu";
import SiteHeader from "../Main/Header/SiteHeader";
import RomanceTheme from "../Main/Header/Theming/Themes/romance";
import SiteFooter from "../Main/SiteFooter";
import Content from "./Content";

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
      <SiteFooter author={"Robert K. Starr"} />
    </>
  ),

  title: "Robert Starr — Writer for Hire",
};
