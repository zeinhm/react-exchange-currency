import axios from 'axios'
import { BASE_URL } from '../lib/constants'

const fetch = (url, method, param1, param2) => {
  return new Promise((resolve, reject) => {
    axios[method](url, param1, param2)
      .then(res => resolve(res.data))
      .catch(err => reject(err.response.data));
  });
};

export const fetchCurrencyFromUSD = async (toCurrencies) => (
  await fetch(`${BASE_URL}?base=USD&symbols=${toCurrencies}`, 'get')
) 