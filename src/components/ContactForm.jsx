import { useState } from "react";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  ExternalLink,
  MapPinned,
} from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const mapUrl =
    "https://www.openstreetmap.org/?mlat=33.6938&mlon=73.0652#map=12/33.6938/73.0652";

  const embedUrl =
    "https://www.openstreetmap.org/export/embed.html?bbox=72.92%2C33.60%2C73.20%2C33.79&layer=mapnik&marker=33.6938%2C73.0652";

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  }

  return (
    <section
      id="contact-form"
      className="bg-[#FDF8E9] px-4 py-14 sm:px-6 sm:py-16"
    >
      <div className="mx-auto grid max-w-6xl items-stretch gap-8 lg:grid-cols-2 lg:gap-8">
        {/* Left Card: Contact Information + Map */}
        <div className="flex h-full flex-col rounded-3xl bg-[#061B3B] p-6 text-white shadow-xl sm:p-8">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Contact Information
          </h2>

          <p className="mt-3 leading-7 text-gray-300">
            Contact us for questions, feedback, or assistance with the Library
            Management System.
          </p>

          {/* Contact Details */}
          <div className="mt-6 space-y-4">
            <a
              href="mailto:info@library.com"
              className="group flex items-center gap-4"
            >
              <div className="shrink-0 rounded-xl bg-white/10 p-3 text-[#E0BC7D] transition group-hover:bg-[#E0BC7D] group-hover:text-[#061B3B]">
                <Mail size={20} />
              </div>

              <div className="min-w-0">
                <p className="text-sm text-gray-400">Email</p>
                <p className="break-all font-medium">info@library.com</p>
              </div>
            </a>

            <a
              href="tel:+923001234567"
              className="group flex items-center gap-4"
            >
              <div className="shrink-0 rounded-xl bg-white/10 p-3 text-[#E0BC7D] transition group-hover:bg-[#E0BC7D] group-hover:text-[#061B3B]">
                <Phone size={20} />
              </div>

              <div>
                <p className="text-sm text-gray-400">Phone</p>
                <p className="font-medium">+92 300 1234567</p>
              </div>
            </a>

            <div className="flex items-center gap-4">
              <div className="shrink-0 rounded-xl bg-white/10 p-3 text-[#E0BC7D]">
                <MapPin size={20} />
              </div>

              <div>
                <p className="text-sm text-gray-400">Location</p>
                <p className="font-medium">Islamabad, Pakistan</p>
              </div>
            </div>
          </div>

          {/* Compact Map */}
          <div className="mt-6">
            <div className="mb-3 flex items-center justify-between gap-3">
              <div>
                <h3 className="flex items-center gap-2 font-semibold">
                  <MapPinned size={18} className="text-[#E0BC7D]" />
                  Find Us on Map
                </h3>

                <p className="mt-1 text-xs text-gray-400">
                  Explore Islamabad, Pakistan
                </p>
              </div>

              <a
                href={mapUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Open Islamabad map in a new tab"
                className="rounded-lg bg-white/10 p-2 text-[#E0BC7D] transition hover:bg-[#E0BC7D] hover:text-[#061B3B]"
              >
                <ExternalLink size={17} />
              </a>
            </div>

            <div className="overflow-hidden rounded-2xl border border-white/15 bg-white/10 p-1.5 shadow-lg">
              <iframe
                title="Map of Islamabad, Pakistan"
                src={embedUrl}
                className="h-48 w-full rounded-xl border-0 sm:h-52"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>

            <a
              href={mapUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-[#E0BC7D] transition hover:text-white"
            >
              View Larger Map
              <ExternalLink size={14} />
            </a>
          </div>

          <p className="mt-auto pt-4 text-center text-xs text-gray-500">
            Map data © OpenStreetMap contributors
          </p>
        </div>

        {/* Right Card: Contact Form */}
        <div className="flex h-full flex-col rounded-3xl border border-[#E8D9C0] bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-2xl font-bold text-[#102F50] sm:text-3xl">
            Send Us a Message
          </h2>

          <p className="mt-3 leading-7 text-gray-600">
            Fill out the form below and let us know how we can help.
          </p>

          {submitted && (
            <div
              role="status"
              className="mt-5 rounded-xl border border-green-200 bg-green-50 p-3 text-sm leading-6 font-medium text-green-800"
            >
              Form submitted successfully! Please connect an email service to
              deliver your message.
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="mt-6 flex flex-1 flex-col space-y-4"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Full Name
                </label>

                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  autoComplete="name"
                  required
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-[#98794F] focus:ring-2 focus:ring-[#98794F]/20"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Email Address
                </label>

                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  autoComplete="email"
                  required
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-[#98794F] focus:ring-2 focus:ring-[#98794F]/20"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="contact-subject"
                className="mb-2 block text-sm font-semibold text-gray-700"
              >
                Subject
              </label>

              <input
                id="contact-subject"
                type="text"
                name="subject"
                placeholder="Enter message subject"
                required
                className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-[#98794F] focus:ring-2 focus:ring-[#98794F]/20"
              />
            </div>

            <div>
              <label
                htmlFor="contact-message"
                className="mb-2 block text-sm font-semibold text-gray-700"
              >
                Your Message
              </label>

              <textarea
                id="contact-message"
                name="message"
                rows={4}
                placeholder="Write your message here..."
                required
                className="w-full resize-y rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-[#98794F] focus:ring-2 focus:ring-[#98794F]/20"
              />
            </div>

            <div className="pt-1">
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#98794F] px-7 py-3.5 font-semibold text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-[#755B38] sm:w-auto"
              >
                Send Message
                <Send size={18} />
              </button>

              <div className="mt-5 rounded-xl border border-[#E8D9C0] bg-[#FDF8E9] p-4">
                <h3 className="text-sm font-bold text-[#102F50]">
                  📚 Q: Why use a Library Management System?
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  It helps manage books, track availability, and organize
                  library records easily.
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
