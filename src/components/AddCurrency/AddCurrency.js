import React from 'react'
import { SUPPORTED_CURRENCIES } from '../../lib/constants'
import './styles.css'

export default function AddCurrency(props) {
  const { onSubmit, selectedCurrency, setSelectedCurrency } = props
  return (
    <form className='add-currency' onSubmit={onSubmit}>
      <select
        value={selectedCurrency}
        onChange={e => setSelectedCurrency(e.target.value)}
      >
        <option value="" disabled defaultValue>(+) Add More Currencies</option>
        {SUPPORTED_CURRENCIES.map(option => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
      {selectedCurrency && <input type="submit"/>}
    </form>
  )
}
