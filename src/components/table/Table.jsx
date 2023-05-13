import PropTypes from "prop-types";
import { Row } from "./Row";

export const Table = ({ classes, data }) => {
  return (
    <div className={classes}>
      {data?.map((d) => (
        <Row key={d.id} data={d} />
      ))}
    </div>
  );
};

Table.propTypes = {
  classes: PropTypes.string,
  data: PropTypes.array,
};
