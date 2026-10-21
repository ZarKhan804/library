import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BookOpen } from "lucide-react";

const VerifyOTP = () => {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleVerify = (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    if (!/^\d{6}$/.test(otp)) {
      setError("Please enter a valid 6-digit code.");
      return;
    }

    // Demo: backend OTP verification will be connected later.
    // This flag only allows frontend navigation in demo mode.
    sessionStorage.setItem("otpVerified", "true");

    navigate("/reset-password");
  };

  const handleResend = () => {
    setError("");
    setMessage(
      "Connect your backend to send a new OTP to your email."
    );
  };

  return (
    <div className="h-dvh overflow-hidden bg-[#FCF5E2]">
      <div className="grid h-full grid-cols-1 min-[701px]:grid-cols-2">

        {/* LEFT SIDE - OTP FORM */}
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
                Verify OTP
              </h1>

              <p className="mt-1 text-sm leading-5 text-[#7B6A55]">
                Enter the 6-digit code sent to your email.
              </p>
            </div>

            {/* OTP FORM */}
            <form onSubmit={handleVerify} className="space-y-3">

              <div>
                <label
                  htmlFor="otp"
                  className="mb-1 block text-sm font-semibold text-[#4B3D2D]"
                >
                  Verification Code
                </label>

                <div className="flex h-12 items-center rounded-xl bg-[#F1EBDD] px-3">
                  <input
                    id="otp"
                    type="text"
                    inputMode="numeric"
                    autoComplete="one-time-code"
                    placeholder="Enter 6-digit code"
                    value={otp}
                    onChange={(e) =>
                      setOtp(
                        e.target.value.replace(/\D/g, "").slice(0, 6)
                      )
                    }
                    maxLength={6}
                    required
                    className="h-full w-full min-w-0 bg-transparent px-2 text-sm tracking-widest text-[#3F3427] outline-none placeholder:tracking-normal placeholder:text-sm placeholder:text-[#A0917B]"
                  />
                </div>
              </div>

              {/* RESEND OTP */}
              <div className="flex flex-wrap items-center justify-center gap-1 pt-1 text-sm">
                <span className="text-[#7B6A55]">
                  Didn't receive the code?
                </span>

                <button
                  type="button"
                  onClick={handleResend}
                  className="font-semibold text-[#98794F] transition hover:text-[#6F5A3D]"
                >
                  Resend OTP
                </button>
              </div>

              {/* ERROR MESSAGE */}
              {error && (
                <p role="alert" className="text-sm leading-5 text-red-600">
                  {error}
                </p>
              )}

              {/* STATUS MESSAGE */}
              {message && (
                <p role="status" className="text-sm leading-5 text-[#7B6A55]">
                  {message}
                </p>
              )}

              {/* VERIFY BUTTON */}
              <button
                type="submit"
                className="flex h-12 w-full items-center justify-center rounded-xl bg-[#98794F] px-4 text-sm font-semibold text-white transition duration-200 hover:bg-[#6F5A3D]"
              >
                Verify
              </button>
            </form>

            {/* BACK TO FORGOT PASSWORD */}
            <p className="mt-4 text-center text-sm leading-5 text-[#7B6A55]">
              Didn't get the email?{" "}

              <Link
                to="/forgot-password"
                className="font-semibold text-[#98794F] transition hover:text-[#6F5A3D]"
              >
                Try Again
              </Link>
            </p>

            {/* PAGE FOOTER */}
            <p className="mt-3 text-center text-xs text-[#A0917B]">
              4. OTP Verification Page
            </p>

          </div>
        </div>

        {/* RIGHT SIDE - OTP IMAGE */}
        <div className="hidden min-[701px]:flex items-center justify-center p-6">
          <img
            src="/locks.jpeg"
            alt="Library OTP Verification"
            className="h-[80%] w-[85%] object-contain"
          />
        </div>

      </div>
    </div>
  );
};

export default VerifyOTP;