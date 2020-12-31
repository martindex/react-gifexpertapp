import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGridWithCustomHooks } from "./components/GifGridWithCustomHooks";

export const GiftExpertApp = () => {
  const [categories, setCategories] = useState(["DragonBall"]);

  return (
    <div>
      <h2>GiftExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <ol>
        {categories.map((category) => {
          return <GifGridWithCustomHooks key={category} category={category} />;
        })}
      </ol>
    </div>
  );
};
