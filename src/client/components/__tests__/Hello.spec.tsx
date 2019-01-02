import * as React from 'react';
import { shallow } from 'enzyme';
import Hello from '../Hello';

it("renders the heading", () => {
  const result = shallow(<Hello framework="React"/>).contains(<h1>Hello React</h1>);
  expect(result).toBeTruthy();
});