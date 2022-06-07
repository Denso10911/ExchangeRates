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
  days: string[];
};

export const historyAPI = {
  getHistory(name: string, day: string) {
    return axios.get(
      `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=${name}&date=${day}&json`
    );
  },
};
