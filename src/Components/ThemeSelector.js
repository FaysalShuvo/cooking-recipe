import "./ThemeSelector.css";
import { useTheme } from "../hooks/useTheme";
import modeIcon from "../assets/mode-icon.svg";

const themeColors = ["#8f3b76", "#553772", "#1f306e"];

const ThemeSelector = () => {
  const { changeColor, changeMode, mode } = useTheme();

  const handleToggle = () => {
    changeMode(mode === "dark" ? "light" : "dark");
  };

  console.log(mode);

  return (
    <div className="theme-selector">
      <div className="mode-toggle">
        <img
          onClick={handleToggle}
          src={modeIcon}
          alt=""
          style={{ filter: mode === "dark" ? "invert(70%)" : "invert(00%)" }}
        />
      </div>
      <div className="theme-btn">
        {themeColors.map((color) => (
          <div
            key={color}
            onClick={() => changeColor(color)}
            style={{ background: color }}
          />
        ))}
      </div>
    </div>
  );
};

export default ThemeSelector;
