import Content from "../Main/Content";
import NavAppBarMenu from "../Main/Header/Navigation/NavAppBarMenu";
import NavDropDownMenu from "../Main/Header/Navigation/NavDropDownMenu";
import SiteHeader from "../Main/Header/SiteHeader";
import RomanceTheme from "../Main/Header/Theming/Themes/romance";
import SiteFooter from "../Main/SiteFooter";

export default {
  theme: RomanceTheme,

  content: (
    <>
      <SiteHeader
        navDropDownMenu={<NavDropDownMenu />}
        navAppBarMenu={<NavAppBarMenu />}
      />
      )
      <Content />
      <SiteFooter />{" "}
    </>
  ),
};
