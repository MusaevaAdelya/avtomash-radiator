import { useRef } from "react";

function Input({ icon, placeholder, name, value, onChange }) {
  const inputRef = useRef(null);

  return (
    <div
      onClick={() => inputRef.current.focus()}
      className="flex w-full gap-2 px-8 py-4 border rounded-full border-dark-200"
    >
      <img src={icon} alt="icon" />
      <input
        required
        ref={inputRef}
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="text-lg bg-transparent outline-none text-dark-200"
        
      />
    </div>
  );
}

export default Input;
