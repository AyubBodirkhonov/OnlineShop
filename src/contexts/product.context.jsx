import { useState } from "react";
import PRODUCTS from "../shop-data.json";
import { createContext } from "react";

export const ProductsContext = createContext({
  products: [],
  setProducts: () => null,
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(PRODUCTS);

  const value = { products, setProducts };
  return (
    <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
  );
};
