import { faMoon, faSun, faTv } from "@fortawesome/free-solid-svg-icons";
import { ThemeItem } from "types";

const themeIcons: ThemeItem[] = [
  { themeName: "system", icon: faTv, isDark: false },
  { themeName: "dark", icon: faMoon, isDark: true },
  { themeName: "light", icon: faSun, isDark: false },
];

export default themeIcons;
