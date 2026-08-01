function InputField({
  className = "",
  ...props
}) {
  return (
    <input
      {...props}
      className={`
        w-full
        px-4
        py-3
        border
        border-slate-300
        rounded-xl
        outline-none
        focus:ring-2
        focus:ring-blue-500
        focus:border-blue-500
        ${className}
      `}
    />
  );
}

export default InputField;