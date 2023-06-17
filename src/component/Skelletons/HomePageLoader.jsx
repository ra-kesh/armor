import React from "react";
import ContentLoader from "react-content-loader";

const HomePageLoader = (props) => (
  <ContentLoader
    speed={2}
    width={400}
    height={460}
    viewBox="0 0 400 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#dcdbdb"
    {...props}
  >
    <circle cx="69" cy="-91" r="15" />
    <rect x="30" y="-84" rx="2" ry="2" width="140" height="10" />
    <rect x="83" y="-87" rx="2" ry="2" width="140" height="10" />
    <rect x="0" y="60" rx="2" ry="2" width="400" height="400" />
  </ContentLoader>
);

export default HomePageLoader;
