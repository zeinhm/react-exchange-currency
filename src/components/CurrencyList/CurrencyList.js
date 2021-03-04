import React from 'react'
import AddCurrency from '../AddCurrency/AddCurrency'
import CurrencyItems from '../CurrencyItems'
import './styles.css'

export default function CurrencyList(props) {

  const { 
    addCurrency,
    amount,
    currencies,
    deleteCurrency,
    onChange,
    selectedCurrency,
    setSelectedCurrency,
  } = props
  
  return (
    <main className='currency-list'>
      <section>
        <header>
          <p>USD - United States Dollars</p>
          <div>
            <p>USD</p>
            <input value={amount} onChange={e => onChange(e.target.value)} type="number"/>
          </div>
        </header>
        <CurrencyItems
          amount={amount}
          currencies={currencies}
          deleteCurrency={deleteCurrency}
        />
        <AddCurrency
          onSubmit={addCurrency}
          selectedCurrency={selectedCurrency}
          setSelectedCurrency={setSelectedCurrency}
        />
      </section>
    </main>
  )
}
