import PropTypes from "prop-types";

import { useContext } from "react";

import { ClientStateContext } from "../../ClientStateContext";

import { Button } from "../shared/Button";

export const Row = ({
  data,
  setProductName,
  setProductPrice,
  setProductImage,
  setProductRecipeID,
  setProductIsActive,
  setProductID,
  setProductIsInEditMode,
}) => {
  const { id, name, price, image, recipe_id, active } = data;

  const { setGlobalClientState } = useContext(ClientStateContext);

  return (
    <>
      {active ? (
        <tr className="table__row">
          <td className="table__cell">{id}</td>
          <td className="table__cell">{name}</td>
          <td className="table__cell">{price}</td>
          <td className="table__cell">
            <img
              src={`../../../src/assets/icons/products/${image}.png`}
              alt={image}
              className="table__icon"
            />
          </td>
          <td className="table__cell">{recipe_id}</td>
          <td className="table__cell">
            <Button
              action={() => {
                setProductIsInEditMode(true);
                setProductID(id);
                setProductName(name);
                setProductPrice(price);
                setProductImage(image);
                setProductRecipeID(recipe_id);
                setProductIsActive(active);
              }}
              classes="button__edit"
              content={
                <img
                  src="../../../src/assets/icons/crud/edit.png"
                  className="table__icon"
                  alt="edit"
                />
              }
            />
            <Button
              classes="button__delete"
              action={() => {
                setGlobalClientState((prevState) => ({
                  ...prevState,
                  isModalActive: true,
                  currentModalAction: "deleteProduct",
                  deleteItem: {
                    name: name,
                    price: price,
                    image: image,
                    recipe_id: recipe_id,
                    active: false,
                    id: id,
                  },
                }));
              }}
              content={
                <img
                  src="../../../src/assets/icons/crud/delete.png"
                  className="table__icon"
                  alt="delete"
                />
              }
            />
          </td>
        </tr>
      ) : null}
    </>
  );
};

Row.propTypes = {
  data: PropTypes.object,
  setProductName: PropTypes.func,
  setProductPrice: PropTypes.func,
  setProductImage: PropTypes.func,
  setProductRecipeID: PropTypes.func,
  setProductIsActive: PropTypes.func,
  setProductID: PropTypes.func,
  setProductIsInEditMode: PropTypes.func,
};
