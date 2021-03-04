import React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow';
import App from './App';

describe('src/App', () => {
  test('render', () => {
    const shallow = new ShallowRenderer();
    const tree = shallow.render(<App />);
    expect(tree).toMatchSnapshot();
  });
});
