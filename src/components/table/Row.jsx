import PropTypes from "prop-types";

import { useContext } from "react";

import { ClientStateContext } from "../../ClientStateContext";

import { Button } from "../shared/Button";

export const Row = ({
  data,
  setName,
  setPrice,
  setImage,
  setRecipeID,
  setActive,
  setID,
  setEditMode,
}) => {
  const { id, name, price, image, recipe_id, active } = data;

  const { setGlobalClientState } = useContext(ClientStateContext);

  return (
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
      <td className="table__cell">{String(active)}</td>
      <td className="table__cell">
        <Button
          action={() => {
            setEditMode(true);
            setID(id);
            setName(name);
            setPrice(price);
            setImage(image);
            setRecipeID(recipe_id);
            setActive(active);
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
              deleteItemID: id,
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
  );
};

Row.propTypes = {
  data: PropTypes.object,
  setName: PropTypes.func,
  setPrice: PropTypes.func,
  setImage: PropTypes.func,
  setRecipeID: PropTypes.func,
  setActive: PropTypes.func,
  setID: PropTypes.func,
  setEditMode: PropTypes.func,
};
