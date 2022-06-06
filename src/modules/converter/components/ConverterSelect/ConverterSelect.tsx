import React, { useState } from "react";
import Filter from "../../../dashboard/components/Filter";
import { AllRatesTab } from "../../../rates/models";
import "./ConverterSelect.css";

type ConverterSelectTypes = {
  currencyAbbrev: string;
  onChange: (el: string) => void;
  allRatesTab: AllRatesTab[];
};

const ConverterSelect: React.FC<ConverterSelectTypes> = ({
  currencyAbbrev,
  onChange,
  allRatesTab,
}) => {
  const [openVariants, setOpenVariants] = useState(false);
  const [filterTab, setFilterTab] = useState<AllRatesTab[]>([]);

  const onOpenHandler = () => {
    setOpenVariants((prev) => !prev);
  };
  const onChoseHandler = (name: string) => {
    onChange(name);
    setOpenVariants((prev) => !prev);
  };
  return (
    <div className='select'>
      <button className='select__btn' onClick={onOpenHandler}>
        <span className='select__abbrev'>{currencyAbbrev}</span>
        <span className={`select__icon ${openVariants ? "open" : ""}`}>^</span>
      </button>
      <div className={`select__variants ${openVariants ? "open" : ""}`}>
        <div className='select__filter'>
          <Filter allRatesTab={allRatesTab} setFilterTab={setFilterTab} />
        </div>
        {filterTab.map((el) => {
          return (
            <div
              className='select__el'
              key={el.code}
              onClick={() => onChoseHandler(el.name)}
            >
              <button className='select__btn_el'>
                <div className='select__abbrev_el'>{el.name}</div>
                <div className='select__fullName'>{el.fullName}</div>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ConverterSelect;
