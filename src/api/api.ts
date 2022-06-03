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
