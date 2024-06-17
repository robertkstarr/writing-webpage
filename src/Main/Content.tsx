import LoremIpsum from "react-lorem-ipsum";
import About from "../About/About";
import PageTemplate from "../PageTemplate";
import Testimonials from "../Testimonials/testimonials";

const Content = (props: { section: string }) => {
  const getBody = () => {
    switch (props.section) {
      case "About":
        return <About />;
      case "Services":
        return (
          <>
            <LoremIpsum p={5} random={false} />
          </>
        );
      case "Testimonials":
        return <Testimonials />;
      case "Portfolio":
        return (
          <>
            <LoremIpsum p={5} random={false} />
          </>
        );
      case "Contact":
        return (
          <>
            <LoremIpsum p={5} random={false} />
          </>
        );
      default:
        return <>Invalid Selection</>;
    }
  };

  return <PageTemplate pageTitle={props.section}>{getBody()}</PageTemplate>;
};

export default Content;
