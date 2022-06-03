import { RateMonoBank } from "../../models";

export const RatesMonoToObj = (ratesMonoBank: RateMonoBank[]) => {
  //Убрал с масива елемент с крускурсом dolar/euro
  let newArr = ratesMonoBank.filter((el) => el.currencyCodeB === 980);

  //трансформация масива в obj с ключем currencyCode для удобства создания одного масива с курсами разных банков
  return newArr.reduce((acc: { [key: number]: RateMonoBank }, el) => {
    acc[el.currencyCodeA] = el;
    return acc;
  }, {});
};
