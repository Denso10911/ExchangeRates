import axios from "axios";

export const ratesAPI = {
  getNBU() {
    return axios.get(
      `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json`
    );
  },
  getMonoBank() {
    return axios.get(`https://api.monobank.ua/bank/currency`);
  },
};

export type HistoryParams = {
  name: string;
  dates: string[];
};

export const historyAPI = {
  getHistory(params: HistoryParams) {
    let datesRate = params.dates.map((el) => {
      return axios.get(
        `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=${params.name}&date=${el}&json`
      );
    });
    return datesRate;
  },
};
