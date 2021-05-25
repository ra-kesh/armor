import { useUserData } from "../hooks";
import { WishListPageCard } from "../component";

export const Wishlist = () => {
  const { wishList } = useUserData();

  function WishListbar() {
    return (
      <div className="container">
        <div className="text-left">
          <h4>You have {wishList.length} items in your wishlist..</h4>
        </div>
      </div>
    );
  }
  return (
    <>
      <WishListbar />
      <div className="container">
        <div className="flex-row wishlist-grid">
          {wishList.map((item) => (
            <div className=" flex-col-sm-6 flex-col-lg-4" key={item.id}>
              <WishListPageCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
