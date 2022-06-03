import { Container } from "@mui/material";
import React from "react";
import RateTabs from "./RateTabs";
import RatesTitle from "./RatesTitle";
import { AllRatesTab } from "../models";

type RatesProps = {
  allRatesTab: AllRatesTab[];
};

const Rates: React.FC<RatesProps> = ({ allRatesTab }) => {
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
      <RateTabs allRatesTab={allRatesTab} />
    </Container>
  );
};
export default Rates;
