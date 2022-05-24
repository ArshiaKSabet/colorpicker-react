import "./ColorDisplay.css";

const ColorDisplay = ({ color }) => {
  return (
    <div className="ColorDisplay">
      <div
        className="ColorDisplay__circle"
        style={{ backgroundColor: color }}
      ></div>
      <div>The color is: {color}</div>
    </div>
  );
};

export default ColorDisplay;
