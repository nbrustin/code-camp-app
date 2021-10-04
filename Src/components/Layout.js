import React, { useContext } from "react";
import { ThemeContext, ThemeProvider } from "../contexts/ThemeContexts";

const Layout = ({ startingTheme, children }) => {
  debugger;
  return (
    <ThemeProvider startingTheme={startingTheme}>
      <LayoutNoThemeProvider>{children}</LayoutNoThemeProvider>
    </ThemeProvider>
  );
};

const LayoutNoThemeProvider = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={
        theme === "light" ? "container-fluid light" : "container-fluid dark"
      }
    >
      {children}
    </div>
  );
};

export default Layout;
