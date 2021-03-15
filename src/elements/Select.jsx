import React from 'react';
import PropTypes from 'prop-types';

const Select = ({name, label, options, value, onChange}) => {
  return (
    <div className="field">
      <label className="label">{ label }</label>
      <div className="control">
        <div className="select">
          <select name={name} value={value} onChange={onChange}>
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
  label: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  value: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func
}

export default Select;