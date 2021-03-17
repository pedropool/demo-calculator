// import react
import React from 'react';
import PropTypes from 'prop-types';

const Select = ({name = "", label = "", options, value, onChange, placeholder = false}) => {
  return (
    <div className="field">
      <label className="label">{ label }</label>
      <div className="control">
        <div className="select">
          <select name={name} value={value} onChange={onChange}>
            {
              placeholder && (
                <option key={placeholder} >{placeholder}</option>
              )
            }
            {
              options.map(o => (
                <option key={o.key} value={o.value} >{o.text}</option>
              ))
            }
          </select>
        </div>
      </div>
    </div>
  );
};

Select.propTypes = {
  label: PropTypes.string,
  options: PropTypes.array.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string
}

export default Select;