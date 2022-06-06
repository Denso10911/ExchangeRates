import { SelectChangeEvent, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { AllRatesTab } from "../../../rates/models";
import ConverterSelect from "../ConverterSelect";
import "./Converter.css";
type ConverterProps = {
  allRatesTab: AllRatesTab[];
};

const Converter: React.FC<ConverterProps> = ({ allRatesTab }) => {
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("UAH");
  const [fromSumm, setFromSumm] = useState(100);
  const [toSumm, setToSumm] = useState(0);

  useEffect(() => {
    if (allRatesTab.length > 1) {
      console.log("allRatesTab");
      setToSumm(Math.floor(fromSumm * allRatesTab[25].rateNBU * 100) / 100);
    }
  }, [allRatesTab]);

  const calcSummTo = (newSumm: number, from: string, to: string) => {
    let summ;
    if (from === to) {
      summ = newSumm;
    } else if (to === "UAH") {
      summ = allRatesTab.find((item) => item.name === from)!.rateNBU * newSumm;
    } else if (from === "UAH") {
      summ = newSumm / allRatesTab.find((item) => item.name === to)!.rateNBU;
    } else {
      summ =
        (allRatesTab.find((item) => item.name === from)!.rateNBU /
          allRatesTab.find((item) => item.name === to)!.rateNBU) *
        newSumm;
    }
    return summ;
  };

  const calcSummFrom = (newSumm: number, from: string, to: string) => {
    let summ;
    if (from === to) {
      summ = newSumm;
    } else if (from === "UAH") {
      summ = allRatesTab.find((item) => item.name === to)!.rateNBU * newSumm;
    } else if (to === "UAH") {
      summ = newSumm / allRatesTab.find((item) => item.name === from)!.rateNBU;
    } else {
      summ =
        (allRatesTab.find((item) => item.name === from)!.rateNBU /
          allRatesTab.find((item) => item.name === to)!.rateNBU) *
        newSumm;
    }
    return summ;
  };

  const changeFromSummCalcToSumm = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    let newFromSumm = +event.target.value.replace(/[^0-9]/gm, "");
    setFromSumm(newFromSumm);
    setToSumm(Math.floor(calcSummTo(newFromSumm, from, to) * 100) / 100);
  };

  const changeToSummCaclFromSumm = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    let newToSumm = +event.target.value.replace(/[^0-9]/gm, "");
    setToSumm(newToSumm);
    setFromSumm(Math.floor(calcSummFrom(newToSumm, from, to) * 100) / 100);
  };

  const changeFromCalcToSumm = (name: string) => {
    setFrom(name);
    setToSumm(Math.floor(calcSummTo(fromSumm, name, to) * 100) / 100);
  };

  const changeToCalcToSumm = (name: string) => {
    setTo(name);
    setToSumm(Math.floor(calcSummTo(fromSumm, from, name) * 100) / 100);
  };

  return (
    <div className='converter'>
      <div className='converter__from'>
        <div className='converter__summ'>
          <TextField
            id='outlined-basic'
            label='У мене є'
            variant='outlined'
            type='text'
            value={fromSumm}
            onChange={changeFromSummCalcToSumm}
            sx={{ width: "100%" }}
          />
          <ConverterSelect
            currencyAbbrev={from}
            onChange={changeFromCalcToSumm}
            allRatesTab={allRatesTab}
          />
        </div>
      </div>

      <div className='converter__to'>
        <div className='converter__summ'>
          <TextField
            id='outlined-basic'
            label='Я отримаю'
            variant='outlined'
            type='text'
            value={toSumm}
            onChange={changeToSummCaclFromSumm}
            sx={{ width: "100%" }}
          />
          <ConverterSelect
            currencyAbbrev={to}
            onChange={changeToCalcToSumm}
            allRatesTab={allRatesTab}
          />
        </div>
      </div>
    </div>
  );
};

export default Converter;
