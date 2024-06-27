import { Box, Typography } from "@mui/material";

const Testimonials = () => {
  return (
    <Box
      width={"80%"}
      display={"flex"}
      justifyContent={"center"}
      flexDirection={"column"}
      alignSelf={"center"}
      marginTop={"2rem"}
    >
      <Typography display={"flex"}>
        "Robert has been great to work with! He's able to take a simple concept
        and return a creative, well-written result. Robert has also been
        incredibly punctual with the delivery of his work. We've been very happy
        with Robert and will continue to go to him with future projects."
      </Typography>
      <Box display={"flex"} flexDirection={"column"}>
        <Typography display={"flex"} justifyContent={"flex-end"}>
          - Mike Martins
        </Typography>
        <Typography display={"flex"} justifyContent={"flex-end"}>
          Designer "Final Girl"
        </Typography>
      </Box>
    </Box>
  );
};
export default Testimonials;
