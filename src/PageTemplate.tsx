import { Box, Container, Typography, useTheme } from "@mui/material";

const PageTemplate = (props: { pageTitle: string; children: JSX.Element }) => {
  const theme = useTheme();

  return (
    <Box>
      <Typography
        variant="h5"
        sx={{
          paddingTop: { xs: 2, md: 4 },
          display: "flex",
          justifyContent: "center",
          color: `${theme.palette.primary.main}`,
        }}
      >
        {props.pageTitle}
      </Typography>
      <Container
        maxWidth={false}
        sx={{
          display: "flex",

          flexDirection: "column",
          height: "100%",
          margin: 0,
          minHeight: 0,
        }}
      >
        {props.children}
      </Container>
    </Box>
  );
};

export default PageTemplate;
