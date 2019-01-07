import * as React from 'react';
import { shallow } from 'enzyme';
import App from '../';

it("renders the heading", () => {
  const result = shallow(<App />).contains(<div className='App'>Test</div>);
  expect(result).toBeTruthy();
});