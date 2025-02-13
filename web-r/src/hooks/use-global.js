import { createContext, use } from "react";

const initialState = {
  setTitle: () => {},
  titleCombiner: (prev, current) => `${prev} - ${current}`,
};

export const GlobalProviderContext = createContext(initialState);


export const useGlobal = () => {
  const context = use(GlobalProviderContext);

  if (context === undefined)
    throw new Error("useGlobal must be used within a GlobalProvider");

  return context;
};
