import { Container, Typography } from "@mui/material";
import React from "react";
import RateTabs from "./RateTabs";
import RatesTitle from "./RatesTitle";

const Rates: React.FC = () => {
  return (
    <Container
      maxWidth='xl'
      sx={{
        display: "flex",
        flexDirection: "column",
        mt: 5,
      }}
    >
      <RatesTitle />
      <RateTabs />
    </Container>
  );
};
export default Rates;
