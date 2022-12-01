import { useState } from "react";
const auth = "563492ad6f91700001000001d47e50555c46469eb1cf693bfd97be76";
const initURL = "https://api.pexels.com/v1/search?query=dog";

export const useGetImages = () => {
  const [category, setCategory] = useState("dog");
  const [images, setImages] = useState([]);
  const [concatImages, setConcatImages] = useState([]);

  const getImages = async () => {
    await fetch(
      images?.next_page
        ? images?.next_page
        : `https://api.pexels.com/v1/search?query=${category}`,
      {
        headers: {
          Authorization: auth,
        },
      }
    )
      .then((data) => {
        return data.json();
      })
      .then((result) => {
        setImages(result);
        setConcatImages([...concatImages, ...result.photos]);
      });
  };

  const onKeyDownHandler = (e) => {
    if (e.keyCode === 13) {
      getImages();
    }
  };

  return { concatImages, getImages, category, setCategory, onKeyDownHandler };
};
