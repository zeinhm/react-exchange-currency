import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import AddCurrency from '../AddCurrency';

describe('src/components/AddCurrency', () => {
  test('render', () => {
    const shallow = new ShallowRenderer();
    const props = {
      currencies: ['test'],
      onSubmit: () => {},
      selectedCurrency: 'test',
      setSelectedCurrency: () => {}
    }
    const tree = shallow.render(<AddCurrency {...props} />);
    tree.props.onSubmit();
    tree.props.children[0].props.onChange({ target: { value: 'test' } });
    expect(tree).toMatchSnapshot();
  });
});
