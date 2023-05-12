import PropTypes from "prop-types";
import { forwardRef } from "react";

export const Input = forwardRef(function Input(props, ref) {
  const { label, id, value, setValue, isValidInput, validationMessage } = props;
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        type="text"
        id={id}
        autoComplete="off"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        ref={ref}
      />
      {!isValidInput && value && <p>{validationMessage}</p>}
    </>
  );
});

Input.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.string,
  setValue: PropTypes.func,
  ref: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.any }),
  ]),
  isValidInput: PropTypes.bool,
  validationMessage: PropTypes.string,
};
