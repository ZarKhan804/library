import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail, BookOpen, ArrowLeft } from "lucide-react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    setMessage("");
    setError("");

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);

    // Save the email temporarily for the OTP verification page.
    sessionStorage.setItem("otpEmail", email.trim());

    // Navigate without reloading the entire website.
    navigate("/verify-otp");
  };

  return (
    <main className="h-dvh w-full overflow-hidden bg-[#FEF7E5]">
      <div className="grid h-full grid-cols-1 lg:grid-cols-2">

        {/* LEFT SIDE - FORGOT PASSWORD FORM */}
        <section className="flex h-full min-h-0 min-w-0 items-center justify-center overflow-y-auto bg-[#FEF7E5] px-6 py-3 sm:px-10 lg:px-16">

          <div className="w-full max-w-md">

            {/* LOGO AND BRAND NAME */}
            <Link
              to="/"
              className="mb-8 inline-flex items-center gap-2"
            >
              <BookOpen
                size={30}
                className="shrink-0 text-[#98794F]"
              />

              <span className="text-lg font-bold text-[#3F3427]">
                Library Management System
              </span>
            </Link>

            {/* BACK TO LOGIN */}
            <div className="mb-5">
              <Link
                to="/login"
                className="inline-flex items-center gap-2 text-sm font-medium text-[#7B6A55] transition hover:text-[#6F5A3D]"
              >
                <ArrowLeft size={17} />
                Back to Login
              </Link>
            </div>

            {/* HEADING */}
            <div className="mb-6">
              <h1 className="mb-3 text-4xl font-bold tracking-tight text-[#3F3427] sm:text-5xl">
                Forgot Password?
              </h1>

              <p className="text-base leading-7 text-[#7B6A55]">
                No worries! Enter your email and we’ll help you
                reset your password.
              </p>
            </div>

            {/* FORGOT PASSWORD FORM */}
            <form onSubmit={handleSubmit} className="space-y-5">

              {/* EMAIL INPUT */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-[#4B3D2D]"
                >
                  Email Address
                </label>

                <div className="flex h-14 items-center gap-3 rounded-xl border border-[#E4D8C3] bg-[#F1EBDD] px-4 transition focus-within:border-[#98794F]">

                  <Mail
                    size={20}
                    className="shrink-0 text-[#98794F]"
                  />

                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setError("");
                      setMessage("");
                    }}
                    required
                    autoComplete="email"
                    className="h-full w-full min-w-0 bg-transparent text-sm text-[#3F3427] outline-none placeholder:text-[#A0917B]"
                  />

                </div>
              </div>

              {/* SUCCESS MESSAGE */}
              {message && (
                <p
                  className="text-sm text-green-700"
                  role="status"
                >
                  {message}
                </p>
              )}

              {/* ERROR MESSAGE */}
              {error && (
                <p
                  className="text-sm text-red-600"
                  role="alert"
                >
                  {error}
                </p>
              )}

              {/* SEND OTP BUTTON */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="h-14 w-full rounded-full bg-[#98794F] text-base font-semibold text-white transition hover:bg-[#6F5A3D] focus:outline-none focus:ring-2 focus:ring-[#98794F] focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
              >
                Send OTP
              </button>

            </form>

            {/* LOGIN LINK */}
            <div className="mt-6 text-center">
              <p className="text-sm text-[#7B6A55]">
                Remember your password?{" "}

                <Link
                  to="/login"
                  className="font-semibold text-[#98794F] transition hover:text-[#6F5A3D]"
                >
                  Login
                </Link>

              </p>
            </div>

            {/* PAGE FOOTER */}
            <div className="mt-4 text-center">
              <p className="text-xs text-[#A0917B]">
                5. Forgot Password Page
              </p>
            </div>

          </div>
        </section>

        {/* RIGHT SIDE - LOCK IMAGE */}
        <section className="hidden h-full min-h-0 min-w-0 items-center justify-center overflow-hidden bg-[#FEF7E5] p-6 sm:p-10 lg:flex">

          <img
            src="/lock.jpeg"
            alt="Forgot password security illustration"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="block h-full w-full max-h-[650px] min-w-0 object-contain"
          />

        </section>

      </div>
    </main>
  );
};

export default ForgotPassword;