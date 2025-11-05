function CustomInput({
  name,
  type,
  placeholder,
  required,
  onChange,
  value,
  customClass,
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={(e) => onChange(e)}
      className={`bg-[#EEF1F8] rounded-lg opacity-100 px-4 py-[11px] text-sm/[18px] focus:outline-none font-medium font-montserrat ${customClass}`}
      required={required}
    />
  );
}

export default CustomInput;
