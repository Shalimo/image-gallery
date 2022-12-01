import { useState } from "react";
const auth = "563492ad6f9170000100000170505e6caef24d0d8539f5c95c26d05b";
const initURL = "https://api.pexels.com/v1/search?query=dog";

export const useGetImages = () => {
  const [category, setCategory] = useState("dog");
  const [images, setImages] = useState([]);

  const getImages = async () => {
    await fetch(`https://api.pexels.com/v1/search?query=${category}`, {
      headers: {
        Authorization: auth,
      },
    })
      .then((data) => {
        return data.json();
      })
      .then((result) => {
        setImages(result);
      });
  };

  const onKeyDownHandler = (e) => {
    if (e.keyCode === 13) {
      getImages();
    }
  };

  return { images, getImages, category, setCategory, onKeyDownHandler };
};
