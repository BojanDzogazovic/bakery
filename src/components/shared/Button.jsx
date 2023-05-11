import PropTypes from "prop-types";

export const Button = ({ label, action }) => {
  return <button onClick={action}>{label}</button>;
};

Button.propTypes = {
  label: PropTypes.string,
  action: PropTypes.func,
};
