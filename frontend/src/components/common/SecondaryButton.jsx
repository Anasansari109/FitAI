function SecondaryButton({
  children,
  type = "button",
  onClick,
  className = "",
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        border
        border-slate-300
        px-6
        py-3
        rounded-xl
        font-semibold
        hover:bg-slate-100
        transition-all
        duration-200
        ${className}
      `}
    >
      {children}
    </button>
  );
}

export default SecondaryButton;