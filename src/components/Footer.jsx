
import { Link } from "react-router-dom";
import { BookOpen, Phone, Mail, MapPin } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Features", to: "/#features" },
  { label: "Contact", to: "/contact" },
];

const usefulLinks = [
  { label: "Books", to: "/#feature-books" },
  { label: "Members", to: "/#feature-members" },
  { label: "Reports", to: "/#feature-reports" },
  { label: "Login", to: "/login" },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/",
    Icon: FaFacebookF,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/",
    Icon: FaInstagram,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/",
    Icon: FaLinkedinIn,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/",
    Icon: FaYoutube,
  },
];

export default function Footer() {
  const renderLink = (item) => {
    const isFeatureLink = item.to.startsWith("/#");

    if (isFeatureLink) {
      return (
        <a
          key={item.label}
          href={item.to}
          className="inline-block text-base text-[#E7EAF1] transition duration-200 hover:translate-x-1 hover:text-[#E0BC7D] sm:text-xl"
        >
          {item.label}
        </a>
      );
    }

    return (
      <Link
        key={item.label}
        to={item.to}
        onClick={() => {
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant",
          });
        }}
        className="inline-block text-base text-[#E7EAF1] transition duration-200 hover:translate-x-1 hover:text-[#E0BC7D] sm:text-xl"
      >
        {item.label}
      </Link>
    );
  };

  return (
    <footer className="w-full bg-[#FDF8E9] px-3 py-3 sm:px-5 sm:py-5">
      <div className="mx-auto max-w-[1400px] rounded-[28px] border-2 border-[#C6A875] bg-[#061B3B] px-6 py-8 text-[#FFF9ED] shadow-lg sm:px-10 sm:py-10 lg:px-16">

        {/* Brand */}
        <div className="mb-10 flex flex-col items-center justify-center gap-3 text-center sm:mb-14 sm:flex-row sm:gap-4">
          <BookOpen
            className="h-16 w-16 shrink-0 text-[#D7B16F] sm:h-20 sm:w-20"
            strokeWidth={1.8}
          />

          <div>
            <h2 className="text-xl font-bold sm:text-2xl lg:text-3xl">
              Library Management System
            </h2>

            <p className="mt-1 text-sm text-[#D8DFEB] sm:text-lg">
              Knowledge Builds a Better Future
            </p>
          </div>
        </div>

        {/* Footer Columns */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-0">

          {/* Quick Links */}
          <div className="lg:border-r lg:border-[#65758D] lg:pr-10">
            <h3 className="mb-4 text-xl font-bold sm:text-2xl">
              Quick Links
            </h3>

            <ul className="space-y-2">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  {renderLink(item)}
                </li>
              ))}
            </ul>
          </div>

          {/* Useful Links */}
          <div className="lg:border-r lg:border-[#65758D] lg:px-10">
            <h3 className="mb-4 text-xl font-bold sm:text-2xl">
              Useful Links
            </h3>

            <ul className="space-y-2">
              {usefulLinks.map((item) => (
                <li key={item.label}>
                  {renderLink(item)}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div className="lg:pl-10">
            <h3 className="mb-5 text-xl font-bold sm:text-2xl">
              Contact Us
            </h3>

            <div className="space-y-4">
              <a
                href="tel:+923001234567"
                className="flex items-center gap-3 text-base text-[#E7EAF1] transition hover:text-[#E0BC7D] sm:text-xl"
              >
                <Phone className="h-6 w-6 shrink-0" />
                <span>+92 300 1234567</span>
              </a>

              <a
                href="mailto:info@library.com"
                className="flex items-center gap-3 break-all text-base text-[#E7EAF1] transition hover:text-[#E0BC7D] sm:text-xl"
              >
                <Mail className="h-6 w-6 shrink-0" />
                <span>info@library.com</span>
              </a>

              <p className="flex items-center gap-3 text-base text-[#E7EAF1] sm:text-xl">
                <MapPin className="h-6 w-6 shrink-0" />
                <span>Lahore, Pakistan</span>
              </p>
            </div>
          </div>
        </div>

        {/* Copyright and Social Icons */}
        <div className="mt-8 border-t border-[#65758D] pt-6 sm:mt-10">
          <div className="flex flex-col items-center justify-between gap-5 sm:flex-row">
            <p className="text-center text-sm text-[#D8DFEB] sm:text-left sm:text-base">
              © 2026 Library Management System. All rights reserved.
            </p>

            <div className="flex items-center gap-3">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${label}`}
                  title={label}
                  className="group flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-[#1265D8] text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-[#D0A75E] hover:bg-[#D0A75E] hover:text-[#061B3B] hover:shadow-lg sm:h-11 sm:w-11"
                >
                  <Icon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
