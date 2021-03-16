import React from 'react';
import Enzyme, { shallow } from 'enzyme';
// import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Adapter from 'enzyme-adapter-react-16';

import App from './App'
import Results from './blocks/Results';
import Calculator from './blocks/Calculator';

Enzyme.configure({ adapter: new Adapter() })

describe('Results card', () => {
  it('should render titles when results object is empty', () => {
    const INITIAL_DATA = {
      resistance: "",
      tolerance: "",
      min: "",
      max: ""
    };
    const wrapper = shallow(<Results results={INITIAL_DATA} />);
    const resultsDiv = wrapper.find('.results-section');
    expect(resultsDiv).toHaveLength(1);
    expect(resultsDiv.text()).toEqual("ResultsResistance: Tolerance: Minimum: Maximum: ")
  })

  it('should results data when results object has data', () => {
    const INITIAL_DATA = {
      resistance: "0.011 ohms",
      tolerance: "10%",
      min: "0.009899999999999999 ohms",
      max: "0.0121 ohms"
    };
    const wrapper = shallow(<Results results={INITIAL_DATA} />);
    const resultsDiv = wrapper.find('.results-section');
    expect(resultsDiv).toHaveLength(1);
    expect(resultsDiv.text()).toEqual("ResultsResistance: 0.011 ohmsTolerance: 10%Minimum: 0.009899999999999999 ohmsMaximum: 0.0121 ohms")
  })
})

describe('App component', () => {
  it('Results Card should render only title on fisrt render', () => {
    const wrapper = shallow(<App />);
    const results = wrapper.find(Results)
    expect(results).toHaveLength(1);
    expect(results.props()).toEqual({"results": {"max": "", "min": "", "resistance": "", "tolerance": ""}})
  })


// NOT WORKING. NEED TO FIND HOW TO EXECUTE FUNCTIONS OR SIMULATE CLICK ON CHLIDREN COMPONENT
  it('Results Card should render results when calculate button is clicked', () => {
    const wrapper = shallow(<App />);
    // wrapper.instance().calculateResults();
    const results = wrapper.find(Results)
    expect(results).toHaveLength(1);
    expect(results.props()).toEqual({"results": {"max": "", "min": "", "resistance": "", "tolerance": ""}})
  })

  
})