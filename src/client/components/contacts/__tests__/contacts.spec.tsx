import * as React from 'react';
import { shallow } from 'enzyme';
import Contacts from '../';

test('CheckboxWithLabel changes the text after click', () => {
  const contacts = shallow(<Contacts  />);

  // Interaction demo
  // expect(checkbox.text()).toEqual('Off');
  // checkbox.find('input').simulate('change');
  // expect(checkbox.text()).toEqual('On');

  // Snapshot demo
  expect(contacts).toMatchSnapshot();
});