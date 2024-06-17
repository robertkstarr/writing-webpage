import {
  Box,
  Card,
  CardMedia,
  Container,
  Typography,
  useTheme,
} from "@mui/material";
import LoremIpsum from "react-lorem-ipsum";
import portrait from "../assets/portrait.jpg";

const About = () => {
  const theme = useTheme();

  return (
    <Container
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
      <Card
        sx={{
          display: { xs: "flex", md: "none" },
          alignItems: "center",
          flex: 1,
          backgroundColor: "inherit",
          backgroundImage: "none",
          padding: 1,
          border: "none",
          boxShadow: "none",
          width: "100%",
          justifyContent: "center",
        }}
      >
        <CardMedia
          component="img"
          sx={{
            display: "flex",
            objectFit: "contain",
            width: "60%",
          }}
          image={portrait}
        />
      </Card>
      <Typography
        variant="h5"
        sx={{
          paddingTop: 2,
          display: "flex",
          justifyContent: "center",
          color: `${theme.palette.primary.main}`,
        }}
      >
        About
      </Typography>
      <Container
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Card
          sx={{
            display: { xs: "none", md: "flex" },
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
            paddingBottom: 4,
            textAlign: "left",
            // gap: 3,
            overflowY: "auto",
            justifyContent: "center",
          }}
        >
          {/* <AboutText /> */}
          <LoremIpsum p={5} random={false} />
        </Box>
      </Container>
    </Container>
  );
};

export default About;
