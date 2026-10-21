import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, Mail, Lock, ArrowLeft, BookOpen } from "lucide-react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.trim() || !emailPattern.test(email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!password || password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    alert("Login form submitted successfully!");
  };

  const handleForgotPassword = () => {
    navigate("/forgot-password");
  };

  return (
    <main className="h-dvh w-full overflow-hidden border-0 bg-[#FEF7E5] p-0 shadow-none">
      <div className="grid h-full grid-cols-1 lg:grid-cols-2">
        {/* LEFT SIDE - LOGIN FORM */}
        <section className="flex h-full min-w-0 items-center justify-center overflow-y-auto border-0 bg-[#FEF7E5] px-6 py-3 shadow-none outline-none sm:px-10 lg:px-16">
          <div className="w-full max-w-md border-0 bg-transparent shadow-none">
            {/* LOGO AND BRAND NAME */}
            <Link to="/" className="mb-4 inline-flex items-center gap-2">
              <BookOpen
                size={27}
                className="shrink-0 text-[#98794F]"
              />

              <span className="text-lg font-bold text-[#3F3427]">
                Library Management System
              </span>
            </Link>

            {/* BACK TO HOME */}
            <div className="mb-4">
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-sm font-medium text-[#7B6A55] transition hover:text-[#6F5A3D]"
              >
                <ArrowLeft size={17} />
                Back to Home
              </Link>
            </div>

            {/* HEADING */}
            <div className="mb-4">
              <h1 className="mb-2 text-4xl font-bold tracking-tight text-[#3F3427] sm:text-5xl">
                Welcome Back
              </h1>

              <p className="text-sm leading-6 text-[#7B6A55]">
                Sign in to access your library account.
              </p>
            </div>

            {/* LOGIN FORM */}
            <form
              onSubmit={handleLogin}
              className="space-y-3"
              autoComplete="off"
            >
              {/* EMAIL INPUT */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-1 block text-sm font-semibold text-[#4B3D2D]"
                >
                  Email Address
                </label>

                <div className="flex h-12 items-center gap-3 rounded-xl bg-[#F1EBDD] px-4">
                  <Mail
                    size={19}
                    className="shrink-0 text-[#98794F]"
                  />

                  <input
                    id="email"
                    name="login-email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    autoComplete="off"
                    autoCapitalize="none"
                    spellCheck={false}
                    className="h-full w-full min-w-0 bg-transparent text-sm text-[#3F3427] outline-none placeholder:text-[#A0917B]"
                  />
                </div>
              </div>

              {/* PASSWORD INPUT */}
              <div>
                <label
                  htmlFor="password"
                  className="mb-1 block text-sm font-semibold text-[#4B3D2D]"
                >
                  Password
                </label>

                <div className="flex h-12 items-center gap-3 rounded-xl bg-[#F1EBDD] px-4">
                  <Lock
                    size={19}
                    className="shrink-0 text-[#98794F]"
                  />

                  <input
                    id="password"
                    name="login-password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    minLength={6}
                    autoComplete="new-password"
                    className="h-full w-full min-w-0 bg-transparent text-sm text-[#3F3427] outline-none placeholder:text-[#A0917B]"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                    className="shrink-0 text-[#98794F] transition hover:text-[#6F5A3D]"
                  >
                    {showPassword ? (
                      <EyeOff size={19} />
                    ) : (
                      <Eye size={19} />
                    )}
                  </button>
                </div>
              </div>

              {/* REMEMBER ME + FORGOT PASSWORD */}
              <div className="flex items-center justify-between pt-1">
                <label
                  htmlFor="rememberMe"
                  className="flex cursor-pointer items-center gap-2 text-sm text-[#7B6A55]"
                >
                  <input
                    id="rememberMe"
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="h-4 w-4 cursor-pointer accent-[#98794F]"
                  />
                  Remember me
                </label>

                <button
                  type="button"
                  onClick={handleForgotPassword}
                  className="text-sm font-medium text-[#98794F] transition hover:text-[#6F5A3D]"
                >
                  Forgot Password?
                </button>
              </div>

              {/* ERROR MESSAGE */}
              {error && (
                <p className="text-sm text-red-600" role="alert">
                  {error}
                </p>
              )}

              {/* LOGIN BUTTON */}
              <button
                type="submit"
                className="h-12 w-full rounded-xl bg-[#98794F] text-sm font-semibold text-white transition hover:bg-[#6F5A3D] focus:outline-none focus:ring-2 focus:ring-[#98794F] focus:ring-offset-2"
              >
                Login
              </button>
            </form>

            {/* REGISTER LINK */}
            <div className="mt-4 text-center">
              <p className="text-sm text-[#7B6A55]">
                Don&apos;t have an account?{" "}
                <Link
                  to="/register"
                  className="font-semibold text-[#98794F] transition hover:text-[#6F5A3D]"
                >
                  Create Account
                </Link>
              </p>
            </div>

            {/* PAGE FOOTER */}
            <div className="mt-3 text-center">
              <p className="text-xs text-[#A0917B]">
                2. Login Page
              </p>
            </div>
          </div>
        </section>

        {/* RIGHT SIDE - IMAGE */}
        <section className="flex h-full min-w-0 items-center justify-center overflow-hidden border-0 bg-[#FEF7E5] p-6 shadow-none outline-none sm:p-10 max-[700px]:hidden">
          <img
            src="/logos.jpeg"
            alt="Library illustration"
            className="block h-full w-full max-h-[650px] min-w-0 object-contain"
          />
        </section>
      </div>
    </main>
  );
};

export default Login;