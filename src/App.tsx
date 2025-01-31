import "./App.css";

import Layout from "./layout/Layout";
import Home from "./pages/Home.tsx";
import { useContext } from "react";
import {
  BookStoreThemeProvider,
  ThemeContext,
} from "./context/themeContext.tsx";
import ThemeSwitcher from "./components/header/ThemeSwitcher.tsx";

function App() {
  const { themeName, toggleTheme } = useContext(ThemeContext);
  return (
    <BookStoreThemeProvider>
      <ThemeSwitcher themeName={themeName} setThemeName={toggleTheme} />
      <Layout>
        <Home />
      </Layout>
    </BookStoreThemeProvider>
  );
}

export default App;
