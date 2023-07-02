function Input({ value, placeholder, type, readOnly, onChange, checked }) {
  return (
    <input
      checked={checked}
      value={String(value)}
      placeholder={placeholder}
      type={type}
      onChange={readOnly ? undefined : onChange}
      readOnly={readOnly}
    />
  );
}

export default Input;
