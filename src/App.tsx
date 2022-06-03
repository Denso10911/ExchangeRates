import React, { useEffect, useMemo, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { ratesAPI } from "./api/api";
import Header from "./modules/dashboard/components/Header";
import Rates from "./modules/rates/components/Rates";
import { RatesMonoToObj } from "./modules/rates/components/RatesAll/RatesMonoToObj";
import { AllRatesTab, RateMonoBank, RateNBU } from "./modules/rates/models";

const App: React.FC = () => {
  const [ratesNBU, setRatesNBU] = useState<RateNBU[]>([]);
  const [ratesMonoBank, setRatesMonoBank] = useState<RateMonoBank[]>([]);
  const [allRatesTab, setAllRatesTab] = useState<AllRatesTab[]>([]);

  useEffect(() => {
    ratesAPI.getNBU().then((response) => setRatesNBU(response.data));
    ratesAPI
      .getMonoBank()
      .then((response) => setRatesMonoBank(response.data))
      .catch((error) => console.log(error));
    console.log("response");
  }, []);

  useEffect(() => {
    //трансформация масива в obj с ключем currencyCode для удобства создания одного масива с курсами разных банков
    const ObjRatesMonoBank = RatesMonoToObj(ratesMonoBank);

    //новый масив с курсами разных банков
    const newArr = ratesNBU.map((el) => {
      const newEl = {
        name: el.cc,
        code: el.r030,
        fullName: el.txt,
        rateNBU: el.rate,
        rateMono: ObjRatesMonoBank[el.r030],
      };
      return newEl;
    });

    setAllRatesTab(newArr);
  }, [ratesNBU, ratesMonoBank]);

  return (
    <>
      <Header />
      <Routes>
        <Route path='*' element={<Rates allRatesTab={allRatesTab} />} />
        <Route path='/converter' element={"converter"} />
        <Route path='/history' element={"history"} />
      </Routes>
    </>
  );
};

export default App;
