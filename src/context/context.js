import React from "react";

export const AppContext = React.createContext({
  state: {
    products: [],
    cart: [],
    favorites: [],
  },
  setState: () => {},
});
