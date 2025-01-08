import { createContext, use } from "react";

const initialState = {
  theme: "system",
  setTheme: () => null,
};

export const ThemeProviderContext = createContext(initialState);

export const useTheme = () => {
  const context = use(ThemeProviderContext);

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");

  return context;
};
