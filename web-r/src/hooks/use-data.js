import { createContext, use } from "react";

const initialState = {

};

export const DataProviderContext = createContext(initialState);

export const useData = () => {
  const context = use(DataProviderContext);

  if (context === undefined)
    throw new Error("useData must be used within a DataProvider");

  return context;
};
