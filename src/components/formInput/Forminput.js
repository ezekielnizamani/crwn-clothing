import React from "react";
import "./Forminput.scss";
const Forminput = ({ handleChange, label, ...otherProps }) => (
  <div className="group">
    {label ? (
      <label
        className={`${
          otherProps.value.length ? "shrink" : ""
        } form-input-label`}
      >
        {label}
      </label>
    ) : null}
    <input className="form-input" onChange={handleChange} {...otherProps} />
  </div>
);

export default Forminput;
