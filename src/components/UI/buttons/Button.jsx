function Button({ type, onClick, title, disabled }) {
  return (
    <button disabled={disabled} type={type} onClick={onClick}>
      {title}
    </button>
  );
}

export default Button;
