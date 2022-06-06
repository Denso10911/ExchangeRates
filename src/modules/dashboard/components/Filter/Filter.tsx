import { TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { AllRatesTab } from "../../../rates/models";

type FilterProps = {
  allRatesTab: AllRatesTab[];
  setFilterTab: (allRatesTab: AllRatesTab[]) => void;
};

const Filter: React.FC<FilterProps> = ({ allRatesTab, setFilterTab }) => {
  const [filterValue, setFilterValue] = useState("");

  const filterHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilterValue(event.target.value);
  };

  useEffect(() => {
    let filtered = allRatesTab.filter((el) => {
      if (filterValue === "") {
        return el;
      } else if (
        el.fullName
          .toLocaleLowerCase()
          .includes(filterValue.toLocaleLowerCase())
      ) {
        return el;
      }
    });

    setFilterTab(filtered);
  }, [filterValue, allRatesTab]);
  return (
    <>
      <TextField
        id='standard-basic'
        label='Пошук'
        variant='standard'
        value={filterValue}
        onChange={filterHandler}
      />
    </>
  );
};
export default Filter;
