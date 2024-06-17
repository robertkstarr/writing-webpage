import About from "../About/About";
import Testimonials from "../Testimonials/testimonials";

export const Content = (section: string) => {
  switch (section) {
    case "About":
      return <About />;
    case "Services":
      return <>Services</>;
    case "Testimonials":
      return <Testimonials />;
    case "Portfolio":
      return <>Portfolio</>;
    case "Contact":
      return <>Contact</>;
    default:
      return <>Invalid Selection</>;
  }
};
