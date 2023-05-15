import PropTypes from "prop-types";

import { useContext } from "react";

import { ClientStateContext } from "../../ClientStateContext";

import { Button } from "../shared/Button";

export const Row = ({
  content,
  data,
  setProductName,
  setProductPrice,
  setProductImage,
  setProductRecipeID,
  setProductIsActive,
  setProductID,
  setProductIsInEditMode,
  setRecipeRawMaterial,
  setRecipeRawMaterialID,
  setRecipeRawMaterialQuantity,
  setRecipeRawMaterialUnit,
  setRecipeIsActive,
  setRecipeID,
  setRecipeIsInEditMode,
}) => {
  const { setGlobalClientState } = useContext(ClientStateContext);

  return (
    <>
      {content == "products" ? (
        data.active ? (
          <tr className="table__row">
            <td className="table__cell">{data.id}</td>
            <td className="table__cell">{data.name}</td>
            <td className="table__cell">{data.price}</td>
            <td className="table__cell">
              <img
                src={`../../../src/assets/icons/products/${data.image}.png`}
                alt={data.image}
                className="table__icon"
              />
            </td>
            <td className="table__cell">{data.recipe_id}</td>
            <td className="table__cell">
              <Button
                action={() => {
                  setProductIsInEditMode(true);
                  setProductID(data.id);
                  setProductName(data.name);
                  setProductPrice(data.price);
                  setProductImage(data.image);
                  setProductRecipeID(data.recipe_id);
                  setProductIsActive(data.active);
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
                    deleteProductItem: {
                      name: data.name,
                      price: data.price,
                      image: data.image,
                      recipe_id: data.recipe_id,
                      active: false,
                      id: data.id,
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
        ) : (
          <></>
        )
      ) : (
        <></>
      )}
      {content == "recipes" ? (
        data.active ? (
          <tr className="table__row">
            <td className="table__cell">{data.id}</td>
            <td className="table__cell">{data.raw_material_id}</td>
            <td className="table__cell">{data.raw_material}</td>
            <td className="table__cell">{data.quantity}</td>
            <td className="table__cell">{data.unit}</td>
            <td className="table__cell">
              <Button
                action={() => {
                  setRecipeRawMaterial(data.raw_material),
                    setRecipeRawMaterialID(data.raw_material_id),
                    setRecipeRawMaterialQuantity(data.quantity),
                    setRecipeRawMaterialUnit(data.unit),
                    setRecipeIsActive(data.active),
                    setRecipeID(data.id),
                    setRecipeIsInEditMode(true);
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
                    currentModalAction: "deleteRecipe",
                    deleteRecipeItem: {
                      raw_material_id: data.raw_material_id,
                      raw_material: data.raw_material,
                      quantity: data.quantity,
                      unit: data.unit,
                      active: false,
                      id: data.id,
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
        ) : (
          <></>
        )
      ) : (
        <></>
      )}
    </>
  );
};

Row.propTypes = {
  content: PropTypes.string,
  data: PropTypes.object,
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
