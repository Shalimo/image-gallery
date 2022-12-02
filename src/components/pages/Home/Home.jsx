import React, { useEffect } from "react";
import { useGetImages } from "../../../hooks/useGetImages";
import Header from "../../ui/Header/Header";
import style from "./Home.module.scss";

const Home = () => {
  const {
    concatImages,
    getImages,
    category,
    setCategory,
    onKeyDownHandler,
    nextPage,
  } = useGetImages();

  useEffect(() => {
    getImages();
  }, []);

  return (
    <div>
      <Header />
      <div className={style.container}>
        <input
          onKeyDown={onKeyDownHandler}
          placeholder="Search"
          onChange={(e) => setCategory(e.target.value)}
          value={category}
        />
        <div className={style.imgContainer}>
          {concatImages?.map((item) => (
            <div className={style.image} key={item.id}>
              <img src={item.src.large} />
            </div>
          ))}
        </div>
        <button onClick={nextPage}>More</button>
      </div>
    </div>
  );
};

export default Home;
