import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

export const SocialBar = () => {
  return (
    <div className="flex-col-6 flex-col-md-4 order-3 order-md-3 text-right">
      <ul>
        <li className="inline-block nav-icon">
          <TwitterIcon />
        </li>

        <li className="inline-block nav-icon">
          <YouTubeIcon />
        </li>
      </ul>
    </div>
  );
};
