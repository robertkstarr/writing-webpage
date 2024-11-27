import { Box, Card, CardContent, useTheme } from "@mui/material";
import Typography from "@mui/material/Typography";

const Quote = (props: {
  testimonial: string;
  source: string;
  company?: string;
}) => {
  const theme = useTheme();
  return (
    <Box
      height={"100%"}
      flexDirection={"column"}
      alignContent={"center"}
      justifyItems={"center"}
    >
      <Card
        variant="outlined"
        sx={{
          borderRadius: 5,
          backgroundColor: theme.palette.background.paper,
        }}
      >
        <CardContent>
          <Typography display={"flex"}>{props.testimonial}</Typography>
          <Box display={"flex"} flexDirection={"column"}>
            <Typography
              display={"flex"}
              justifyContent={"flex-end"}
              fontStyle={"italic"}
            >
              - {props.source}
            </Typography>
            {props.company && (
              <Typography
                display={"flex"}
                justifyContent={"flex-end"}
                fontWeight={"bold"}
              >
                {props.company}
              </Typography>
            )}
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Quote;
