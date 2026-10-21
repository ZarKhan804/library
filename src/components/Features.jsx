import {
  FaTachometerAlt,
  FaBook,
  FaLayerGroup,
  FaUsers,
  FaExchangeAlt,
  FaChartBar,
  FaUserCircle,
  FaSignOutAlt,
} from "react-icons/fa";

const features = [
  {
    title: "Dashboard",
    description: "View your library overview and important statistics.",
    icon: <FaTachometerAlt />,
  },
  {
    title: "Manage Books",
    description: "Add, update and manage books in your library.",
    icon: <FaBook />,
  },
  {
    title: "Categories",
    description: "Organize books into different categories easily.",
    icon: <FaLayerGroup />,
  },
  {
    title: "Track Members",
    description: "Manage member records and track their activity.",
    icon: <FaUsers />,
  },
  {
    title: "Transactions",
    description: "Manage book issuing and returning transactions.",
    icon: <FaExchangeAlt />,
  },
  {
    title: "Reports",
    description: "View useful reports for better library management.",
    icon: <FaChartBar />,
  },
  {
    title: "Profile",
    description: "View and manage your personal account details.",
    icon: <FaUserCircle />,
  },
  {
    title: "Logout",
    description: "Securely log out of your library management account.",
    icon: <FaSignOutAlt />,
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="w-full scroll-mt-20 bg-[#fffdf8] px-5 py-10 sm:py-12"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-7 text-center">
          <div className="mb-2 flex items-center justify-center gap-3 text-[#b88945]">
            <span className="h-px w-20 bg-[#c69a5b]" />
            <FaBook className="text-xl" />
            <span className="h-px w-20 bg-[#c69a5b]" />
          </div>

          <h2 className="text-3xl font-bold text-[#12345b] sm:text-4xl">
            Our Features
          </h2>

          <p className="mt-2 text-sm text-[#98774c] sm:text-base">
            Manage your library easily with our simple and efficient system.
          </p>
        </div>

      {/* Eight Feature Cards */}
<div className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
  {features.map((feature) => (
    <div
      key={feature.title}
      className="group flex min-h-[180px] flex-col items-center justify-center rounded-xl border border-[#f1e5d2] bg-white/60 px-4 py-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#c69a5b] hover:bg-[#fff8ec] hover:shadow-lg"
    >
      {/* Icon */}
      <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-[#f9edd8] text-2xl text-[#a47b42] transition-colors duration-300 group-hover:bg-[#a47b42] group-hover:text-white">
        {feature.icon}
      </div>

      {/* Title */}
      <h3 className="mb-2 text-base font-bold text-[#12345b]">
        {feature.title}
      </h3>

      {/* Description */}
      <p className="max-w-[220px] text-sm leading-5 text-gray-600">
        {feature.description}
      </p>
    </div>
  ))}
</div>


      </div>
    </section>
  );
}