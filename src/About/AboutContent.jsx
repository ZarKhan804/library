
import React from "react";

const modules = [
  {
    title: "Dashboard Overview",
    description: "Monitor library activities, statistics and daily performance.",
    icon: "📊",
    position: "dashboard",
    theme: "blue",
  },
  {
    title: "Manage Books",
    description: "Add, edit, organize and maintain your complete book collection.",
    icon: "📚",
    position: "books",
    theme: "gold",
  },
  {
    title: "Categories & Inventory",
    description: "Organize categories, track stock and manage inventory.",
    icon: "🗄️",
    position: "inventory",
    theme: "gold",
  },
  {
    title: "Track Members",
    description: "Manage members, issue cards and monitor lending history.",
    icon: "👥",
    position: "members",
    theme: "blue",
  },
  {
    title: "Transaction Reports",
    description: "Review book issues, returns and detailed library reports.",
    icon: "📑",
    position: "reports",
    theme: "blue",
  },
  {
    title: "Profile & Security",
    description: "Protect user accounts with secure access and profile controls.",
    icon: "🛡️",
    position: "security",
    theme: "blue",
  },
];

function LibraryNode({ item }) {
  const isGold = item.theme === "gold";

  return (
    <div className={`node-${item.position} absolute z-10 flex items-center gap-3`}>
      <div
        className={`node-icon shrink-0 flex items-center justify-center rounded-full ${
          isGold ? "gold-node" : "blue-node"
        }`}
      >
        <div className="node-icon-inner flex items-center justify-center rounded-full">
          <span>{item.icon}</span>
        </div>
      </div>

      <div
        className={`node-info min-w-0 ${
          item.position === "security" || item.position === "reports"
            ? "text-right"
            : ""
        }`}
      >
        <h3
          className={`inline-block rounded-full px-4 py-2 text-sm md:text-base font-extrabold leading-tight shadow-md ${
            isGold
              ? "bg-gradient-to-r from-yellow-400 to-amber-500 text-[#102a5e]"
              : "bg-gradient-to-r from-[#102a5e] to-[#1553a5] text-white"
          }`}
        >
          {item.title}
        </h3>

        <p className="mt-2 text-xs md:text-sm leading-relaxed text-[#102a5e]">
          {item.description}
        </p>
      </div>
    </div>
  );
}

