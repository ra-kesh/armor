import style from "./EmptyPageCart.module.css";

export const EmptyCartpage = () => {
  return (
    <div style={{ height: "70vh" }} className="center-vertically">
      <div className={style.empty_page_cart}>
        <div className="center-vertically">
          <img src="\icons\shopping-bag.svg" alt="" />
        </div>
        <label className="center-vertically">your cart is empty</label>
      </div>
    </div>
  );
};
