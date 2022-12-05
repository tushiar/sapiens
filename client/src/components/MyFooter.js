import { Box, Typography } from "@mui/material";
import React from "react";
import Link from "@mui/material/Link";

function Copyright() {
  return (
    <Typography variant="body2"  align="center">
      {"Copyright © "}
      <Link color="inherit" href="http://tushar-moolya.herokuapp.com">
        Tushar Moolya
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const MyFooter = () => {
  return (
    <Box sx={{ color: "text.primary", p: 6, backgroundColor: 'primary.main' }} component="footer">
      <Typography variant="h6" align="center" gutterBottom>
        Footer
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
       
        component="p"
      >
        This is a test footer
      </Typography>
      <Copyright />
    </Box>
  );
};

export default MyFooter;
