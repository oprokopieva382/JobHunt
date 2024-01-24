export const FormRow = ({ type, name, labelText, defaultValue, onChange }) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
      <input
        type={type}
        defaultValue={defaultValue || ""}
        name={name}
        id={name}
        className="form-input"
        required
        onChange={onChange}
      />
    </div>
  );
};
