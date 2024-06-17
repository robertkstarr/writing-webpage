import { useState } from "react";
import About from "../About/About";
import DesktopFooter from "./DesktopFooter";
import DesktopHeader from "./DesktopHeader";

const DesktopApp = () => {
  const [section, setSection] = useState("About");

  const Content = () => {
    switch (section) {
      case "About":
        return <About />;
      case "Services":
        return <>Services</>;
      case "Testimonials":
        return <>Testimonials</>;
      case "Portfolio":
        return <>Portfolio</>;
      case "Contact":
        return <>Contact</>;
      default:
        return <>Invalid Selection</>;
    }
  };

  return (
    <>
      <DesktopHeader setSection={setSection} />
      <Content />
      <DesktopFooter />
    </>
  );
};

export default DesktopApp;
