import React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import { TabContext, TabList, TabPanel } from "@mui/lab";

const RateTabs: React.FC = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label='lab API tabs example'>
            <Tab label='ALL' value='1' />
            <Tab label='USD' value='2' />
            <Tab label='EURO' value='3' />
          </TabList>
        </Box>
        <TabPanel value='1'>ALL</TabPanel>
        <TabPanel value='2'>USD</TabPanel>
        <TabPanel value='3'>EURO</TabPanel>
      </TabContext>
    </Box>
  );
};

export default RateTabs;
