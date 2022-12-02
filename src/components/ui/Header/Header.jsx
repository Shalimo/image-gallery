import React from "react";
import { useGetImages } from "../../../hooks/useGetImages";
import style from "./Header.module.scss";

const Header = () => {
  const { category, setCategory, onKeyDownHandler } = useGetImages();

  return (
    <div className={style.container}>
      <h1>Image gallery</h1>
      <input
        onKeyDown={onKeyDownHandler}
        placeholder="Search"
        onChange={(e) => setCategory(e.target.value)}
        value={category}
      />
    </div>
  );
};

export default Header;
