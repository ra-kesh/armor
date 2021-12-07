import style from "./EmptyPageWishlist.module.css";

export const EmptyWishlitPage = () => {
  return (
    <div style={{ height: "70vh" }} className="center-vertically">
      <div className={style.empty_page_wishlist}>
        <div className="center-vertically">
          <img src="\icons\list.svg" alt="" />
        </div>
        <label className="center-vertically">your wishlist is empty</label>
      </div>
    </div>
  );
};
