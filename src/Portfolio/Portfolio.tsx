import LoremIpsum from "react-lorem-ipsum";
import PageTemplate from "../PageTemplate";

const Portfolio = () => {
  return (
    <PageTemplate pageTitle="Portfolio">
      <div>
        <LoremIpsum p={30} />
      </div>
    </PageTemplate>
  );
};

export default Portfolio;
