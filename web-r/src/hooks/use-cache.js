import { createContext, use } from "react";

const initialState = {
  versions: {}, 
  custom: {}, 
  customDesc: {}, 
  maps: {},
  baseData: {},
  abortMap: () => null, 
  isLocal: () => null, 
  loadMap: () => null, 
  unloadMap: () => null,
  fetchMeta: () => null, 
  fetchData: () => null, 
  hasData: () => null, 
  fetchIconByName: () => null, 
  fetchImage: () => null, 
  fetchBinary: () => null
};

export const AppCacheProviderContext = createContext(initialState);

export const useAppCache = () => {
  const context = use(AppCacheProviderContext);

  if (context === undefined)
    throw new Error("useAppCache must be used within a AppCacheProvider");

  return context;
};
