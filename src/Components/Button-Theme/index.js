// ThemeButton/index.js
import lightMode from "../assets/light-mode.png";
import sleepMode from "../assets/moon.png";

export default function ThemeButton({ isDark, toggleTheme }) {
  return (
    <button className="theme-button" onClick={toggleTheme}>
      <img
        src={isDark ? lightMode : sleepMode}
        alt="tema"
        width={24}
        height={24}
      />
    </button>
  );
}
