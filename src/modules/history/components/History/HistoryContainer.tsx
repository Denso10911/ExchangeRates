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
import Loading from "../../../dashboard/components/Loading/Loading";
import { historyRates } from "../../models";

const HistoryContainer: React.FC = () => {
  const [params, setParams] = useState<HistoryParams>({
    name: "usd",
    days: ["20220101"],
  });

  const [historyRates, setHistoryRates] = useState<historyRates[]>([
    { x: "01.01.2022", y: 35.35 },
  ]);
  const [name, setName] = React.useState("USD");
  const [loading, setLoading] = useState(false);

  const handleChange = (event: SelectChangeEvent) => {
    setName(event.target.value as string);
  };

  const countRatesHandler = (num: number) => {
    setLoading(true);
    let daysArr = [];
    let today = Date.now();
    for (let i: number = 0; i < num; i++) {
      let fullDay = new Date(today - i * 86400000);
      let day = ("0" + fullDay.getDate()).slice(-2);
      let month = ("0" + (fullDay.getMonth() + 1)).slice(-2);
      let year = fullDay.getFullYear();
      daysArr.push(`${year}${month}${day}`);
    }
    setParams({
      name,
      days: daysArr,
    });
  };

  const fetchData = async (name: string, days: string[]) => {
    let res: historyRates[] = [];
    for (let i: number = 0; i < days.length; i++) {
      let data = await historyAPI.getHistory(name, days[i]);
      await res.push({ x: data.data[0].exchangedate, y: data.data[0].rate });
    }
    await setLoading(false);
    setHistoryRates(res);
  };

  useEffect(() => {
    fetchData(params.name, params.days);
  }, [params]);

  return (
    <div style={{ height: "350px" }}>
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
          disabled={loading}
        >
          Тиждень
        </Button>
        <Button
          variant='outlined'
          onClick={() => {
            countRatesHandler(30);
          }}
          disabled={loading}
        >
          Місяць
        </Button>
      </div>

      {loading && <Loading />}
      {!loading && <History historyRates={historyRates} />}
    </div>
  );
};

export default HistoryContainer;
