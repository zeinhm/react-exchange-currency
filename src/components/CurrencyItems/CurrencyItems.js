import React from 'react'
import { thousand } from '../../utils/format'
import './styles.css'

export default function CurrencyItems(props) {
  return (
    props.currencies.map((i, key) => (
      <div className='currency-item' key={key}>
        <div>
          <header>
            <p>{i.code}</p>
            <p>{thousand((i.rates * props.amount).toFixed(2))}</p>
          </header>
          <p>{i.name}</p>
          <p>1 USD = {i.code} {i.rates.toFixed(2)}</p>
        </div>
        <button onClick={()=> props.deleteCurrency(i.code)}>
          (-)
        </button>
      </div>
    ))
  )
}
