import ReactImageMagnify from "react-image-magnify";

export const ProductDetailImage = ({ currentProduct }) => {
  return (
    <div className="flex-col-lg-6">
      <div className="container">
        <div className="product-detail-image">
          <ReactImageMagnify
            enlargedImagePosition="over"
            {...{
              smallImage: {
                alt: "brand",
                isFluidWidth: true,
                src: currentProduct?.image,
              },
              largeImage: {
                src: currentProduct?.image,
                width: 1200,
                height: 1000,
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};
