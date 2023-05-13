import PropTypes from "prop-types";

export const Button = ({ content, classes, action }) => {
  return (
    <button className={classes} onClick={action}>
      {content}
    </button>
  );
};

Button.propTypes = {
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({ current: PropTypes.any }),
  ]),
  classes: PropTypes.string,
  action: PropTypes.func,
};
