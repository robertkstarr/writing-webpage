import { Box } from "@mui/material";
import PageTemplate from "../PageTemplate";
import SavedQuotes from "./Testimonials/savedQuotes";

const Testimonials = () => {
  return (
    <PageTemplate pageTitle="Testimonials">
      <Box
        width={"80%"}
        display={"flex"}
        justifyContent={"center"}
        flexDirection={"column"}
        alignSelf={"center"}
        marginTop={"2rem"}
        gap={"2rem"}
      >
        <SavedQuotes />
      </Box>
    </PageTemplate>
  );
};
export default Testimonials;
