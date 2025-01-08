import { useEffect, useState } from "react"
import PropTypes from 'prop-types';
import { ThemeProviderContext } from "@/hooks/use-theme"

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "vite-ui-theme",
  ...props
}) {
  const [theme, setTheme] = useState(
    () => localStorage.getItem(storageKey) || defaultTheme
  )

  useEffect(() => {
    const root = window.document.documentElement

    root.classList.remove("light", "dark")

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: light)")
        .matches
        ? "light"
        : "dark"
        
      localStorage.setItem(storageKey, theme);
      root.classList.add(systemTheme)
      return
    }

    root.classList.add(theme)
  }, [theme])

  const value = {
    theme,
    setTheme: (theme) => {
      localStorage.setItem(storageKey, theme)
      setTheme(theme)
    },
  }

  return (
    (<ThemeProviderContext {...props} value={value}>
      {children}
    </ThemeProviderContext>)
  );
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
  defaultTheme: PropTypes.string,
  storageKey: PropTypes.string,
};