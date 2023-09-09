import { useMemo } from "react";
import { useLocation } from "react-router-dom";

const useLinkState = () => {
  const { pathname, search } = useLocation();
  const searchParams = useMemo(() => new URLSearchParams(search), [search]);
  const category = searchParams.get("category") || "all";
  const sort = searchParams.get("sort") || "default";
  const page = useMemo(
    () => parseInt(searchParams.get("page")) || 1,
    [searchParams]
  );

  const perPage = useMemo(
    () => parseInt(searchParams.get("per_page")) || 6,
    [searchParams]
  );

  const updateQueryParam = (paramName, paramValue) => {
    if (paramName === "category") {
      const newSearchParams = new URLSearchParams();
      newSearchParams.set(paramName, paramValue);
      return `${pathname}?${newSearchParams.toString()}`;
    } else {
      searchParams.set(paramName, paramValue);
      return `${pathname}?${searchParams.toString()}`;
    }
  };

  return {
    path: `${pathname}${search}`,
    category,
    sort,
    page,
    perPage,
    searchParams,
    updateQueryParam,
  };
};

export default useLinkState;
