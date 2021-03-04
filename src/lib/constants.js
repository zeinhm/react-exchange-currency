const BASE_URL = 'https://api.exchangeratesapi.io/latest'
const CURRENCIES = {
  USD: 'USD - United States Dollar',
  CAD: 'CAD - Canadian Dollar',
  IDR: 'IDR - Indonesian Rupiah',
  GBP: 'GBP - Pound Sterling',
  CHF: 'CHF - Swiss Franc',
  SGD: 'SGD - Singapore Dollar',
  INR: 'INR - Indian Rupee',
  MYR: 'MYR - Malaysian Ringgit',
  JPY: 'JPY - Yen',
  KRW: 'KRW - Won',
}
const SUPPORTED_CURRENCIES = ['USD', 'CAD', 'IDR', 'GBP', 'CHF', 'SGD', 'INR', 'MYR', 'JPY', 'KRW']

export { BASE_URL, CURRENCIES, SUPPORTED_CURRENCIES }