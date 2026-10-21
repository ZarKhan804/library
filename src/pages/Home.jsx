import Header from "../components/Header";
import Hero from "../components/Hero";
import Features from "../components/Features";

export default function Home() {
  return (
    <main className="home-page min-h-screen w-full overflow-hidden bg-[#FDF8E4] text-black">
      <Header />
      <Hero />
      <Features />

      <div className="page-label">
        <span className="label-line" />
        <span>1. Home Page</span>
      </div>
    </main>
  );
}