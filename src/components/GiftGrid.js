import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { GiftGridItem } from "./GiftGridItem";
import { getGiftSearch } from "../helpers/getGifs";

export const GiftGrid = ({ category }) => {
  useEffect(() => {
    getGiftSearch(category).then(setImages);
  }, [category]);
  const [images, setImages] = useState([]);

  return (
    <>
      <h3>{category}</h3>
      <div className='card-grid'>
        {images.map((item) => (
          <GiftGridItem key={item.id} item={item} />
        ))}
      </div>
    </>
  );
};

GiftGrid.propTypes = {
  category: PropTypes.string,
};
