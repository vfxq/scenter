import * as React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import Section from '../';

describe('Section', () => {
  it('Wrapper "Section" renders correct', () => {
    const output = shallow(
      <Section />
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});