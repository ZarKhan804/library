
import { ArrowRight, BookOpen, LibraryBig } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#FBF6EA]">
      <div className="mx-auto grid min-h-[500px] max-w-7xl items-center gap-10 px-5 py-12 sm:px-8 lg:grid-cols-2 lg:px-10 lg:py-16">
        {/* Left Content */}
        <div className="relative z-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#E5D2AC] bg-white px-4 py-2 text-sm font-semibold text-[#987039]">
            <LibraryBig size={17} />
            ABOUT OUR LIBRARY
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-[#102F50] sm:text-5xl lg:text-[54px]">
            Smart Library
            <span className="mt-2 block text-[#B18443]">
              Management System
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
            Discover a smarter way to organize books, manage members,
            track book transactions, and simplify everyday library
            operations through one organized system.
          </p>

          <div className="mt-7 flex flex-wrap gap-4">
            <a
              href="#about-content"
              className="inline-flex items-center gap-2 rounded-xl bg-[#102F50] px-6 py-3.5 font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#183F65]"
            >
              Explore Features
              <ArrowRight size={19} />
            </a>

            <a
              href="#about-content"
              className="inline-flex items-center gap-2 rounded-xl border border-[#D8C29A] bg-white px-6 py-3.5 font-semibold text-[#102F50] transition hover:bg-[#F4E8D1]"
            >
              <BookOpen size={19} />
              Learn More
            </a>
          </div>

          <div className="mt-9 flex flex-wrap gap-x-7 gap-y-4 text-sm font-medium text-[#42546A]">
            <span className="flex items-center gap-2">
              <BookOpen size={18} className="text-[#B18443]" />
              Book Management
            </span>

            <span className="flex items-center gap-2">
              <LibraryBig size={18} className="text-[#B18443]" />
              Library Operations
            </span>
          </div>
        </div>

        {/* Right Banner Image */}
        <div className="relative mx-auto w-full max-w-xl">
          <div className="absolute -inset-4 rounded-[32px] bg-[#D9BD87]/30 blur-2xl" />

          <div className="relative overflow-hidden rounded-[26px] border-4 border-white shadow-[0_25px_65px_rgba(16,47,80,0.16)]">
            <img
              src="/about.jpeg"
              alt="Library Management System"
              className="block h-[300px] w-full object-cover sm:h-[390px] lg:h-[430px]"
              fetchPriority="high"
            />
          </div>

          <div className="absolute -bottom-5 left-4 right-4 rounded-2xl border border-[#E9DFC9] bg-white/95 p-4 shadow-xl backdrop-blur sm:left-8 sm:right-8">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#102F50] text-white">
                <LibraryBig size={25} />
              </div>

              <div>
                <h3 className="font-bold text-[#102F50]">
                  Your Library, Organized
                </h3>
                <p className="mt-1 text-sm text-slate-500">
                  Simple, smart and efficient management
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
