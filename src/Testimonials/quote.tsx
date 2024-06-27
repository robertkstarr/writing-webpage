import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";

const Quote = (props: {
  testimonial: string;
  source: string;
  company?: string;
}) => {
  return (
    <Box display={"flex"} gap={0} flexDirection={"column"}>
      <Typography display={"flex"}>{props.testimonial}</Typography>
      <Box display={"flex"} flexDirection={"column"}>
        <Typography display={"flex"} justifyContent={"flex-end"}>
          - {props.source}
        </Typography>
        {props.company && (
          <Typography display={"flex"} justifyContent={"flex-end"}>
            {props.company}
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default Quote;
