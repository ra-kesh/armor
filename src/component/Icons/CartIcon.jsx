import * as React from "react";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
    background: "#c5c5c5",
  },
}));

export default function CartIcon({ count }) {
  return (
    <IconButton aria-label="cart">
      <StyledBadge badgeContent={count} sx={{ color: "black" }}>
        {count >= 1 ? <ShoppingCartIcon /> : <ShoppingCartOutlinedIcon />}
      </StyledBadge>
    </IconButton>
  );
}
