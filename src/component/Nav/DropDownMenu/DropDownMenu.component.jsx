import React from "react";
import { useNavigate } from "react-router-dom";
import style from "./DropDown.module.css";

const DropDownMenu = () => {
  const navigate = useNavigate();
  return (
    <div className={style.drop_down_container}>
      <div className={style.drop_down}>
        <div className={style.drop_down_item} onClick={() => navigate("/")}>
          Home
        </div>
        <div
          className={style.drop_down_item}
          onClick={() => navigate("/products")}
        >
          Products
        </div>
        <div className={style.drop_down_item} onClick={() => navigate("/user")}>
          User
        </div>
      </div>
    </div>
  );
};

export default DropDownMenu;
