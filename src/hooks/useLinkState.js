import { useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const useLinkState = () => {
  const { pathname, search } = useLocation();
  const navigate = useNavigate();
  const searchParams = useMemo(() => new URLSearchParams(search), [search]);
  const category = searchParams.get("category") || "all";
  const sortBy = searchParams.get("sort_by") || "default";
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
  };
};

export default useLinkState;
