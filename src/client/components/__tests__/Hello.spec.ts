import * as React from 'react';
import { shallow } from 'enzyme';
import Hello from '../Hello';

it("2 + 2 = 4 in TypeScript", () => {
  const a:number = 2;
  const b:number = 2;

  expect(a + b).toBe(4);
});