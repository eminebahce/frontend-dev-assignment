import React from 'react';
import {shallow} from 'enzyme';
import checkPropTypes from 'check-prop-types';
import Suggestions from '../Components/Suggestions';
import renderer from 'react-test-renderer';

describe('<Suggestions /> component', () => {
   it('should render without error', () => {
       const component = shallow(<Suggestions />);
       expect(component.find(`[data-test='suggestions']`)).toBeTruthy();
   }) ;

   describe('renders sugestions list', () => {
      it('should render without error', () => {
          const component = renderer.create(
              <Suggestions />
          );
          let tree = component.toJSON();
          expect(tree).toMatchSnapshot();
      });
   });
});