export default function AboutContent() {
  return (
    <section className="library-banner relative isolate w-full overflow-hidden bg-[#FBF6EA] px-4 py-12 md:py-16">
      {/* Decorative dots only; no colored background glow */}
      <div className="absolute right-6 top-8 grid grid-cols-5 gap-2 opacity-60 md:right-12">
        {Array.from({ length: 25 }).map((_, i) => (
          <span
            key={i}
            className="h-1.5 w-1.5 rounded-full bg-amber-400"
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-[1250px]">
        {/* Banner heading */}
        <div className="text-center">
          <div className="mb-4 flex items-center justify-center gap-4">
            <span className="hidden h-[2px] w-12 bg-amber-500 sm:block md:w-20" />

            <span className="rounded-full bg-[#FBF6EA] px-5 py-2 text-[10px] font-black tracking-[0.2em] text-[#102a5e] shadow-md sm:text-xs md:text-sm">
              LIBRARY MANAGEMENT SYSTEM
            </span>

            <span className="hidden h-[2px] w-12 bg-amber-500 sm:block md:w-20" />
          </div>

          <h2 className="text-3xl font-black leading-tight tracking-tight text-[#102a5e] sm:text-4xl md:text-6xl">
            Inside Our Smart <br />
            <br className="sm:hidden" /> Library Ecosystem
          </h2>

          <p className="mt-3 text-lg font-extrabold text-[#c58b00] sm:text-2xl md:text-3xl">
            One System, Complete Library Control.
          </p>
        </div>

        {/* Diagram */}
        <div className="diagram-scroll mt-8 md:mt-10">
          <div className="diagram-stage relative mx-auto h-[740px] w-full max-w-[1100px] md:h-[690px]">
            {/* Diagram arrows */}
            <svg
              className="pointer-events-none absolute inset-0 z-[1] h-full w-full overflow-visible"
              viewBox="0 0 1000 690"
              preserveAspectRatio="none"
              fill="none"
              aria-label="Library modules connected through directional arrows"
              role="img"
            >
              <defs>
                <linearGradient id="goldArrow" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#facc15" />
                  <stop offset="100%" stopColor="#d99100" />
                </linearGradient>

                <linearGradient id="blueArrow" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#102a5e" />
                  <stop offset="100%" stopColor="#2875c7" />
                </linearGradient>

                <marker
                  id="goldTip"
                  markerWidth="9"
                  markerHeight="9"
                  refX="7"
                  refY="4"
                  orient="auto"
                >
                  <path d="M0 0 L8 4 L0 8 Z" fill="#eab308" />
                </marker>

                <marker
                  id="blueTip"
                  markerWidth="9"
                  markerHeight="9"
                  refX="7"
                  refY="4"
                  orient="auto"
                >
                  <path d="M0 0 L8 4 L0 8 Z" fill="#102a5e" />
                </marker>
              </defs>

              {/* Outer circular workflow */}
              <path d="M520 95 C620 85 720 125 785 205" stroke="url(#goldArrow)" strokeWidth="4" markerEnd="url(#goldTip)" />
              <path d="M835 255 C875 330 845 400 790 447" stroke="url(#blueArrow)" strokeWidth="4" markerEnd="url(#blueTip)" />
              <path d="M740 510 C685 590 590 618 520 605" stroke="url(#goldArrow)" strokeWidth="4" markerEnd="url(#goldTip)" />
              <path d="M465 605 C365 615 275 570 220 510" stroke="url(#blueArrow)" strokeWidth="4" markerEnd="url(#blueTip)" />
              <path d="M170 440 C120 365 125 300 170 245" stroke="url(#goldArrow)" strokeWidth="4" markerEnd="url(#goldTip)" />
              <path d="M220 190 C290 110 375 82 465 95" stroke="url(#blueArrow)" strokeWidth="4" markerEnd="url(#blueTip)" />

              {/* Inner connections */}
              <path d="M500 155 Q580 200 610 265" stroke="#eab308" strokeWidth="3" markerEnd="url(#goldTip)" />
              <path d="M650 300 Q720 330 740 400" stroke="#102a5e" strokeWidth="3" markerEnd="url(#blueTip)" />
              <path d="M705 470 Q630 515 560 530" stroke="#eab308" strokeWidth="3" markerEnd="url(#goldTip)" />
              <path d="M445 530 Q360 515 300 470" stroke="#102a5e" strokeWidth="3" markerEnd="url(#blueTip)" />
              <path d="M265 400 Q290 325 350 300" stroke="#eab308" strokeWidth="3" markerEnd="url(#goldTip)" />
              <path d="M390 265 Q420 200 480 155" stroke="#102a5e" strokeWidth="3" markerEnd="url(#blueTip)" />

              {/* Extra directional arrows */}
              <path d="M555 120 Q645 120 700 170" stroke="#102a5e" strokeWidth="2" strokeDasharray="5 7" markerEnd="url(#blueTip)" />
              <path d="M820 300 Q850 350 820 390" stroke="#eab308" strokeWidth="2" strokeDasharray="5 7" markerEnd="url(#goldTip)" />
              <path d="M700 540 Q630 585 570 585" stroke="#102a5e" strokeWidth="2" strokeDasharray="5 7" markerEnd="url(#blueTip)" />
              <path d="M420 585 Q340 575 290 530" stroke="#eab308" strokeWidth="2" strokeDasharray="5 7" markerEnd="url(#goldTip)" />
              <path d="M150 390 Q130 340 150 290" stroke="#102a5e" strokeWidth="2" strokeDasharray="5 7" markerEnd="url(#blueTip)" />
              <path d="M290 150 Q360 105 425 105" stroke="#eab308" strokeWidth="2" strokeDasharray="5 7" markerEnd="url(#goldTip)" />

              {/* Central hub connectors */}
              <path d="M500 220 L500 260" stroke="#eab308" strokeWidth="3" strokeDasharray="4 5" />
              <path d="M625 345 L670 345" stroke="#eab308" strokeWidth="3" strokeDasharray="4 5" />
              <path d="M500 440 L500 480" stroke="#102a5e" strokeWidth="3" strokeDasharray="4 5" />
              <path d="M330 345 L375 345" stroke="#102a5e" strokeWidth="3" strokeDasharray="4 5" />

              {/* Connector points */}
              {[
                [500, 220],
                [625, 345],
                [500, 480],
                [375, 345],
                [690, 170],
                [790, 430],
                [310, 170],
                [210, 430],
              ].map(([cx, cy], i) => (
                <circle
                  key={i}
                  cx={cx}
                  cy={cy}
                  r="5"
                  fill={i % 2 === 0 ? "#eab308" : "#102a5e"}
                  stroke="#fff9dc"
                  strokeWidth="2"
                />
              ))}
            </svg>

            {/* Central library hub */}
            <div className="central-hub absolute left-1/2 top-1/2 z-[5] flex -translate-x-1/2 -translate-y-1/2 items-center justify-center">
              <div className="hub-ring absolute rounded-full" />
              <div className="hub-ring hub-ring-two absolute rounded-full" />

              <div className="hub-circle relative flex flex-col items-center justify-center rounded-full text-center">
                <div className="mb-1 text-5xl drop-shadow-lg md:text-6xl">
                  🏛️
                </div>

                <div className="text-2xl font-black tracking-wider text-yellow-300 md:text-3xl">
                  LIBRARY
                </div>

                <div className="mt-2 h-1 w-16 rounded-full bg-gradient-to-r from-yellow-300 via-white to-yellow-300" />

                <p className="mt-2 text-[9px] font-bold uppercase tracking-[0.2em] text-blue-100 md:text-[10px]">
                  Central Control
                </p>
              </div>
            </div>

            {/* Six connected modules */}
            {modules.map((item) => (
              <LibraryNode key={item.position} item={item} />
            ))}
          </div>
        </div>

        {/* Footer strip */}
        <div className="mx-auto mt-6 flex max-w-4xl flex-wrap items-center justify-center gap-3 text-center">
          <span className="hidden h-[2px] min-w-8 flex-1 bg-gradient-to-r from-transparent to-amber-500 sm:block" />

          <span className="text-2xl">🎓</span>

          <p className="text-[10px] font-bold tracking-[0.12em] text-[#102a5e] sm:text-xs md:text-sm md:tracking-[0.2em]">
            PROFESSIONAL UNIVERSITY PROJECT
            <span className="mx-2 text-amber-500">•</span>
            COMSATS
            <span className="mx-2 text-amber-500">•</span>
            SESSION 2023–2027
          </p>

          <span className="hidden h-[2px] min-w-8 flex-1 bg-gradient-to-l from-transparent to-amber-500 sm:block" />
        </div>
      </div>

      <style>{`
        .library-banner {
          background-color: #FBF6EA !important;
          background-image: none !important;
        }

        .diagram-stage {
          isolation: isolate;
        }

        .central-hub {
          width: 245px;
          height: 245px;
        }

        .hub-ring {
          inset: -9px;
          border: 2px solid rgba(234, 179, 8, 0.85);
          box-shadow: 0 0 20px rgba(234, 179, 8, 0.24);
          border-radius: 50%;
        }

        .hub-ring-two {
          inset: -20px;
          border: 1px dashed rgba(16, 42, 94, 0.45);
          animation: hub-rotate 35s linear infinite;
        }

        .hub-circle {
          width: 215px;
          height: 215px;
          border: 9px solid #eab308;
          outline: 3px solid #fff4bf;
          background: radial-gradient(
            circle at 30% 20%,
            #164a91 0%,
            #102a5e 52%,
            #06142f 100%
          );
          box-shadow:
            0 0 0 5px rgba(234, 179, 8, 0.24),
            0 18px 35px rgba(16, 42, 94, 0.32),
            inset 0 2px 14px rgba(255, 255, 255, 0.18);
        }

        .node-icon {
          width: 112px;
          height: 112px;
          padding: 7px;
          box-shadow: 0 12px 22px rgba(16, 42, 94, 0.22);
          transform: perspective(500px) rotateX(8deg);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .node-icon:hover {
          transform: perspective(500px) rotateX(0deg) translateY(-5px);
          box-shadow: 0 18px 28px rgba(16, 42, 94, 0.3);
        }

        .blue-node {
          background: linear-gradient(
            145deg,
            #fff5c5,
            #eab308 45%,
            #102a5e 47%,
            #174a89
          );
        }

        .gold-node {
          background: linear-gradient(
            145deg,
            #fff8d8,
            #facc15 42%,
            #c98700 75%,
            #fff0a1
          );
        }

        .node-icon-inner {
          width: 100%;
          height: 100%;
          border: 2px solid rgba(255, 255, 255, 0.7);
          background: radial-gradient(
            circle at 30% 20%,
            #2768ad,
            #102a5e 75%
          );
          box-shadow: inset 0 0 14px rgba(0, 0, 0, 0.2);
          font-size: 42px;
        }

        .gold-node .node-icon-inner {
          background: radial-gradient(
            circle at 30% 20%,
            #fff0a6,
            #facc15 50%,
            #d99500
          );
        }

        .node-dashboard {
          top: 0;
          left: 50%;
          width: 300px;
          transform: translateX(-50%);
          flex-direction: column;
          text-align: center;
        }

        .node-dashboard .node-info,
        .node-members .node-info {
          text-align: center;
        }

        .node-books {
          top: 19%;
          right: 0;
          width: 360px;
        }

        .node-inventory {
          right: 0;
          bottom: 17%;
          width: 370px;
        }

        .node-members {
          bottom: -1%;
          left: 50%;
          width: 300px;
          transform: translateX(-50%);
          flex-direction: column;
          text-align: center;
        }

        .node-reports {
          bottom: 17%;
          left: 0;
          width: 370px;
          flex-direction: row-reverse;
        }

        .node-security {
          top: 19%;
          left: 0;
          width: 360px;
          flex-direction: row-reverse;
        }

        @keyframes hub-rotate {
          to {
            transform: rotate(360deg);
          }
        }

        @media (min-width: 768px) {
          .node-dashboard {
            left: 50%;
          }

          .node-books {
            right: 0;
          }

          .node-inventory {
            right: 0;
          }

          .node-security {
            left: 0;
          }

          .node-reports {
            left: 0;
          }
        }

        @media (max-width: 767px) {
          .diagram-scroll {
            overflow-x: auto;
            overflow-y: hidden;
            margin-left: -16px;
            margin-right: -16px;
            padding: 0 10px 12px;
            scrollbar-width: thin;
            scrollbar-color: #eab308 #fff6d7;
          }

          .diagram-stage {
            width: 760px;
            max-width: none;
            height: 690px;
          }

          .central-hub {
            width: 180px;
            height: 180px;
          }

          .hub-circle {
            width: 155px;
            height: 155px;
            border-width: 7px;
          }

          .hub-circle > div:first-child {
            font-size: 36px;
          }

          .hub-circle > div:nth-child(2) {
            font-size: 21px;
          }

          .hub-ring-two {
            inset: -14px;
          }

          .node-icon {
            width: 76px;
            height: 76px;
            padding: 5px;
          }

          .node-icon-inner {
            font-size: 29px;
          }

          .node-dashboard {
            width: 200px;
            top: 0;
          }

          .node-dashboard .node-icon {
            width: 82px;
            height: 82px;
          }

          .node-books {
            right: 0;
            top: 19%;
            width: 280px;
          }

          .node-inventory {
            right: 0;
            bottom: 16%;
            width: 290px;
          }

          .node-members {
            bottom: -1%;
            width: 220px;
          }

          .node-reports {
            left: 0;
            bottom: 16%;
            width: 290px;
          }

          .node-security {
            left: 0;
            top: 19%;
            width: 280px;
          }

          .node-info h3 {
            font-size: 12px;
            padding: 7px 10px;
          }

          .node-info p {
            font-size: 11px;
            line-height: 1.4;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hub-ring-two {
            animation: none;
          }

          .node-icon {
            transition: none;
          }
        }
      `}</style>
    </section>
  );
}
