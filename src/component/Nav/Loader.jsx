import { useProduct, useUserData } from "../../hooks";

export const Loader = ({ isLoading }) => {
  const { dataloading } = useUserData();
  const { loading } = useProduct();
  return (
    <div className="loader">
      {loading && (
        <>
          <div className="starting-loader"></div>
          <div className="ending-loader"></div>
        </>
      )}
      {dataloading && (
        <>
          <div className="starting-loader"></div>
          <div className="ending-loader"></div>
        </>
      )}
      {isLoading && (
        <>
          <div className="starting-loader"></div>
          <div className="ending-loader"></div>
        </>
      )}
    </div>
  );
};
