import PropTypes from "prop-types";

export const Button = ({ label, classes, action }) => {
  return (
    <button className={classes} onClick={action}>
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string,
  classes: PropTypes.string,
  action: PropTypes.func,
};
