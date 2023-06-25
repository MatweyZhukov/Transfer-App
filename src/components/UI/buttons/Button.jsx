function Button({ type, onClick, title }) {
  return (
    <button type={type} onClick={onClick}>
      {title}
    </button>
  );
}

export default Button;
