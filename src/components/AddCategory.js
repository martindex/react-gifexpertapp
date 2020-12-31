import React, { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("");
  const onChangeInputValue = (e) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setCategories((categories) => {
      if (inputValue.length === 0) {
        return categories;
      }
      let category = inputValue;
      setInputValue("");
      return [category, ...categories];
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type='text' value={inputValue} onChange={onChangeInputValue} />
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
