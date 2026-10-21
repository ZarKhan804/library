
import { Link, useNavigate } from "react-router-dom";
import { BookOpen } from "lucide-react";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/#about" },
  { label: "Feature", to: "/#features" },
  { label: "Contact", to: "/contact" },
];

export default function Header() {
  const navigate = useNavigate();

  const handleNavClick = (event, item) => {
    if (item.to.includes("#")) {
      event.preventDefault();

      const [path, hash] = item.to.split("#");
      const targetId = hash;

      // Same page par ho to directly scroll karein
      if (window.location.pathname === path || (path === "/" && window.location.pathname === "/")) {
        const target = document.getElementById(targetId);

        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        } else {
          window.location.hash = targetId;
        }
      } else {
        // Doosre page se Home ke section par jaayein
        navigate(path || "/");

        setTimeout(() => {
          const target = document.getElementById(targetId);

          if (target) {
            target.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          } else {
            window.location.hash = targetId;
          }
        }, 300);
      }
    }
  };

  return (
    <header className="sticky top-0 z-30 h-[66px] w-full shrink-0 border-b border-[#E8D9C0] bg-white">
      <div className="mx-auto flex h-full w-[94%] max-w-[1360px] items-center justify-between gap-3">

        {/* Logo and Brand */}
        <Link to="/" className="flex min-w-0 shrink-0 items-center gap-2">
          <BookOpen
            className="h-8 w-9 shrink-0 text-[#A87838] sm:h-9 sm:w-10"
            strokeWidth={1.8}
          />

          <span className="text-[11px] font-extrabold leading-tight text-[#402914] sm:text-base md:text-lg">
            Library Management System
          </span>
        </Link>

        {/* Center Navigation */}
        <nav className="hidden h-full items-center gap-3 md:flex lg:gap-5">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              onClick={(event) => handleNavClick(event, item)}
              className={`flex h-[42px] items-center rounded-lg border px-3 text-[15px] font-semibold transition-all duration-200 lg:px-4 lg:text-base ${
                item.label === "Home"
                  ? "border-[#DCC6A5] bg-[#FBF5E6] text-[#98794F]"
                  : "border-transparent text-[#4F463D] hover:border-[#DCC6A5] hover:bg-[#FBF5E6] hover:text-[#98794F]"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Login and Register */}
        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <Link
            to="/login"
            className="rounded-md border border-[#E5D2B7] px-3 py-2 text-xs font-semibold text-[#805C32] transition hover:bg-[#F8F0E3] sm:px-5 sm:text-sm"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="rounded-md border border-[#98794F] bg-[#98794F] px-3 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-[#755B38] sm:px-5 sm:text-sm"
          >
            Register
          </Link>
        </div>

      </div>
    </header>
  );
}
