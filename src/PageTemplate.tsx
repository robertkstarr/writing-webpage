import { Box, Typography, useTheme } from "@mui/material";

const PageTemplate = (props: { pageTitle: string; children: JSX.Element }) => {
  const theme = useTheme();

  return (
    <Box>
      <Typography
        variant="h5"
        sx={{
          paddingTop: 2,
          display: "flex",
          justifyContent: "center",
          color: `${theme.palette.primary.main}`,
        }}
      >
        {props.pageTitle}
      </Typography>
      {props.children}
    </Box>
  );
};

export default PageTemplate;
