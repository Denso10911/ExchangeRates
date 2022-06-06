import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { historyAPI, HistoryParams } from "../../../../api/api";
import History from "./History";
import "./History.css";

const HistoryContainer: React.FC = () => {
  const [params, setParams] = useState<HistoryParams>({
    name: "usd",
    dates: [
      "20220101",
      "20220102",
      "20220103",
      "20220104",
      "20220105",
      "20220106",
      "20220107",
    ],
  });

  const [historyRates, setHistoryRates] = useState([
    { x: "01.01.2022", y: 35.35 },
  ]);
  const [name, setName] = React.useState("USD");

  const handleChange = (event: SelectChangeEvent) => {
    setName(event.target.value as string);
  };

  const countRatesHandler = (num: number) => {
    let dateArr = [];
    let date = new Date();
    for (let i: number = 0; i <= num; i++) {
      dateArr.push(
        `${date.getFullYear()}${date.getMonth() + 1}${date.getDate() - i}`
      );
      console.log(dateArr);
    }
  };
  debugger;
  useEffect(() => {
    let res: { x: string; y: number }[] = [];
    let resp = historyAPI.getHistory(params);
    let test = resp.forEach((el) => {
      el.then((response) =>
        res.push({
          x: response.data[0].exchangedate,
          y: response.data[0].rate,
        })
      );
    });
    console.log(test);

    setHistoryRates(res);
  }, [params]);

  return (
    <div style={{ height: "300px" }}>
      <div className='params'>
        <FormControl fullWidth>
          <InputLabel id='demo-simple-select-label'>Валюта</InputLabel>
          <Select
            labelId='demo-simple-select-label'
            id='demo-simple-select'
            value={name}
            label='Валюта'
            onChange={handleChange}
          >
            <MenuItem value={"USD"}>USD Долар США</MenuItem>
            <MenuItem value={"EUR"}>EUR Євро</MenuItem>
            <MenuItem value={"JPY"}>JPY Єна</MenuItem>
          </Select>
        </FormControl>
        <Button
          variant='outlined'
          onClick={() => {
            countRatesHandler(7);
          }}
        >
          Тиждень
        </Button>
        <Button variant='outlined'>Місяць</Button>
        <Button variant='outlined'>Рік</Button>
      </div>
      <History historyRates={historyRates} />
    </div>
  );
};

export default HistoryContainer;
