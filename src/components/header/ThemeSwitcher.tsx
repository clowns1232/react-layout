import { FC, useContext } from "react";
import { ThemeName } from "../../style/theme";
import { ThemeContext } from "../../context/themeContext";

interface props {
  themeName: ThemeName;
  setThemeName: (themeName: ThemeName) => void;
}
const ThemeSwitcher: FC<props> = () => {
  const { themeName, toggleTheme } = useContext(ThemeContext);

  return <button onClick={() => toggleTheme()}>{themeName}</button>;
};

export default ThemeSwitcher;
