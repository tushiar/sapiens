import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React from "react";

const MainSection = () => {
  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        pt: 8,
        pb: 6,
      }}
    >
      <Container maxWidth="sm">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          A Landing page
        </Typography>
        <Typography variant="h5" align="center" color="text.primary" paragraph>
          This is some random text added to complete the assigment on time. Let
          see how it looks with some theeming context. Used material UI for the
          better appearance.
        </Typography>
        <Stack
          sx={{ pt: 4 }}
          direction="row"
          spacing={2}
          justifyContent="center"
        >
          <Button variant="contained">A simple button</Button>
          <Button variant="outlined">A fancy button</Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default MainSection;
