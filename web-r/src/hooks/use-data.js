import { createContext, use } from "react";

const initialState = {
  name: '',
  isMap: false
};

export const DataProviderContext = createContext(initialState);

export const useData = () => {
  const context = use(DataProviderContext);

  if (context === undefined)
    throw new Error("useData must be used within a DataProvider");

  return context;
};
