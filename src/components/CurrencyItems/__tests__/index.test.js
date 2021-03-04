import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import CurrencyItems from '../CurrencyItems';

jest.mock('../../../utils/format', () => ({ thousand: jest.fn() }));

describe('src/components/CurrencyItems', () => {
  test('render', () => {
    const shallow = new ShallowRenderer();
    const props = {
      amount: 100,
      code: 'test',
      currencies: [{ code: 'test', rates: 100}],
      deleteCurrency: () => {}
    }
    const tree = shallow.render(<CurrencyItems {...props} />);
    tree[0].props.children[1].props.onClick();
    expect(tree).toMatchSnapshot();
  });
});
