import { Box, Card, CardMedia } from "@mui/material";
import portrait from "../assets/portrait.jpg";
import AboutText from "./AboutText";

const About = () => {
  return (
    <>
      <Card
        sx={{
          display: "flex",
          padding: 1,
          flexGrow: "1",
          flexDirection: "column",
          justifyContent: "center",
          backgroundImage: "none",
        }}
      >
        <CardMedia component="img" height="70%" image={portrait} />
      </Card>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flexGrow: "2",
          width: "80%",
          margin: 4,
          textAlign: "left",
          gap: 3,
          overflowY: "auto",
        }}
      >
        <AboutText />
      </Box>
    </>
  );
};

export default About;
