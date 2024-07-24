import "./css/toggle.css";

export const Toggle = ({ handleChange, isChecked }) => {
  return (
    <div className="flex m-edges columns100">
      <input
        type="checkbox"
        id="check"
        className="toggle"
        onChange={handleChange}
        checked={isChecked}
      />
      <label htmlFor="check">Dark Mode</label>
    </div>
  );
};

export default Toggle