import PropTypes from "prop-types";
import { forwardRef } from "react";

export const Input = forwardRef(function Input(props, ref) {
  const {
    label,
    id,
    classes,
    value,
    setValue,
    isValidInput,
    validationMessage,
  } = props;
  return (
    <div className={classes}>
      <label className="input__label" htmlFor={id}>
        {label}
      </label>
      <input
        className="input__field"
        type="text"
        id={id}
        autoComplete="off"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        ref={ref}
      />
      {!isValidInput && <p className="input__message">{validationMessage}</p>}
    </div>
  );
});

Input.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  classes: PropTypes.string,
  value: PropTypes.string,
  setValue: PropTypes.func,
  ref: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.any }),
  ]),
  isValidInput: PropTypes.bool,
  validationMessage: PropTypes.string,
};
