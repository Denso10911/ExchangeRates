export type RateNBU = {
  cc: string;
  exchangedate: string;
  r030: number;
  rate: number;
  txt: string;
};

export type RateMonoBank = {
  currencyCodeA: number;
  currencyCodeB: number;
  date: number;
  rateBuy?: number;
  rateSell?: number;
  rateCross?: number;
};
export type AllRatesTab = {
  name: string;
  code: number;
  fullName: string;
  rateNBU: number;
  rateMono: RateMonoBank;
};
