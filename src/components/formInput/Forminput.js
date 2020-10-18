import React from "react";
import "./Forminput.scss";
const Forminput = ({ handleChange, label, ...otherProps }) => (
  <div className="group">
    <input className="form-input" onChange={handleChange} {...otherProps} />
    {label ? (
      <label className={`${otherProps.value.length ? "shrink" : ""}`}>
        {label}
      </label>
    ) : null}
    {console.log(handleChange)}
  </div>
);

export default Forminput;
