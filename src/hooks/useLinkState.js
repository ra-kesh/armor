import { useLocation } from "react-router-dom";

const useLinkState = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const category = searchParams.get("category") || "all";
  const sort = searchParams.get("sort") || "default";
  const page = parseInt(searchParams.get("page")) || 1;
  const perPage = parseInt(searchParams.get("per_page")) || 6;
  const path = location.pathname + location.search;

  return {
    path,
    category,
    sort,
    page,
    perPage,
  };
};

export default useLinkState;
