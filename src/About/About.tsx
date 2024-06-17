import { Box, Card, CardMedia, Container, Typography } from "@mui/material";
import portrait from "../assets/portrait.jpg";
import AboutText from "./AboutText";

const About = () => {
  return (
    <Container
      // disableGutters
      maxWidth={false}
      sx={{
        display: "flex",
        paddingTop: 2,
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
        }}
      >
        <Card
          sx={{
            display: "flex",
            alignItems: "center",
            flex: 1,
            backgroundColor: "inherit",
            backgroundImage: "none",
            padding: 4,
            border: "none",
            boxShadow: "none",
          }}
        >
          <CardMedia
            component="img"
            height="100%"
            sx={{ display: "flex", objectFit: "contain" }}
            image={portrait}
          />
        </Card>
        <Box
          sx={{
            display: "flex",
            flex: 4,
            flexDirection: "column",
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
