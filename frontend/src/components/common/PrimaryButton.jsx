function PrimaryButton({
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
        bg-blue-600
        text-white
        px-6
        py-3
        rounded-xl
        font-semibold
        hover:bg-blue-700
        transition-all
        duration-200
        ${className}
      `}
    >
      {children}
    </button>
  );
}

export default PrimaryButton;