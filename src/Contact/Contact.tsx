import { Box, Typography } from "@mui/material";
import Obfuscate from "react-obfuscate";
import PageTemplate from "../PageTemplate";

interface ContactProps {
  email?: string;
  phoneNumber?: string;
}

const Contact = (props: ContactProps) => {
  const Email = () => {
    return (
      <Box display="flex" flexDirection="row" justifyContent="space-between">
        <Typography variant="subtitle1" padding=".125rem">
          Email:
        </Typography>
        <Typography variant="subtitle1" padding=".125rem">
          <Obfuscate email={props.email} />
        </Typography>
      </Box>
    );
  };
  const PhoneNumber = () => {
    return (
      <Box display="flex" flexDirection="row">
        <Typography variant="subtitle1" padding=".125rem">
          Phone:
        </Typography>
        <Typography variant="subtitle1" padding=".125rem">
          <Obfuscate tel={props.phoneNumber} />
        </Typography>
      </Box>
    );
  };

  return (
    <PageTemplate pageTitle="Contact">
      <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
        {props.email && <Email />}
        {props.phoneNumber && <PhoneNumber />}
      </Box>
    </PageTemplate>
  );
};

export default Contact;
