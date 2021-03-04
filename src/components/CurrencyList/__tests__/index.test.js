import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import CurrencyList from '../CurrencyList';

jest.mock('../../../contexts', () => ({
  AppContext: {
    amount: 0,
    currencies: [],
    currencyRates: {},
    setAmount: jest.fn(),
    setCurrencies: jest.fn(),
    setCurrencyRates: jest.fn()
  },
}));

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useContext: v => v,
  useEffect: cb => cb(),
  useState: v => [v === 'tes' ? v : !v, jest.fn()],
}));

describe('src/components/CurrencyList', () => {
  test('render', () => {
    const shallow = new ShallowRenderer();
    const props = {
      amount: 100,
      code: 'test',
      currencies: [{ code: 'test', rates: 100}],
      deleteCurrency: () => {},
      onChange: () => {}
    }
    const tree = shallow.render(<CurrencyList {...props} />);
    tree.props.children.props.children[0].props.children[1].props.children[1]
      .props.onChange({ target: { value: 'test' } })
    expect(tree).toMatchSnapshot();
  });
});
