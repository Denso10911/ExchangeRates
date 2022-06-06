import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { AllRatesTab } from "../../models";

type RateCurrencyProp = {
  currency: AllRatesTab;
};

const RateCurrency: React.FC<RateCurrencyProp> = ({ currency }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>Курс до гривні</TableCell>
            <TableCell align='center'>Покупка</TableCell>
            <TableCell align='center'>Продаж</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow
            sx={{
              "&:last-child td, &:last-child th": { border: 0 },
            }}
          >
            <TableCell component='th' scope='row' width='500'>
              МоноБанк
            </TableCell>
            {currency.rateMono && (
              <>
                <TableCell align='center'>
                  {currency.rateMono.rateSell}
                </TableCell>
                <TableCell align='center'>
                  {currency.rateMono.rateBuy}
                </TableCell>
              </>
            )}
            {!currency.rateMono && (
              <>
                <TableCell align='center'>----</TableCell>
                <TableCell align='center'>----</TableCell>
              </>
            )}
          </TableRow>

          <TableRow
            sx={{
              "&:last-child td, &:last-child th": { border: 0 },
            }}
          >
            <TableCell component='th' scope='row' width='500'>
              НБУ
            </TableCell>
            <TableCell align='center' colSpan={2}>
              {currency.rateNBU}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default RateCurrency;
