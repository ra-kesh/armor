import { useUserData, useAuth } from "../../../hooks";
import { Navbar } from "../../../component";
import { apiUrl } from "../../../constants";
import axios from "axios";
import { useState, useEffect } from "react";
import { WishListPageCard } from "../WishListPageCard";
import { EmptyWishlitPage } from "../EmptyPageWishlist";

const Wishlist = () => {
  const { wishList } = useUserData();
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
  }, [userInfo, wishList]);

  return (
    <>
      <Navbar />
      <>
        {" "}
        {wishList.length >= 1 ? (
          <div className="container">
            <div className="flex-row wishlist-grid">
              {wishListItems.map((item) => (
                <div className=" flex-col-sm-6 flex-col-lg-4" key={item._id}>
                  <WishListPageCard item={item} />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <EmptyWishlitPage />
        )}
      </>
    </>
  );
};

export default Wishlist;
