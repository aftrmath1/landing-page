export default function TextInput({ placeholder, onChange, type }) {
  return (
    <input
      className="border-[1.5px] border-gray-600 rounded-md p-2 w-full outline-primary focus:outline-1 focus:outline focus:border-primary"
      type={type || "text"}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}
