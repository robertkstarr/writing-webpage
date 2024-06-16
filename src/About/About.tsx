import { Box, Card, CardMedia, Container, Typography } from "@mui/material";
import portrait from "../assets/portrait.jpg";
import AboutText from "./AboutText";

const About = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        margin: 0,
        minHeight: 0,
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "row",
          height: "100%",
          minHeight: 0,
        }}
      >
        <Card
          sx={{
            display: "flex",
            padding: 1,
            flexGrow: "1",
            flexDirection: "column",
            justifyContent: "center",
            backgroundColor: "inherit",
            backgroundImage: "none",
          }}
        >
          <CardMedia component="img" height="40%" image={portrait} />
        </Card>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flexGrow: "2",
            width: "80%",
            // height: "auto",
            // margin: 4,
            padding: 2,
            textAlign: "left",
            gap: 3,
            overflowY: "auto",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h5"
            sx={{ display: "flex", justifyContent: "center" }}
          >
            About
          </Typography>
          <AboutText />
        </Box>
      </Container>
    </Container>
  );
};

export default About;
