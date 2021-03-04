import React, { useContext, useEffect, useState } from 'react'
import CurrencyList from '../../components/CurrencyList'
import { CURRENCIES, SUPPORTED_CURRENCIES } from '../../lib/constants'
import { fetchCurrencyFromUSD } from '../../utils/fetch'
import { AppContext } from '../../contexts'

export default function Home() {
  const { 
    amount,
    currencies,
    currencyRates,
    setAmount,
    setCurrencies,
    setCurrencyRates
  } = useContext(AppContext)
  const [selectedCurrency, setSelectedCurrency] = useState('')


  const fetchCurrencyRates = (currencyCodes) => {
    fetchCurrencyFromUSD(currencyCodes)
      .then((data) => {
        setCurrencyRates(data.rates)
      })
      .catch(err => err.message);
  }
  
  useEffect(() => {
    fetchCurrencyRates(SUPPORTED_CURRENCIES)
  }, [])


  const addCurrency = e => {
    e.preventDefault()
    const newCurrency = {
      code: selectedCurrency,
      name: CURRENCIES[selectedCurrency],
      rates: currencyRates[selectedCurrency]
    }
    if(currencies.findIndex(i => i.code === newCurrency.code) === -1) {
      setCurrencies([ ...currencies, newCurrency])
    }
  }

  const onChange = value => {
    setAmount(value)
  }

  const deleteCurrency = currency => {
    setCurrencies(currencies.filter(i => i.code !== currency))
  }

  return (
    <main className='home-page'>
      <CurrencyList
        addCurrency={addCurrency}
        amount={amount}
        currencies={currencies}
        deleteCurrency={deleteCurrency}
        onChange={onChange}
        selectedCurrency={selectedCurrency}
        setSelectedCurrency={setSelectedCurrency}
       />
    </main>
  )
}
