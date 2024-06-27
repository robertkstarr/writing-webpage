import { Box } from "@mui/material";
import SavedQuotes from "./Testimonials/savedQuotes";

const Testimonials = () => {
  return (
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
  );
};
export default Testimonials;
