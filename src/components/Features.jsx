
import React from "react";
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

  const handleFeatureClick = (section) => {
    if (section === "Dashboard" || section === "Logout") {
      navigate("/dashboard");
      return;
    }

    navigate(`/dashboard?section=${encodeURIComponent(section)}`);
  };

  return (
    <section className="bg-[#FFFDF8] px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <span className="inline-block rounded-full border border-amber-200 bg-amber-100 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-amber-800">
            Library Workspace
          </span>

          <h2 className="mt-4 text-3xl font-black tracking-tight text-[#102A5E] sm:text-4xl">
            Explore Library Features
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
            Access your library dashboard and manage books, categories,
            members, transactions, reports, and profile settings from one place.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <button
                key={feature.section}
                type="button"
                onClick={() => handleFeatureClick(feature.section)}
                className="group flex h-full min-h-[250px] flex-col rounded-2xl border border-[#F0E3C5] bg-white p-6 text-left shadow-sm transition duration-300 hover:-translate-y-2 hover:border-amber-300 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-amber-200"
              >
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.color} text-2xl text-white shadow-lg transition duration-300 group-hover:scale-110`}
                >
                  <Icon />
                </div>

                <h3 className="mt-5 text-lg font-extrabold text-[#102A5E]">
                  {feature.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-6 text-slate-500">
                  {feature.description}
                </p>

                <div className="mt-5 flex items-center gap-2 text-sm font-bold text-blue-700">
                  {feature.section === "Logout"
                    ? "Back to Dashboard"
                    : "Open section"}

                  <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
