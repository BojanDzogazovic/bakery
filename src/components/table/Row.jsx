import PropTypes from "prop-types";

export const Row = (data) => {
  console.log(data);
  return <div className="table__row"></div>;
};

Row.propTypes = {
  data: PropTypes.object,
};
