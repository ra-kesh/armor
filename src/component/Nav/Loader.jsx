export const Loader = ({ isLoading }) => {
  return (
    <div className="loader">
      {isLoading && (
        <>
          <div className="starting-loader"></div>
          <div className="ending-loader"></div>
        </>
      )}
    </div>
  );
};
