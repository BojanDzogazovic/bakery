import PropTypes from "prop-types";
import { Row } from "./Row";

export const Table = ({
  classes,
  data,
  setProductName,
  setProductPrice,
  setProductImage,
  setProductRecipeID,
  setProductIsActive,
  setProductID,
  setProductIsInEditMode,
}) => {
  return (
    <div style={{ overflowX: "auto" }}>
      <div className="table__hint">
        scrollable
        <img
          className="table__hint-icon"
          src="../../../src/assets/icons/arrows.png"
          alt="arrows"
        />
      </div>
      <table className={classes}>
        <thead>
          <tr className="table__row table__heading">
            <th className="table__cell table__cell--heading">ID</th>
            <th className="table__cell table__cell--heading">Name</th>
            <th className="table__cell table__cell--heading">Price</th>
            <th className="table__cell table__cell--heading">Image</th>
            <th className="table__cell table__cell--heading">Recipe ID</th>
            <th className="table__cell table__cell--heading">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((d) => (
            <Row
              key={d.id}
              data={d}
              setProductName={setProductName}
              setProductPrice={setProductPrice}
              setProductImage={setProductImage}
              setProductRecipeID={setProductRecipeID}
              setProductIsActive={setProductIsActive}
              setProductID={setProductID}
              setProductIsInEditMode={setProductIsInEditMode}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

Table.propTypes = {
  classes: PropTypes.string,
  data: PropTypes.array,
  setProductName: PropTypes.func,
  setProductPrice: PropTypes.func,
  setProductImage: PropTypes.func,
  setProductRecipeID: PropTypes.func,
  setProductIsActive: PropTypes.func,
  setProductID: PropTypes.func,
  setProductIsInEditMode: PropTypes.func,
};
