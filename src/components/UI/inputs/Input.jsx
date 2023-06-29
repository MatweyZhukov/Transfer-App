function Input({
  className,
  value,
  placeholder,
  type,
  readOnly,
  onChange,
  checked,
}) {
  return (
    <input
      checked={checked}
      className={className}
      value={String(value)}
      placeholder={placeholder}
      type={type}
      onChange={readOnly ? null : onChange}
      readOnly={readOnly}
    />
  );
}

export default Input;
