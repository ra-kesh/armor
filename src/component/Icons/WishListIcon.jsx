import * as React from "react";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
    background: "#c5c5c5",
  },
}));

export default function WishListIcon({ count }) {
  return (
    <IconButton aria-label="cart">
      <StyledBadge badgeContent={count} sx={{ color: "black" }}>
        {count >= 1 ? <FavoriteIcon /> : <FavoriteBorderIcon />}
      </StyledBadge>
    </IconButton>
  );
}
