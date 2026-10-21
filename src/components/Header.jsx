
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="h-[72px] w-full border-b border-[#98794F]/20 bg-[#FDF8E4]">
      <div className="mx-auto flex h-full w-[86%] max-w-[1200px] items-center justify-between max-md:w-[94%]">

        {/* Left Logo and Brand */}
        <Link
          to="/"
          className="ml-7 flex items-center gap-[10px] max-md:ml-0"
        >
          <img
            src="/logo.png"
            alt="Library Management System Logo"
            className="h-11 w-15 shrink-0 rounded-[11px] bg-[#98794F] object-contain shadow-[0_4px_12px_rgba(152,121,79,0.14)] transition duration-300 hover:-translate-y-0.5"
          />

          <div className="flex h-auto flex-col justify-start max-md:h-11 max-md:justify-between">
            <strong className="block text-base font-bold leading-normal text-[#98794F] max-md:text-[11px] max-md:leading-4 max-[380px]:text-[10px]">
              <span className="inline">Library Management </span>
              <span className="inline max-md:block">System</span>
            </strong>

            <small className="block text-[11px] leading-normal text-[#6f5a3d] max-md:leading-none max-md:text-[8px] max-[380px]:text-[7px]">
              Knowledge Begins Here
            </small>
          </div>
        </Link>

        {/* Right Login Section */}
        <div className="mr-7 flex items-center gap-4 max-md:mr-0 max-md:gap-2">
          <span className="text-right text-sm font-medium text-[#6f5a3d] max-md:hidden">
            Login to Get Started
          </span>

          <Link
            to="/login"
            className="flex shrink-0 items-center gap-[7px] rounded-lg bg-[#98794F] px-5 py-[10px] text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#755C38] max-md:px-[15px] max-md:py-[9px] max-md:text-[13px] max-[380px]:px-3 max-[380px]:py-2"
          >
            Login
            <span className="transition-transform duration-300 group-hover:translate-x-0.5">
              ↗
            </span>
          </Link>
        </div>

      </div>
    </header>
  );
}
