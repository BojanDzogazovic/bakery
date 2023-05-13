import PropTypes from "prop-types";

import { Button } from "../shared/Button";

export const Row = ({ data }) => {
  const { id, name, price, image, recipe_id, active } = data;

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
};
