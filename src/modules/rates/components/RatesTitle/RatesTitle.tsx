import { Typography } from "@mui/material";
import React from "react";

const RatesTitle: React.FC = () => {
  return (
    <>
      <Typography
        variant='h5'
        noWrap
        component='span'
        sx={{
          flexGrow: 1,
          fontSize: "1rem",
          fontFamily: "monospace",
          fontWeight: 500,
          color: "inherit",
          textDecoration: "none",
        }}
      >
        Курс обміну валют на сьогодні
      </Typography>
      <Typography
        variant='h5'
        noWrap
        component='span'
        sx={{
          mb: 2,
          flexGrow: 1,
          fontFamily: "monospace",
          fontWeight: 500,
          color: "inherit",
          textDecoration: "none",
        }}
      >
        Курс валют в Україні
      </Typography>
    </>
  );
};
export default RatesTitle;
