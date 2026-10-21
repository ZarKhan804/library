
import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { BookOpen, Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Feature", to: "/#features" },
  { label: "Contact", to: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (event, item) => {
    if (item.to.includes("#")) {
      event.preventDefault();

      const [path, hash] = item.to.split("#");
      setMenuOpen(false);

      const scrollToSection = () => {
        const target = document.getElementById(hash);

        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      };

      if (location.pathname === path) {
        scrollToSection();
      } else {
        navigate(path || "/");

        setTimeout(() => {
          scrollToSection();
        }, 350);
      }

      return;
    }

    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#E8D9C0] bg-white">
      <div className="mx-auto flex min-h-[66px] w-[94%] max-w-[1360px] items-center justify-between gap-3">
        {/* Logo and Brand */}
        <Link
          to="/"
          onClick={() => setMenuOpen(false)}
          className="flex min-w-0 shrink-0 items-center gap-2"
        >
          <BookOpen
            className="h-8 w-9 shrink-0 text-[#A87838] sm:h-9 sm:w-10"
            strokeWidth={1.8}
          />

          <span className="text-[11px] font-extrabold leading-tight text-[#402914] sm:text-base md:text-lg">
            Library Management System
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden h-full items-center gap-3 md:flex lg:gap-5">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              onClick={(event) => handleNavClick(event, item)}
              className={`flex h-[42px] items-center rounded-lg border px-3 text-[15px] font-semibold transition-all duration-200 lg:px-4 lg:text-base ${
                item.label === "Home" && location.pathname === "/"
                  ? "border-[#DCC6A5] bg-[#FBF5E6] text-[#98794F]"
                  : "border-transparent text-[#4F463D] hover:border-[#DCC6A5] hover:bg-[#FBF5E6] hover:text-[#98794F]"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Login and Register */}
        <div className="hidden shrink-0 items-center gap-3 md:flex">
          <Link
            to="/login"
            className="rounded-md border border-[#E5D2B7] px-5 py-2 text-sm font-semibold text-[#805C32] transition hover:bg-[#F8F0E3]"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="rounded-md border border-[#98794F] bg-[#98794F] px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[#755B38]"
          >
            Register
          </Link>
        </div>

        {/* Mobile Menu Button: Login ki jagah */}
        <button
          type="button"
          onClick={() => setMenuOpen((previous) => !previous)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#E5D2B7] text-[#805C32] transition hover:bg-[#F8F0E3] md:hidden"
        >
          {menuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <nav className="border-t border-[#E8D9C0] bg-white px-[3%] py-3 shadow-lg md:hidden">
          <div className="mx-auto flex w-full max-w-[1360px] flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                onClick={(event) => handleNavClick(event, item)}
                className="flex min-h-[44px] items-center rounded-lg px-4 py-2 text-sm font-semibold text-[#4F463D] transition hover:bg-[#FBF5E6] hover:text-[#98794F]"
              >
                {item.label}
              </Link>
            ))}

            <Link
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="flex min-h-[44px] items-center rounded-lg px-4 py-2 text-sm font-semibold text-[#805C32] transition hover:bg-[#FBF5E6]"
            >
              Login
            </Link>

            <Link
              to="/register"
              onClick={() => setMenuOpen(false)}
              className="mt-1 flex min-h-[44px] items-center justify-center rounded-lg bg-[#98794F] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#755B38]"
            >
              Register
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
