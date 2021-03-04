import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AppContext = React.createContext(null);

export default function AppContextProvider({ children }) {
  const [amount, setAmount] = useState(1.00);
  const [currencies, setCurrencies] = useState([]);
  const [currencyRates, setCurrencyRates] = useState({})
  const appValue = {
    amount,
    currencies,
    currencyRates,
    setAmount,
    setCurrencies,
    setCurrencyRates
  };

  return (
    <AppContext.Provider value={appValue}>
      {children}
    </AppContext.Provider>
  );
}

AppContextProvider.defaultProps = {
  children: null,
};

AppContextProvider.propTypes = {
  children: PropTypes.node,
};
