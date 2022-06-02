import React, { useState } from "react";
import "./Converter.css";

const Converter = () => {
  //   const [from, setFrom] = useState("USD");
  //   const [to, setTo] = useState("UAH");
  //   const [fromSumm, setFromSumm] = useState(100);
  //   const [toSumm, setToSumm] = useState(
  //     Math.floor(
  //       fromSumm * props.rates.find((item) => item.ccy === "USD").sale * 100
  //     ) / 100
  //   );

  //   const changeHandlerFrom = (from, to, fromSumm) => {
  //     setFromSumm(fromSumm);
  //     let summ;
  //     if (from === to) {
  //       summ = fromSumm;
  //     } else if (to === "UAH") {
  //       summ = props.rates.find((item) => item.ccy === from).sale * fromSumm;
  //     } else if (from === "UAH") {
  //       summ = fromSumm / props.rates.find((item) => item.ccy === to).sale;
  //     } else {
  //       summ =
  //         (props.rates.find((item) => item.ccy === to).sale /
  //           props.rates.find((item) => item.ccy === from).sale) *
  //         fromSumm;
  //     }
  //     setToSumm(Math.floor(summ * 100) / 100);
  //   };
  //   const changeHandlerTo = (from, to, toSumm) => {
  //     setToSumm(toSumm);
  //     let summ;
  //     if (from === to) {
  //       summ = toSumm;
  //     } else if (from === "UAH") {
  //       summ = props.rates.find((item) => item.ccy === to).sale * toSumm;
  //     } else if (to === "UAH") {
  //       summ = toSumm / props.rates.find((item) => item.ccy === from).sale;
  //     } else {
  //       summ =
  //         (props.rates.find((item) => item.ccy === from).sale /
  //           props.rates.find((item) => item.ccy === to).sale) *
  //         toSumm;
  //     }
  //     setFromSumm(Math.floor(summ * 100) / 100);
  //   };
  //   const changeSelectFrom = (e) => {
  //     setFrom(e.target.value);
  //     changeHandlerFrom(e.target.value, to, fromSumm);
  //   };
  //   const changeSelectTo = (e) => {
  //     setTo(e.target.value);
  //     changeHandlerTo(from, e.target.value, toSumm);
  //   };

  return (
    <div className='converter'>
      {/* <div className='converter__from'>
        <div className='converter__title'>У меня есть</div>
        <div className='converter__summ'>
          <input
            type='number'
            value={fromSumm}
            onChange={(e) => {
              changeHandlerFrom(from, to, e.target.value);
            }}
          />
          <select
            onChange={(e) => {
              changeSelectFrom(e);
            }}
            value={from}
          >
            <option>USD</option>
            <option>EUR</option>
            <option>UAH</option>
          </select>
        </div>
        <div className='converter__point'></div>
      </div>
      <div className='converter__to'>
        <div className='converter__title'>Я получу</div>
        <div className='converter__summ'>
          <input
            type='number'
            value={toSumm}
            onChange={(e) => {
              changeHandlerTo(from, to, e.target.value);
            }}
          />
          <select
            onChange={(e) => {
              changeSelectTo(e);
            }}
            value={to}
          >
            <option>USD</option>
            <option>EUR</option>
            <option>UAH</option>
          </select>
        </div>
        <div className='converter__point'></div>
      </div> */}
    </div>
  );
};

export default Converter;
