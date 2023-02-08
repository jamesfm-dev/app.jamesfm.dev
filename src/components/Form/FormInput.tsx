export default function FormInput({
  type,
  label,
  placeholder,
  isRequired,
}: {
  type: React.HTMLInputTypeAttribute;
  label: string;
  placeholder?: string;
  isRequired: boolean;
}) {
  return (
    <label>
      <span className="ml-2">{label}</span>
      {isRequired ? <span className="text-red-500"> *</span> : null}
      <input
        type={type}
        placeholder={placeholder}
        required={isRequired}
        minLength={1}
        className="
          form-input
          mt-1 
          w-full 
          rounded-md 
          border-gray-300 shadow-sm    
          focus:border-indigo-300 
          focus:ring 
          focus:ring-indigo-200 
          focus:ring-opacity-50"
      />
    </label>
  );
}
