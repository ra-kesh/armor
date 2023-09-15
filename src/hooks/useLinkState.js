import { useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const useLinkState = () => {
  const { pathname, search } = useLocation();
  const navigate = useNavigate();
  const searchParams = useMemo(() => new URLSearchParams(search), [search]);

  const category = searchParams.get("category") || "all";
  const sortBy = searchParams.get("sort_by") || "default";

  const filters = {
    inStockProducts: searchParams.get("in_stock_products") === "true" || false,
    fastProducts: searchParams.get("fast_products") === "true" || false,
    ratingsAboveFour:
      searchParams.get("ratings_above_four") === "true" || false,
    ratingsAboveThree:
      searchParams.get("ratings_above_three") === "true" || false,
    ratingsAboveTwo: searchParams.get("ratings_above_two") === "true" || false,
    ratingsAboveOne: searchParams.get("ratings_above_one") === "true" || false,
    priceRange: parseInt(searchParams.get("price_range")) || 10000,
  };

  const page = useMemo(
    () => parseInt(searchParams.get("page")) || 1,
    [searchParams]
  );

  const perPage = useMemo(
    () => parseInt(searchParams.get("per_page")) || 6,
    [searchParams]
  );

  const updateQueryParam = (paramName, paramValue) => {
    const actionMap = {
      sort_by: () => {
        searchParams.set(paramName, paramValue);
        const updatedUrl = `${pathname}?${searchParams.toString()}`;
        navigate(updatedUrl, { replace: true });
      },
      filter: () => {
        for (const key in paramValue) {
          const value = paramValue[key];
          searchParams.set(key, value);
          const updatedUrl = `${pathname}?${searchParams.toString()}`;
          navigate(updatedUrl, { replace: true });
        }
      },
      category: () => {
        const newSearchParams = new URLSearchParams();
        newSearchParams.set(paramName, paramValue);
        const updatedUrl = `${pathname}?${newSearchParams.toString()}`;
        return updatedUrl;
      },

      default: () => {
        searchParams.set(paramName, paramValue);
        const updatedUrl = `${pathname}?${searchParams.toString()}`;
        return updatedUrl;
      },
    };

    const action = actionMap[paramName] || actionMap.default;
    return action();
  };

  return {
    path: `${pathname}${search}`,
    category,
    sortBy,
    page,
    perPage,
    searchParams,
    updateQueryParam,
    filters,
  };
};

export default useLinkState;
