import React from 'react';
import ReactDOM from 'react-dom';
import { mount , shallow } from 'enzyme';
import {expect} from 'chai';
import { render } from '@testing-library/react';
import App from '../App.js';

import {test} from "pretty-format";
// test('renders learn react link', () => {
//     const { getByText } = render(<App />);
//     const linkElement = getByText(/learn react/i);
//     expect(linkElement).toBeInTheDocument();
// });

// Create TEST SUITE
describe("Testing of the APP Component", function(){
          // Create TEST CASE
          it("Ensure there is only 1 element with .App CSS", function(){
              const App = shallow(<App/>);
              expect(App.find(".App")).length(1);
          })
        }
      )