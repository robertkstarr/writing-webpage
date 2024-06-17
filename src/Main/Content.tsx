import About from "../About/About";
import PageTemplate from "../PageTemplate";
import Testimonials from "../Testimonials/testimonials";

const Content = (props: { section: string }) => {
  const getBody = () => {
    switch (props.section) {
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

  return <PageTemplate pageTitle={props.section}>{getBody()}</PageTemplate>;
};

export default Content;
