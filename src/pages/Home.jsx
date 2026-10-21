import Header from "../components/Header";
import Hero from "../components/Hero";
import Features from "../components/Features";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-[#FBF5E6] text-[#102F50]">
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* Features Section - Hero ke neeche */}
      <Features />
    </main>
  );
}