import { createContext, use } from "react";

const initialState = {
  versions: {}, 
  custom: {}, 
  customDesc: {}, 
  abortMap: () => null,
  isLocal: () => null,
  unloadMap: () => null,
};

export const AppCacheProviderContext = createContext(initialState);

export const useAppCache = () => {
  const context = use(AppCacheProviderContext);

  if (context === undefined)
    throw new Error("useAppCache must be used within a AppCacheProvider");

  return context;
};
