function Button({ children, rounded = "full", py = "2.5", px = "4" }) {
  return (
    <button
      className={`border-primary border-2 rounded-${rounded} py-${py} px-${px} text-dark-200`}
    >
      {children}
    </button>
  );
}

export default Button;
