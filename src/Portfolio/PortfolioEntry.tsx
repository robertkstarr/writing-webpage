export interface PortfolioEntryProps {
  title: string;
  format: string;
  description: string;
  genre: string;
  length?: string;
}

export const PortfolioEntry = (props: PortfolioEntryProps) => {
  return (
    <>
      <h5>{props.title}</h5>
      {props.length && <h6>{props.length}</h6>}
      <h6>
        {props.format} ({props.genre})
      </h6>
      {props.description}
    </>
  );
};
