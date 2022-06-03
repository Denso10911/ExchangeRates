import React, { ReactEventHandler, useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { AllRatesTab } from "../../models";
import { TextField } from "@mui/material";

type RatesTabsProps = {
  allRatesTab: AllRatesTab[];
};

const RatesAll: React.FC<RatesTabsProps> = ({ allRatesTab }) => {
  const [filterTab, setFilterTab] = useState<AllRatesTab[]>([]);
  const [filterValue, setFilterValue] = useState("");

  const filterHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilterValue(event.target.value);
  };

  useEffect(() => {
    setFilterTab(allRatesTab);
  }, [allRatesTab]);

  useEffect(() => {
    const filteredRates = allRatesTab.filter((el) => {
      if (filterValue === "." || "\\") {
        return false;
      }
      const regexp = new RegExp(`${filterValue}`, "i");
      return regexp.test(el.fullName);
    });
    if (filterValue) {
      setFilterTab(filteredRates);
    } else {
      setFilterTab(allRatesTab);
    }
  }, [filterValue]);

  return (
    <TableContainer component={Paper}>
      <TextField
        id='outlined-basic'
        label='Пошук'
        variant='outlined'
        value={filterValue}
        onChange={filterHandler}
        color={filterTab.length === 0 ? "error" : "primary"}
        sx={{
          mt: 1,
        }}
      />
      <Table sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>Валюта</TableCell>
            <TableCell align='center'>Скорочення</TableCell>
            <TableCell align='center'>Курс НБУ</TableCell>
            <TableCell align='center'>МоноБанк</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filterTab.map((el) => (
            <TableRow
              key={el.code}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
              }}
            >
              <TableCell component='th' scope='row' width='500'>
                {el.fullName}
              </TableCell>
              <TableCell align='center'>{el.name}</TableCell>
              <TableCell align='center'>{el.rateNBU}</TableCell>
              <TableCell align='center'>
                {el.rateMono
                  ? el.rateMono.rateCross
                    ? el.rateMono.rateCross
                    : `${el.rateMono.rateBuy} / ${el.rateMono.rateSell}`
                  : "-----"}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default RatesAll;
