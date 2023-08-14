import { useEffect, useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import TextInput from "./TextInput";
import ContinueButton from "./ContinueButton";

export default function BasicInfoForm({ onReady, loading }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [phone, setPhone] = useState("");
  const [jobPosition, setJobPosition] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (name && email && companyName && phone && jobPosition) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [name, email, companyName, phone, jobPosition]);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(name, email, companyName, phone, jobPosition);
    onReady({
      name,
      email,
      companyName,
      phone,
      jobPosition,
      password,
    });
  };
  return (
    <form
      className="flex flex-col justify-center items-center px-16 pb-10"
      onSubmit={handleSubmit}
    >
      <div className="w-full max-w-lg p-2 space-y-4">
        <p>Personal Info</p>
        <TextInput
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextInput
          type="text"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextInput
          type="text"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <TextInput
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="w-full max-w-lg p-2 space-y-4 mt-5">
        <p>Company Info</p>

        <TextInput
          type="text"
          placeholder="Company Name"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
        />
        <TextInput
          type="text"
          placeholder="Your Job Position"
          value={jobPosition}
          onChange={(e) => setJobPosition(e.target.value)}
        />
      </div>
      <ContinueButton disabled={disabled} loading={loading} />
    </form>
  );
}
