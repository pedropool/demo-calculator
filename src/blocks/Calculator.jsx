import React, { useState } from 'react';
import { digits, multiplier, tolerance } from '../utils/options-select';
import Select from '../elements/Select';
import PropTypes from 'prop-types';

const INITIAL_DATA = {
  fisrtDigit: "black",
  secondDigit: "black",
  multiplier: "pink",
  tolerance: "silver"
}

const Calculator = ({ calculateResults, clearResults, loading }) => {
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

          <Select name="fisrtDigit" label="1st Digit" options={digits} value={data.fisrtDigit} onChange={handleChange} />

          <Select name="secondDigit" label="2nd Digit" options={digits} value={data.secondDigit} onChange={handleChange} />

          <Select name="multiplier" label="Multiplier" options={multiplier} value={data.multiplier} onChange={handleChange} />

          <Select name="tolerance" label="Tolerance" options={tolerance} value={data.tolerance} onChange={handleChange} />

          <div className="field is-grouped">
            <div className="control">
              <button className={`${loading ? "is-loading" : ""} button is-link`} onClick={handleSubmit} >Calculate</button>
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