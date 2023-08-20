import { useEffect, useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import TextInput from "./TextInput";
import ContinueButton from "./ContinueButton";
import zxcvbn from "zxcvbn";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function BasicInfoForm({ onReady, loading }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [phone, setPhone] = useState("");
  const [jobPosition, setJobPosition] = useState("");
  const [disabled, setDisabled] = useState(true);

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordValidationMessage, setPasswordValidationMessage] =
    useState("");
  const [passwordStrengthBar, setPasswordStrengthBar] = useState(false);
  const [confirmPasswordMessage, setConfirmPasswordMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);

  const [validEmail, setValidEmail] = useState(true);
  const [emailErrorShown, setEmailErrorShown] = useState(false);

  useEffect(() => {
    if (name && email && companyName && phone && jobPosition) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [name, email, companyName, phone, jobPosition]);

  const handleSubmit = e => {
    e.preventDefault();

    const passwordsMatch = (password === confirmPassword);

    if (!passwordsMatch) {
      toast.error("Passwords don't match.", {
        position: "top-right",
        autoClose: 3500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    } else {
      toast.success("Passwords match!", {
        position: "top-right",
        autoClose: 3500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }

    onReady({
      name,
      email,
      companyName,
      phone,
      jobPosition,
      password,
    });
  };

  const handlePasswordChange = (password, confirmPassword) => {
    setPassword(password);
    setConfirmPassword(confirmPassword);

    // Calculate password strength and update the strength bar
    if (password !== "") {
      setPasswordStrengthBar(true);
      const strength = calculatePasswordStrength(password);
      if (strength > 2) {
        setPasswordValidationMessage("Strong password");
      } else {
        setPasswordValidationMessage("Weak");
      }
    } else {
      setPasswordValidationMessage("");
    }

    // Check if passwords match and update confirm password validation message
    if (password !== "" && confirmPassword !== "") {
      if (password !== confirmPassword) {
        setConfirmPasswordMessage("Passwords must match.");
      } else {
        setConfirmPasswordMessage("Passwords match!");
      }
    } else {
      setConfirmPasswordMessage("");
    }
  };

  // Handler for password input field
  const handlePasswordChangeHandler = e => {
    handlePasswordChange(e.target.value, confirmPassword);
  };

  // Handler for confirm password input field
  const handleConfirmPasswordChangeHandler = e => {
    handlePasswordChange(password, e.target.value);
  };

  const handleValidEmail = e => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);

    if (!validateEmail(inputEmail)) {
      toast.dismiss(); // Dismiss any previously shown toast
      toast.error("Please enter a valid email address.", {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      setValidEmail(false);
    } else {
      setValidEmail(true);
    }
  };

  const calculatePasswordStrength = password => {
    const result = zxcvbn(password);
    const strength = result.score;
    setPasswordStrength(strength); // Update the passwordStrength state
    return strength;
  };

  const validateEmail = email => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <form
      className="flex flex-col justify-center items-center px-6 md:px-10 pb-10 "
      onSubmit={handleSubmit}
    >
      <ToastContainer
        position="top-right"
        autoClose={3500}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <div className="w-full max-w-lg p-2 space-y-4">
        <p>Personal Info</p>
        <TextInput
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <div>
          <label htmlFor="email-address" className="sr-only">
            Email address
          </label>
          <input
            placeholder="Email"
            onBlur={handleValidEmail} // Use the handleEmailChange function
            onChange={e => setEmail(e.target.value)}
            value={email}
            name="email"
            type="email"
            autoComplete="email"
            required
            className={`border-[1px] border-gray-600 rounded-md p-2 w-full appearance-none rounded-md relative block w-full px-3 py-2 border ${
              validEmail ? "" : ""
            } placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
          />
        </div>
        <TextInput
          type="text"
          placeholder="Phone Number"
          value={phone}
          onChange={e => setPhone(e.target.value)}
        />
        {/* <TextInput
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        /> */}

        <div className="relative">
          <label htmlFor="password" className="sr-only">
            Password
          </label>
          <div className="relative">
            <input
              onChange={handlePasswordChangeHandler}
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              id="password"
              name="password"
              autoComplete="current-password"
              required
              className={`border-[1px] border-gray-600 rounded-md p-2 w-full outline-primary focus:outline-1 focus:outline focus:border-primary appearance-none rounded-md relative block w-full px-3 py-2 border ${
                validEmail ? "border-gray-300" : "border-red-500"
              } placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm ${
                showPassword ? "pr-10" : "pr-3"
              }`}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="password-toggle-btn"
              style={{
                position: "absolute",
                right: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                background: "none",
                border: "none",
                cursor: "pointer",
                outline: "none",
                fontSize: "16px",
                color: "#999",
              }}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          {passwordStrengthBar && password !== "" && (
            <div className="h-1 bg-neutral-300 rounded-md mt-2">
              <div
                className={`h-1 transition-all ${
                  [
                    "bg-red-400",
                    "bg-yellow-400",
                    "bg-orange-400",
                    "bg-emerald-200",
                    "bg-green-400",
                  ][passwordStrength]
                }`}
                style={{
                  width: `${(passwordStrength / 4) * 100}%`,
                }}
              ></div>
            </div>
          )}

          {passwordValidationMessage && (
            <p
              className={`text-xs mt-1 ${
                passwordValidationMessage.includes("Weak")
                  ? "text-red-500"
                  : "text-green-500"
              }`}
            >
              {passwordValidationMessage}
            </p>
          )}
        </div>

        <div
          className={password == "" ? "relative" : "relative -translate-y-2"}
        >
          <label htmlFor="password" className="sr-only">
            Confirm Password
          </label>
          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              onChange={handleConfirmPasswordChangeHandler}
              value={confirmPassword}
              id="confirm-password"
              name="confirm-password"
              required
              className="border-[1px] border-gray-600 rounded-md p-2 w-full outline-primary focus:outline-1 focus:outline focus:border-primary appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="password-toggle-btn"
              style={{
                position: "absolute",
                right: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                background: "none",
                border: "none",
                cursor: "pointer",
                outline: "none",
                fontSize: "16px",
                color: "#999",
              }}
            >
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          {confirmPasswordMessage && (
            <p
              className={`text-xs mt-1 ${
                confirmPasswordMessage.includes(".")
                  ? "font-medium text-red-500"
                  : "font-medium text-green-500"
              }`}
            >
              {confirmPasswordMessage}
            </p>
          )}
        </div>
      </div>
      <div className="w-full max-w-lg p-2 space-y-4 mt-5">
        <p>Company Info</p>

        <TextInput
          type="text"
          placeholder="Company Name"
          value={companyName}
          onChange={e => setCompanyName(e.target.value)}
        />
        <TextInput
          type="text"
          placeholder="Your Job Position"
          value={jobPosition}
          onChange={e => setJobPosition(e.target.value)}
        />
      </div>
      {/* <ContinueButton disabled={disabled} loading={loading} /> */}

      <div className="flex w-full justify-between items-center space-x-4 mt-12">
        <p className="text-xs text-gray-600">
          You can change your basic information after completing registration.
        </p>

        <button type="submit">
          <FiArrowRight
            className="text-primary w-7 h-7 hover:cursor-pointer hover:opacity-80 duration-300"
            onClick={handleSubmit}
          />
        </button>
      </div>
    </form>
  );
}
