import React from "react";
import Quote from "../quote";

const MikeMartins = () => {
  const testimonial =
    "Robert has been great to work with! He's able to take a simple concept and return a creative, well-written result. Robert has also been incredibly punctual with the delivery of his work. We've been very happy with Robert and will continue to go to him with future projects.";

  const source = "Mike Martins";

  const company = "Designer 'Final Girl' Board Game";

  return <Quote testimonial={testimonial} source={source} company={company} />;
};

const Eliana = () => {
  const testimonial =
    "Working with Robert Starr is an absolute delight. His ability to write compelling characters, create intricate plots, and his consistency in delivering page-turning quality stories is remarkable. Beyond his remarkable writing, collaborating with Robert Starr is an absolute pleasure. He is diligent in meeting deadlines, and his rewriting skills are outstanding! His incredibly easy-going personality, and passion for the craft make every project enjoyable and productive. I highly recommend his work and collaboration to anyone looking to work with an outstanding  ghostwriter.";

  const source = "Eliana";

  return <Quote testimonial={testimonial} source={source} />;
};

const SavedQuotes = () => {
  return (
    <React.Fragment>
      <MikeMartins />
      <Eliana />
    </React.Fragment>
  );
};
export default SavedQuotes;
