import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./modules/dashboard/components/Header";
import Rates from "./modules/rates/components/Rates";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/rates' element={<Rates />} />
        <Route path='/converter' element={"converter"} />
        <Route path='/history' element={"history"} />
        <Route path='/' element={<Rates />} />
      </Routes>
    </>
  );
};

export default App;
