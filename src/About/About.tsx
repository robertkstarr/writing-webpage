import {
  Box,
  Card,
  CardMedia,
  Container,
  Typography,
  useTheme,
} from "@mui/material";
import portrait from "../assets/portrait.jpg";
import AboutText from "./AboutText";

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
            padding: 2,
            textAlign: "left",
            gap: 3,
            overflowY: "auto",
            justifyContent: "center",
          }}
        >
          <AboutText />
        </Box>
      </Container>
    </Container>
  );
};

export default About;
