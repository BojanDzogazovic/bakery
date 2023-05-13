import PropTypes from "prop-types";
import { Input } from "../form/Input";
import { Button } from "../shared/Button";

export const AddProduct = ({ nextID }) => {
  return (
    <div className="table__add-item table__add-item--products">
      <p className="table__title">Add new product:</p>
      <div className="table__wrapper">
        <Input readonly value={nextID} classes="table__add-input" />
        <Input placeholder="Name..." classes="table__add-input" />
        <Input placeholder="Price..." classes="table__add-input" />
        <Input placeholder="Image URL..." classes="table__add-input" />
        <Input placeholder="Recipe ID..." classes="table__add-input" />
        <Input
          placeholder="Active: true or false..."
          classes="table__add-input"
        />
        <Button
          classes="button__add"
          content={
            <img
              src="../../../src/assets/icons/crud/add.png"
              className="table__icon"
              alt="add"
            />
          }
        />
      </div>
    </div>
  );
};

Input.propTypes = {
  nextID: PropTypes.number,
};
