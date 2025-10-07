import PageTemplate from "../PageTemplate";
import { PortfolioEntry, PortfolioEntryProps } from "./PortfolioEntry";

interface PortfolioProps {
  entries: PortfolioEntryProps[];
}

const Portfolio = (props: PortfolioProps) => {
  return (
    <PageTemplate pageTitle="Portfolio">
      <>
        {props.entries.map((element) => {
          return (
            <div>
              <PortfolioEntry {...element} />
            </div>
          );
        })}
      </>
    </PageTemplate>
  );
};

export default Portfolio;
