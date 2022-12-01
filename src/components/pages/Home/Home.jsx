import React, { useEffect, useState } from "react";
import { useGetImages } from "../../../hooks/useGetImages";

const Home = () => {
  const { images, getImages, category, setCategory, onKeyDownHandler } =
    useGetImages();

  useEffect(() => {
    getImages();
  }, []);

  return (
    <div>
      <input
        onKeyDown={onKeyDownHandler}
        placeholder="Search"
        onChange={(e) => setCategory(e.target.value)}
        value={category}
      />
      <div>
        {images?.photos?.map((item) => (
          <img key={item.id} src={item.src.medium} />
        ))}
      </div>
    </div>
  );
};

export default Home;
