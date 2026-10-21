import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BookOpen, Eye, EyeOff } from "lucide-react";

const ResetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    if (sessionStorage.getItem("otpVerified") !== "true") {
      setError("Please verify your OTP first.");
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Backend password reset will be connected later.
    setMessage(
      "Password details are valid. Connect your backend to save the new password."
    );
  };

  return (
    <div className="h-dvh overflow-hidden bg-[#FCF5E2]">
      <div className="grid h-full grid-cols-1 min-[701px]:grid-cols-2">

        {/* LEFT SIDE - RESET PASSWORD FORM */}
        <div className="flex h-full min-h-0 items-center justify-center overflow-y-auto px-5 py-3 sm:px-8">
          <div className="w-full max-w-md">

            {/* LOGO */}
            <Link
              to="/"
              className="mb-5 inline-flex items-center gap-2 text-[#98794F]"
            >
              <BookOpen size={27} strokeWidth={1.8} />

              <span className="text-lg font-bold text-[#3F3427]">
                Library Management System
              </span>
            </Link>

            {/* HEADING */}
            <div className="mb-5">
              <h1 className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold leading-tight tracking-tight text-[#3F3427]">
                Reset Password
              </h1>

              <p className="mt-1 text-sm leading-5 text-[#7B6A55]">
                Enter your new password below.
              </p>
            </div>

            {/* RESET PASSWORD FORM */}
            <form onSubmit={handleSubmit} className="space-y-4">

              {/* NEW PASSWORD */}
              <div>
                <label
                  htmlFor="password"
                  className="mb-1 block text-sm font-semibold text-[#4B3D2D]"
                >
                  New Password
                </label>

                <div className="flex h-12 items-center rounded-xl border border-[#E4D8C3] bg-[#F1EBDD] px-3">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter new password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="new-password"
                    minLength={8}
                    required
                    className="h-full min-w-0 flex-1 bg-transparent px-1 text-sm text-[#3F3427] outline-none placeholder:text-[#A0917B]"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    className="ml-2 shrink-0 text-[#98794F] hover:text-[#6F5A3D]"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {/* CONFIRM PASSWORD */}
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="mb-1 block text-sm font-semibold text-[#4B3D2D]"
                >
                  Confirm Password
                </label>

                <div className="flex h-12 items-center rounded-xl border border-[#E4D8C3] bg-[#F1EBDD] px-3">
                  <input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    autoComplete="new-password"
                    required
                    className="h-full min-w-0 flex-1 bg-transparent px-1 text-sm text-[#3F3427] outline-none placeholder:text-[#A0917B]"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowConfirmPassword(!showConfirmPassword)
                    }
                    aria-label={
                      showConfirmPassword
                        ? "Hide confirm password"
                        : "Show confirm password"
                    }
                    className="ml-2 shrink-0 text-[#98794F] hover:text-[#6F5A3D]"
                  >
                    {showConfirmPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>
                </div>
              </div>

              {/* ERROR MESSAGE */}
              {error && (
                <p role="alert" className="text-sm leading-5 text-red-600">
                  {error}
                </p>
              )}

              {/* SUCCESS MESSAGE */}
              {message && (
                <p role="status" className="text-sm leading-5 text-[#7B6A55]">
                  {message}
                </p>
              )}

              {/* RESET PASSWORD BUTTON */}
              <button
                type="submit"
                className="flex h-12 w-full items-center justify-center rounded-xl bg-[#98794F] px-4 text-sm font-semibold text-white transition duration-200 hover:bg-[#6F5A3D]"
              >
                Reset Password
              </button>
            </form>

            {/* BACK TO LOGIN */}
            <p className="mt-4 text-center text-sm leading-5 text-[#7B6A55]">
              Remember your password?{" "}

              <Link
                to="/login"
                className="font-semibold text-[#98794F] transition hover:text-[#6F5A3D]"
              >
                Login
              </Link>
            </p>

            {/* PAGE FOOTER */}
            <p className="mt-3 text-center text-xs text-[#A0917B]">
              6. Reset Password Page
            </p>

          </div>
        </div>

        {/* RIGHT SIDE - SECURITY IMAGE */}
        <div className="hidden min-[701px]:flex items-center justify-center p-6">
          <img
            src="/secure.jpeg"
            alt="Reset Password Security Illustration"
            className="h-[80%] w-[85%] object-contain"
          />
        </div>

      </div>
    </div>
  );
};

export default ResetPassword;