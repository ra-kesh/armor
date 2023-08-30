import { useUserData } from "../../../hooks";
import { WishListPageCard } from "../WishListPageCard";
import { EmptyWishlitPage } from "../EmptyPageWishlist";
import withLayout from "../../../utils/withLayout";

const Wishlist = () => {
  const { wishList } = useUserData();

  if (wishList.length === 0) {
    return <EmptyWishlitPage />;
  }

  return (
    <div className="container">
      <div className="flex-row wishlist-grid">
        {wishList.map((item) => (
          <div className=" flex-col-sm-6 flex-col-lg-4" key={item._id}>
            <WishListPageCard item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default withLayout(Wishlist);
