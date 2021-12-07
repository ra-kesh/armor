import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

const SocialBar = () => {
  return (
    <div className="flex-col-xl-4 text-left">
      <ul className="flex-row">
        <li
          className=" nav-icon"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <TwitterIcon />
        </li>
        <li
          className=" nav-icon"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <YouTubeIcon />
        </li>
      </ul>
    </div>
  );
};

export default SocialBar;
