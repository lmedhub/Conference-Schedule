import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";

export default function Hero() {
  return (
    <Box
      sx={{
        backgroundColor: "red",
        width: "100%",
        height: "40vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container
        sx={{
          textAlign: "center",
        }}
      >
        <Typography sx={{ mb: "1rem" }}>
          Elit eiusmod occaecat aliqua magna irure cillum incididunt consectetur
          mollit. Nostrud dolore aute in ea qui voluptate irure excepteur
          occaecat. Irure adipisicing qui velit sit sit non aliquip cupidatat
          aute dolor sit. Ea laboris eiusmod esse amet laboris. Deserunt
          adipisicing minim aliquip eiusmod dolor in culpa.
        </Typography>
        <Button variant="contained" sx={{ width: "15rem" }}>
          Buy a ticket!
        </Button>
      </Container>
    </Box>
  );
}
