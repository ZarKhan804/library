
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  BookOpen,
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
} from "lucide-react";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.password) {
      setMessage("Please fill in all fields.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setMessage("Please enter a valid email address.");
      return;
    }

    setMessage("Form submitted successfully!");
  };

  return (
    <div className="h-dvh overflow-hidden bg-[#FCF5E2]">
      <div className="grid h-full grid-cols-1 min-[701px]:grid-cols-2">
        {/* Left Side - Register Form */}
        <div className="flex h-full min-h-0 items-center justify-center overflow-y-auto px-5 py-3 sm:px-8">
          <div className="w-full max-w-md">
            {/* Logo */}
            <Link
              to="/"
              className="mb-3 inline-flex items-center gap-2 text-[#98794F]"
            >
              <BookOpen size={27} strokeWidth={1.8} />
              <span className="text-lg font-bold text-[#3F3427]">
                Library Management System
              </span>
            </Link>

            {/* Heading */}
            <div className="mb-4">
              <h1 className="whitespace-nowrap text-[clamp(1.65rem,3vw,2.5rem)] font-bold leading-tight tracking-tight text-[#3F3427]">
                Create Your Account
              </h1>
              <p className="mt-1 text-sm leading-5 text-[#7B6A55]">
                Register to get started with your library.
              </p>
            </div>

            {/* Register Form */}
            <form onSubmit={handleSubmit} className="space-y-3">
              {/* Full Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-1 block text-sm font-semibold text-[#4B3D2D]"
                >
                  Full Name
                </label>

                <div className="flex h-12 items-center rounded-xl bg-[#F1EBDD] px-3">
                  <User size={18} className="shrink-0 text-[#98794F]" />

                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    autoComplete="name"
                    className="h-full min-w-0 flex-1 bg-transparent px-3 text-sm text-[#3F3427] outline-none placeholder:text-sm placeholder:text-[#A0917B]"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-1 block text-sm font-semibold text-[#4B3D2D]"
                >
                  Email Address
                </label>

                <div className="flex h-12 items-center rounded-xl bg-[#F1EBDD] px-3">
                  <Mail size={18} className="shrink-0 text-[#98794F]" />

                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    autoComplete="email"
                    className="h-full min-w-0 flex-1 bg-transparent px-3 text-sm text-[#3F3427] outline-none placeholder:text-sm placeholder:text-[#A0917B]"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="mb-1 block text-sm font-semibold text-[#4B3D2D]"
                >
                  Password
                </label>

                <div className="flex h-12 items-center rounded-xl bg-[#F1EBDD] px-3">
                  <Lock size={18} className="shrink-0 text-[#98794F]" />

                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Create a password"
                    autoComplete="new-password"
                    className="h-full min-w-0 flex-1 bg-transparent px-3 text-sm text-[#3F3427] outline-none placeholder:text-sm placeholder:text-[#A0917B]"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    className="ml-1 shrink-0 text-[#98794F] transition hover:text-[#6F5A3D]"
                  >
                    {showPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>
                </div>
              </div>

              {/* Message */}
              {message && (
                <p
                  role="status"
                  className="text-sm leading-5 text-[#7B6A55]"
                >
                  {message}
                </p>
              )}

              {/* Register Button */}
              <button
                type="submit"
                className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#98794F] px-4 text-sm font-semibold text-white transition duration-200 hover:bg-[#6F5A3D]"
              >
                Register
                <ArrowRight size={17} />
              </button>
            </form>

            {/* Login Link */}
            <p className="mt-4 text-center text-sm leading-5 text-[#7B6A55]">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-semibold text-[#98794F] transition hover:text-[#6F5A3D]"
              >
                Login
              </Link>
            </p>

            <p className="mt-3 text-center text-xs text-[#A0917B]">
              3. Register Page
            </p>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="hidden min-[701px]:flex items-center justify-center p-6">
  <img
    src="/image.jpeg"
    alt="Library registration"
    className="h-[80%] w-[85%] rounded-2xl object-cover"
  />
</div>
      </div>
    </div>
  );
};

export default Register;
