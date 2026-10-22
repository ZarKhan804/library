
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaChartPie,
  FaBook,
  FaLayerGroup,
  FaUsers,
  FaExchangeAlt,
  FaChartBar,
  FaUserCircle,
  FaArrowRight,
  FaSignOutAlt,
} from "react-icons/fa";

const features = [
  {
    title: "Dashboard",
    description:
      "View library statistics, recent activities, and a complete overview.",
    icon: FaChartPie,
    color: "from-blue-600 to-blue-800",
    section: "Dashboard",
  },
  {
    title: "Manage Books",
    description:
      "Add new books, update book details, search records, and manage stock.",
    icon: FaBook,
    color: "from-emerald-500 to-emerald-700",
    section: "Books",
  },
  {
    title: "Categories",
    description:
      "Organize book collections and manage category information.",
    icon: FaLayerGroup,
    color: "from-violet-500 to-violet-700",
    section: "Categories",
  },
  {
    title: "Members",
    description:
      "View, add, edit, and manage registered library members.",
    icon: FaUsers,
    color: "from-amber-500 to-orange-600",
    section: "Members",
  },
  {
    title: "Transactions",
    description:
      "Issue books, track borrowed books, and process returns.",
    icon: FaExchangeAlt,
    color: "from-cyan-500 to-blue-600",
    section: "Transactions",
  },
  {
    title: "Reports",
    description:
      "Review inventory, issued books, overdue records, and library statistics.",
    icon: FaChartBar,
    color: "from-rose-500 to-pink-700",
    section: "Reports",
  },
  {
    title: "Profile",
    description:
      "View and update your library administrator profile information.",
    icon: FaUserCircle,
    color: "from-indigo-500 to-purple-700",
    section: "Profile",
  },
  {
    title: "Logout",
    description:
      "Return to your library dashboard and access your workspace.",
    icon: FaSignOutAlt,
    color: "from-red-500 to-rose-700",
    section: "Logout",
  },
];

export default function Features() {
  const navigate = useNavigate();

  // Footer ke hash link se sahi feature card tak scroll karein.
  useEffect(() => {
    let animationFrame;
    let attempts = 0;
    let cancelled = false;

    const scrollToFeature = () => {
      if (cancelled) return;

      const hash = window.location.hash;

      if (!hash) return;

      const targetId = decodeURIComponent(hash.slice(1));

      const target = document.getElementById(targetId);

      if (target) {
        target.scrollIntoView({
          behavior: "auto",
          block: "center",
        });

        return;
      }

      // React ke render hone tak next frame mein check karein.
      attempts += 1;

      if (attempts < 120) {
        animationFrame = requestAnimationFrame(scrollToFeature);
      }
    };

    animationFrame = requestAnimationFrame(scrollToFeature);

    return () => {
      cancelled = true;
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  const handleFeatureClick = (section) => {
    if (section === "Dashboard" || section === "Logout") {
      navigate("/dashboard");
      return;
    }

    navigate(`/dashboard?section=${encodeURIComponent(section)}`);
  };

  return (
    <section
      id="features"
      className="w-full scroll-mt-20 bg-[#FFFDF8] px-4 py-10 sm:px-6 sm:py-12 lg:px-8"
    >
      <div className="mx-auto w-full max-w-6xl">
        {/* Section Heading */}
        <div className="mx-auto mb-8 max-w-2xl text-center sm:mb-9">
          <span className="inline-block rounded-full border border-amber-200 bg-amber-100 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.16em] text-amber-800 sm:px-4 sm:py-2 sm:text-xs">
            Library Workspace
          </span>

          <h2 className="mt-3 text-2xl font-black tracking-tight text-[#102A5E] sm:mt-4 sm:text-3xl md:text-4xl">
            Explore Library Features
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-xs leading-6 text-slate-600 sm:text-sm sm:leading-7">
            Access your library dashboard and manage books, categories,
            members, transactions, reports, and profile settings from one place.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 justify-items-center gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-5">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <button
                id={`feature-${feature.section.toLowerCase()}`}
                key={feature.section}
                type="button"
                onClick={() => handleFeatureClick(feature.section)}
                className="group flex min-h-[215px] w-full max-w-[320px] flex-col items-center rounded-xl border border-[#F0E3C5] bg-white p-4 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:border-amber-300 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-amber-200 sm:min-h-[225px] sm:p-5 lg:min-h-[220px] lg:p-4 xl:p-5"
              >
                {/* Centered Icon */}
                <div
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${feature.color} text-xl text-white shadow-md transition duration-300 group-hover:scale-105 sm:h-12 sm:w-12`}
                >
                  <Icon />
                </div>

                {/* Centered Title */}
                <h3 className="mt-4 w-full text-center text-base font-extrabold text-[#102A5E] sm:text-lg">
                  {feature.title}
                </h3>

                {/* Centered Description */}
                <p className="mt-2 w-full flex-1 text-center text-xs leading-5 text-slate-500 sm:text-sm sm:leading-6">
                  {feature.description}
                </p>

                {/* Centered Action */}
                <div className="mt-4 flex items-center justify-center gap-2 text-center text-xs font-bold text-blue-700 sm:text-sm">
                  {feature.section === "Logout"
                    ? "Back to Dashboard"
                    : "Open section"}

                  <FaArrowRight className="shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
