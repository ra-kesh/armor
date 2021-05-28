import { useUserData, useAuth } from "../hooks";
import { Navbar, WishListPageCard } from "../component";
import { apiUrl } from "../constants";
import axios from "axios";
import { useState, useEffect } from "react";

export const Wishlist = () => {
  const { wishList, cartList } = useUserData();
  const [wishListItems, setwishListItems] = useState([]);
  const { userInfo } = useAuth();

  useEffect(() => {
    if (userInfo) {
      (async () => {
        const {
          data: { data: wishList },
        } = await axios.get(`${apiUrl}/wishlist/${userInfo._id}`);
        setwishListItems(wishList?.wishListItems || []);
      })();
    }
  }, [userInfo, wishList, cartList]);

  console.log(wishListItems);

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
      <Navbar />
      <WishListbar />
      <div className="container">
        <div className="flex-row wishlist-grid">
          {wishListItems.map((item) => (
            <div className=" flex-col-sm-6 flex-col-lg-4" key={item._id}>
              <WishListPageCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
