import { createContext, use } from "react";

const initialState = {
  maps: {}, 
  setMaps: () => null
};

export const MapsProviderContext = createContext(initialState);

export const useMaps = () => {
  const context = use(MapsProviderContext);

  if (context === undefined)
    throw new Error("useMaps must be used within a MapsProvider");

  return context;
};
