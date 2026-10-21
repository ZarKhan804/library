import Header from "../components/Header";
import ContactHero from "../components/ContactHero";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <main className="min-h-screen bg-[#FDF8E9]">
      <Header />
      <ContactHero />
      <ContactForm />
      <Footer />
    </main>
  );
}