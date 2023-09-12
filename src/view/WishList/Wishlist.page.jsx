import { useUserData } from "../../hooks";
import { WishListPageCard } from "./WishListPageCard";
import { EmptyWishlitPage } from "./EmptyPageWishlist";
import withLayout from "../../utils/withLayout";
import Pagination from "../../component/Pagination/Pagination.component";
import useLinkState from "../../hooks/useLinkState";

const Wishlist = () => {
  const { wishList, totalWishlistPages, pagiNatedWishlist } = useUserData();

  const { page, updateQueryParam } = useLinkState();

  if (wishList.length === 0) {
    return <EmptyWishlitPage />;
  }

  return (
    <div className="container">
      <div className="flex-row wishlist-grid">
        {pagiNatedWishlist.map((item) => (
          <div className=" flex-col-sm-6 flex-col-lg-4" key={item._id}>
            <WishListPageCard item={item} />
          </div>
        ))}
      </div>

      <Pagination
        page={page}
        totalPages={totalWishlistPages}
        updateQueryParam={updateQueryParam}
      />
    </div>
  );
};

export default withLayout(Wishlist);
