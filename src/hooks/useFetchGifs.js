import React, { useState, useEffect } from "react";
import { getGiftSearch } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });
  useEffect(() => {
    getGiftSearch(category).then((images) =>
      setTimeout(() => {
        setState({
          data: images,
          loading: false,
        });
      })
    );
  }, []);

  return state;
};
