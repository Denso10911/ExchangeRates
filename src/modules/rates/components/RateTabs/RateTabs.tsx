import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { AllRatesTab } from "../../models";
import RatesAll from "../RatesAll";
import RateCurrency from "../RateCurrency";

type RatesTabsProps = {
  allRatesTab: AllRatesTab[];
};

const RateTabs: React.FC<RatesTabsProps> = ({ allRatesTab }) => {
  const [value, setValue] = useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label='lab API tabs example'>
            <Tab label='Всі валюти' value='1' />
            <Tab label='USD' value='2' />
            <Tab label='EURO' value='3' />
          </TabList>
        </Box>
        <TabPanel value='1'>
          <RatesAll allRatesTab={allRatesTab} />
        </TabPanel>
        <TabPanel value='2'>
          <RateCurrency currency={allRatesTab[25]} />
        </TabPanel>
        <TabPanel value='3'>
          <RateCurrency currency={allRatesTab[32]} />
        </TabPanel>
      </TabContext>
    </Box>
  );
};

export default RateTabs;
