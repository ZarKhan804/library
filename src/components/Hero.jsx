
export default function Hero() {
  return (
    <section
      id="about"
      className="relative isolate mx-auto grid min-h-[390px] w-[92%] max-w-[1180px] grid-cols-2 items-center gap-5 bg-[#FDF8E4] py-6 max-[760px]:grid-cols-1 max-[760px]:gap-0 max-[760px]:pt-[34px] max-[760px]:pb-2"
    >
      {/* LEFT CONTENT */}
      <div className="relative z-10 pl-3 max-[760px]:pl-0">
        <span className="mb-[15px] inline-flex items-center gap-[7px] rounded-full border border-[#98794F]/20 bg-[#fffdf8] px-[11px] py-[7px] text-[9px] font-extrabold tracking-[1px] text-[#98794F]">
          <span className="h-[6px] w-[6px] rounded-full bg-[#98794F] shadow-[0_0_0_3px_rgba(152,121,79,0.09)]" />
          YOUR DIGITAL LIBRARY
        </span>

        <h1 className="m-0 text-[clamp(31px,3.1vw,45px)] font-extrabold leading-[1.1] tracking-[-1.5px] text-black max-[760px]:text-[clamp(33px,7.5vw,45px)] max-[760px]:tracking-[-1px] max-[390px]:text-[32px]">
          Welcome to
          <span className="block text-[#98794F]">
            Library Management
          </span>
          <span className="block text-[#98794F]">
            System
          </span>
        </h1>

        <p className="mt-[15px] text-[12px] leading-[1.8] text-[#5d5143]">
          Your Gateway to Knowledge and Learning, providing a smart and simple
          way to manage your library.
          <br className="max-[760px]:hidden" />

          {" "}Easily manage books, keep track of members, and organize all of
          your library resources in one place.
          <br className="max-[760px]:hidden" />

          {" "}Manage book issuing and returns efficiently while keeping your
          library records accurate and updated.
          <br className="max-[760px]:hidden" />

          {" "}Make learning easier with a modern library management system
          designed to save time and improve your daily library activities.
        </p>

        {/* BUTTONS */}
        <div className="mt-[21px] flex flex-wrap items-center gap-[10px]">
          <a
            href="#features"
            className="inline-flex min-h-9 items-center justify-center gap-3 rounded-full bg-[#98794F] px-[18px] text-[11px] font-bold text-white shadow-[0_5px_13px_rgba(152,121,79,0.19)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#755b38] hover:shadow-[0_8px_18px_rgba(152,121,79,0.21)]"
          >
            Get Started
            <span className="text-[15px]">→</span>
          </a>

          <a
            href="#features"
            className="inline-flex min-h-9 items-center justify-center gap-3 rounded-full border border-[#98794F]/40 bg-[#fffdf8] px-[18px] text-[11px] font-bold text-[#98794F] transition duration-200 hover:-translate-y-0.5 hover:bg-[#efe4d0]"
          >
            Learn More
          </a>
        </div>

        {/* NOTE */}
        <div className="mt-[19px] flex items-center gap-2 text-[10px] text-[#78664f]">
          <span className="grid h-[17px] w-[17px] place-items-center rounded-full bg-[#e6ead9] font-extrabold text-[#56613b]">
            ✓
          </span>
          Simple, smart and organized learning
        </div>
      </div>

      {/* RIGHT SIDE BANNER IMAGE */}
      <div className="relative isolate flex h-[340px] w-full max-w-[430px] items-center justify-center justify-self-end max-[760px]:mx-auto max-[760px]:mt-[15px] max-[760px]:h-[315px] max-[760px]:max-w-full max-[390px]:mb-[-25px]">
        {/* Background Glow */}
        <div className="absolute inset-[32px_10px_15px] -z-10 rounded-[48%] bg-[radial-gradient(ellipse,#e9dfca_0%,#f3ebdd_48%,transparent_74%)]" />

        {/* Decorative Orbits */}
        <div className="absolute inset-[30px_30px_20px_25px] -z-[1] rotate-[-18deg] rounded-[50%] border border-[#98794F]/20" />

        <div className="absolute inset-[52px_5px_40px_55px] -z-[1] rotate-[17deg] rounded-[50%] border border-dashed border-[#98794F]/30" />

        {/* Banner Image */}
        <img
          src="/banner.jpeg"
          alt="Library Management System"
          className="relative z-10 h-full w-full rounded-2xl object-contain drop-shadow-[0_12px_18px_rgba(96,71,39,0.10)]"
        />

        {/* Top Floating Card */}
        <div className="absolute right-0 top-[45px] z-20 flex items-center gap-[7px] rounded-xl border border-[#98794F]/15 bg-[#fffdf8] px-3 py-[9px] text-[10px] font-bold text-[#705638] shadow-[0_8px_20px_rgba(96,71,39,0.08)] max-[390px]:right-0">
          <span className="text-[15px] text-[#98794F]">✦</span>
          Knowledge
        </div>

        {/* Bottom Floating Card */}
        <div className="absolute bottom-[26px] right-1 z-20 flex items-center gap-[7px] rounded-xl border border-[#98794F]/15 bg-[#fffdf8] px-3 py-[9px] text-[10px] font-bold text-[#705638] shadow-[0_8px_20px_rgba(96,71,39,0.08)]">
          <span className="text-[15px] text-[#98794F]">✧</span>
          Explore &amp; Learn
        </div>
      </div>
    </section>
  );
}
