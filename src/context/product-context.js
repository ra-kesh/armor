import { createContext, useReducer, useEffect } from "react";
import { initialState, productReducer } from "../reducer";
import axios from "axios";
import { apiUrl } from "../constants";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);

  useEffect(() => {
    const source = axios.CancelToken.source();
    const cancelToken = source.token;
    (async () => {
      try {
        dispatch({ type: "SHOW LOADING" });
        const {
          data: { data: products },
        } = await axios.get(`${apiUrl}/products`, {
          cancelToken,
        });
        dispatch({ type: "GET PRODUCT LIST", payload: products });
        dispatch({ type: "HIDE LOADING" });
      } catch (err) {
        console.log({ error: err.message });
      }
    })();
    return () => {
      source.cancel();
    };
  }, [dispatch]);

  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};
