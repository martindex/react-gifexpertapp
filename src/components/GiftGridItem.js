import React from "react";

export const GiftGridItem = ({ item }) => {
  return (
    <div className='card animate__animated animate__bounce'>
      <img src={item.url} alt={item.title}></img>
      <p>{item.title}</p>
    </div>
  );
};
