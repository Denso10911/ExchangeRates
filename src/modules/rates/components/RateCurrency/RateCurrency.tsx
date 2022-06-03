import React from "react";
import { AllRatesTab } from "../../models";

type RateCurrencyProp = {
  currency: AllRatesTab;
};

const RateCurrency: React.FC<RateCurrencyProp> = ({ currency }) => {
  return <div>{currency.fullName}</div>;
};

export default RateCurrency;
