import PropTypes from "prop-types";
import { Row } from "./Row";

export const Table = ({
  content,
  classes,
  data,
  setRecipeRawMaterial,
  setRecipeRawMaterialID,
  setRecipeRawMaterialQuantity,
  setRecipeRawMaterialUnit,
  setRecipeIsActive,
  setRecipeID,
  setRecipeIsInEditMode,
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
          {content == "products" ? (
            <tr className="table__row table__heading">
              <th className="table__cell table__cell--heading">ID</th>
              <th className="table__cell table__cell--heading">Name</th>
              <th className="table__cell table__cell--heading">Price</th>
              <th className="table__cell table__cell--heading">Image</th>
              <th className="table__cell table__cell--heading">Recipe ID</th>
              <th className="table__cell table__cell--heading">Actions</th>
            </tr>
          ) : (
            <></>
          )}
          {content == "recipes" ? (
            <tr className="table__row table__heading">
              <th className="table__cell table__cell--heading">ID</th>
              <th className="table__cell table__cell--heading">
                Raw material ID
              </th>
              <th className="table__cell table__cell--heading">Raw material</th>
              <th className="table__cell table__cell--heading">Quantity</th>
              <th className="table__cell table__cell--heading">Unit</th>
              <th className="table__cell table__cell--heading">Actions</th>
            </tr>
          ) : (
            <></>
          )}
        </thead>
        <tbody>
          {content == "products" ? (
            data?.map((d) => (
              <Row
                content="products"
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
            ))
          ) : (
            <></>
          )}
          {content == "recipes" ? (
            data?.map((d) => (
              <Row
                content="recipes"
                key={d.id}
                data={d}
                setRecipeRawMaterial={setRecipeRawMaterial}
                setRecipeRawMaterialID={setRecipeRawMaterialID}
                setRecipeRawMaterialQuantity={setRecipeRawMaterialQuantity}
                setRecipeRawMaterialUnit={setRecipeRawMaterialUnit}
                setRecipeIsActive={setRecipeIsActive}
                setRecipeID={setRecipeID}
                setRecipeIsInEditMode={setRecipeIsInEditMode}
              />
            ))
          ) : (
            <></>
          )}
        </tbody>
      </table>
    </div>
  );
};

Table.propTypes = {
  content: PropTypes.string,
  classes: PropTypes.string,
  data: PropTypes.array,
  setProductName: PropTypes.func,
  setProductPrice: PropTypes.func,
  setProductImage: PropTypes.func,
  setProductRecipeID: PropTypes.func,
  setProductIsActive: PropTypes.func,
  setProductID: PropTypes.func,
  setProductIsInEditMode: PropTypes.func,
  setRecipeRawMaterial: PropTypes.func,
  setRecipeRawMaterialID: PropTypes.func,
  setRecipeRawMaterialQuantity: PropTypes.func,
  setRecipeRawMaterialUnit: PropTypes.func,
  setRecipeIsActive: PropTypes.func,
  setRecipeID: PropTypes.func,
  setRecipeIsInEditMode: PropTypes.func,
};
