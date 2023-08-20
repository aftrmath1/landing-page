export default function TextInput({ placeholder, onChange, type }) {
  return (
    <input
      required
      className="border-[1px] border-gray-600 rounded-md p-2 w-full"
      type={type || "text"}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}
