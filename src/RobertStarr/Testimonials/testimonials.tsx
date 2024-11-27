import { Box } from "@mui/material";
import React from "react";
import Carousel from "react-material-ui-carousel";
import PageTemplate from "../../PageTemplate";
import SavedQuotes from "./Testimonials/savedQuotes";

const Testimonials = () => {
  return (
    <PageTemplate pageTitle="Testimonials">
      <Box
        width={"80vw"}
        display={"flex"}
        justifyContent={"center"}
        flexDirection={"column"}
        alignSelf={"center"}
        marginTop={"2rem"}
        gap={"2rem"}
      >
        <Carousel height={"20rem"} interval={6000}>
          {SavedQuotes.map((item, index) => (
            <React.Fragment key={index}>{item}</React.Fragment>
          ))}
        </Carousel>
      </Box>
    </PageTemplate>
  );
};
export default Testimonials;
