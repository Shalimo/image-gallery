import React, { useEffect, useState } from "react";
import { useGetImages } from "../../../hooks/useGetImages";

const Home = () => {
  const { concatImages, getImages, category, setCategory, onKeyDownHandler } =
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
        {concatImages?.map((item) => (
          <img key={item.id} src={item.src.medium} />
        ))}
      </div>
      <button onClick={getImages}>More</button>
    </div>
  );
};

export default Home;
