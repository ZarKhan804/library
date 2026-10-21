
import React from "react";
import { Mail, MessageCircle, ArrowDown, Phone } from "lucide-react";

export default function ContactHero() {
  const email = "info@library.com";
  const phone = "+923001234567";

  return (
    <section
      className="w-full overflow-hidden py-16 sm:py-20 lg:py-12"
      style={{ backgroundColor: "#FAF7EF" }}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl text-center">

          {/* Small Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#E4D8C5] bg-white/80 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-[#98794F]" />
            <span className="text-sm font-medium tracking-wide text-gray-700">
              CONTACT US
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-7xl">
            Let's Start a{" "}
            <span className="text-[#98794F]">Conversation</span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
            Have a question about our Library Management System? Need help
            with books, library services, or your account? Get in touch with
            us. We're here to help make your library experience better.
          </p>

          {/* Contact Buttons */}
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap">

            {/* Send Message */}
            <a
              href="#contact-form"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gray-900 px-7 py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-gray-700 sm:w-auto"
            >
              <Mail size={18} />
              Send Us a Message
            </a>

            {/* Call Us */}
            <a
              href={`tel:${phone}`}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#98794F] px-7 py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#755B38] sm:w-auto"
            >
              <Phone size={18} />
              Call Us
            </a>

            {/* Email Us */}
            <a
              href={`mailto:${email}`}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-gray-300 bg-white px-7 py-3.5 text-sm font-semibold text-gray-900 transition duration-300 hover:-translate-y-0.5 hover:border-gray-900 sm:w-auto"
            >
              <MessageCircle size={18} />
              Email Us
            </a>
          </div>

          {/* Scroll Note */}
          <a
            href="#contact-form"
            className="mt-10 inline-flex items-center gap-2 text-sm text-gray-500 transition hover:text-[#98794F]"
          >
            Scroll down to contact us
            <ArrowDown size={16} />
          </a>

          {/* Decorative Bottom Line */}
          <div className="mx-auto mt-10 h-1 w-20 rounded-full bg-[#C6A875]" />
        </div>
      </div>
    </section>
  );
}
