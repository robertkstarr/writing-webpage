import React from "react";
import PageTemplate from "../PageTemplate";

const Services = (props: { pageContent: React.ReactElement }) => {
  return <PageTemplate pageTitle="Services">{props.pageContent}</PageTemplate>;
};

export default Services;
