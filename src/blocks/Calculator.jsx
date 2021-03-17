// import react
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// import elements
import Select from '../elements/Select';

// import utilities
import { digits, multiplier } from '../utils/options-select';

// initial data for selects
const INITIAL_DATA = {
  firstDigit: "",
  secondDigit: "",
  multiplier: "",
}

const Calculator = ({ calculateResults, clearResults, loading = false }) => {
  const [data, setData] = useState(INITIAL_DATA)

  const handleChange = (event, result) => {
    const { name, value } = result || event.target;
    setData({
      ...data,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateResults(data);
  }

  const handleClear = (e) => {
    e.preventDefault();
    clearResults()
    setData(INITIAL_DATA)
  }

  return (
    <div className="content">
      <h3>Calculator</h3>

      <div className="form">
        <form>

          <Select name="firstDigit" label="1st Digit" options={digits} value={data.firstDigit} onChange={handleChange} placeholder="Select an option" />

          <Select name="secondDigit" label="2nd Digit" options={digits} value={data.secondDigit} onChange={handleChange} placeholder="Select an option" />

          <Select name="multiplier" label="Multiplier" options={multiplier} value={data.multiplier} onChange={handleChange} placeholder="Select an option" />

          <div className="field is-grouped">
            <div className="control">
              <button className={`${loading ? "is-loading" : ""} button is-link button-calculate`} onClick={handleSubmit} >Calculate</button>
            </div>
            <div className="control">
              <button className={`${loading ? "is-loading" : ""} button is-link is-light`} onClick={handleClear} >Clear</button>
            </div>
          </div>

        </form>
      </div>
    </div>
    
  );
}

Calculator.propTypes = {
  calculateResults: PropTypes.func.isRequired,
  clearResults: PropTypes.func.isRequired,
  loading: PropTypes.bool
}

export default Calculator;