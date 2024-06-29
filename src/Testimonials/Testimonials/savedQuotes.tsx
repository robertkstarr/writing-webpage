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

  const source = "Eliana Dell'Acqua";

  const company = "Editor";

  return <Quote testimonial={testimonial} source={source} company={company} />;
};
const Upwork1 = () => {
  const testimonial =
    "Robert was awesome to work with and delivered amazing quality!";

  const source = "Upwork Client";

  return <Quote testimonial={testimonial} source={source} />;
};

const Upwork2 = () => {
  const testimonial =
    "Robert was an excellent writer to work with, very cooperative, and very willing to adapt to our writing style. He has a gift for telling stories that are compelling. We'd love to work with him again in the future.";

  const source = "Panagiotis Soultanos";

  const company = "Upwork Client";

  return <Quote testimonial={testimonial} source={source} company={company} />;
};
const SavedQuotes = () => {
  return (
    <React.Fragment>
      <MikeMartins />
      <Eliana />
      <Upwork1 />
      <Upwork2 />
    </React.Fragment>
  );
};
export default SavedQuotes;
