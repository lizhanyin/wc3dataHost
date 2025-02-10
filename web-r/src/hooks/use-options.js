import { createContext, use } from "react";

const initialState = {
  rawNames: '',
  setRawNames: () => {},
  dataDownload: {type: "all", json: 0, names: 0},
};

export const OptionsProviderContext = createContext(initialState);

export const useOptions = () => {
  const context = use(OptionsProviderContext);

  if (context === undefined)
    throw new Error("useOptions must be used within a OptionsProvider");

  return context;
};
