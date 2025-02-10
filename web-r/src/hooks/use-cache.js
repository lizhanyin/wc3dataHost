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
  meta: () => null, 
  data: (build) => null, 
  hasData: () => null, 
  iconByName: (name) => null, 
  image: (name, tileset) => null, 
  binary: () => null
};

export const AppCacheProviderContext = createContext(initialState);

export const useAppCache = () => {
  const context = use(AppCacheProviderContext);

  if (context === undefined)
    throw new Error("useAppCache must be used within a AppCacheProvider");

  return context;
};
