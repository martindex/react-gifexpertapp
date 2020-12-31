import React from "react";
import { GiftGridItem } from "./GiftGridItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGridWithCustomHooks = ({ category }) => {
  const state = useFetchGifs(category);
  console.log(state);
  return (
    <>
      <h3>{category}</h3>
      {state.loading && <p>Cargando ...</p>}
      <div className='card-grid'>
        {state.data.map((item) => (
          <GiftGridItem key={item.id} item={item} />
        ))}
      </div>
    </>
  );
};
