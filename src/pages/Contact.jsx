import { useState } from "react";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  Clock,
  MessageCircle,
  Globe,
  CheckCircle,
} from "lucide-react";

const contactCards = [
  {
    title: "Phone",
    value: "+252 61 0000000",
    icon: Phone,
  },
  {
    title: "Email",
    value: "info@giu.edu.so",
    icon: Mail,
  },
  {
    title: "Location",
    value: "Gedo, Somalia",
    icon: MapPin,
  },
  {
    title: "Office Hours",
    value: "Sat - Thu: 8:00 AM - 4:00 PM",
    icon: Clock,
  },
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section className="min-h-screen bg-slate-50 pb-24 pt-36 transition dark:bg-[#020617]">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="relative overflow-hidden rounded-[3rem] bg-slate-950 p-8 text-white shadow-2xl md:p-14">
          <div className="absolute inset-0 bg-gradient-to-br from-[#065F46]/80 via-slate-950 to-[#0EA5E9]/70" />
          <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-sky-400/30 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-emerald-400/30 blur-3xl" />

          <div className="relative max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-2 text-sm font-black backdrop-blur">
              <MessageCircle size={16} />
              Contact GIU
            </span>

            <h1 className="mt-6 text-4xl font-black leading-tight md:text-6xl">
              Get in Touch With Gedo International University
            </h1>

            <p className="mt-5 max-w-2xl leading-8 text-white/85">
              Have questions about admissions, programs, fees, events, or campus
              life? Send us a message and our team will respond as soon as
              possible.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {contactCards.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-2 hover:shadow-2xl dark:border-white/10 dark:bg-white/10"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#065F46] to-[#0EA5E9] text-white shadow-lg">
                  <Icon size={26} />
                </div>

                <h3 className="mt-5 text-lg font-black text-slate-900 dark:text-white">
                  {item.title}
                </h3>

                <p className="mt-2 font-semibold text-slate-600 dark:text-slate-300">
                  {item.value}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2.5rem] border border-slate-200 bg-white p-8 shadow-xl dark:border-white/10 dark:bg-white/10">
            <h2 className="text-3xl font-black text-[#065F46] dark:text-white">
              Send a Message
            </h2>

            <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
              Fill out the form below and GIU support will contact you.
            </p>

            {sent && (
              <div className="mt-6 flex items-center gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 font-bold text-emerald-700 dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-300">
                <CheckCircle size={20} />
                Message sent successfully.
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-7 space-y-4">
              <input
                required
                placeholder="Full Name"
                className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 text-slate-900 outline-none transition focus:border-[#0EA5E9] dark:border-white/10 dark:bg-slate-950/60 dark:text-white"
              />

              <input
                required
                type="email"
                placeholder="Email Address"
                className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 text-slate-900 outline-none transition focus:border-[#0EA5E9] dark:border-white/10 dark:bg-slate-950/60 dark:text-white"
              />

              <input
                placeholder="Phone Number"
                className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 text-slate-900 outline-none transition focus:border-[#0EA5E9] dark:border-white/10 dark:bg-slate-950/60 dark:text-white"
              />

              <select className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 text-slate-900 outline-none transition focus:border-[#0EA5E9] dark:border-white/10 dark:bg-slate-950/60 dark:text-white">
                <option>General Inquiry</option>
                <option>Admissions</option>
                <option>Academics</option>
                <option>Events</option>
                <option>Support</option>
              </select>

              <textarea
                required
                placeholder="Your Message"
                className="h-36 w-full resize-none rounded-2xl border border-slate-200 bg-white px-5 py-4 text-slate-900 outline-none transition focus:border-[#0EA5E9] dark:border-white/10 dark:bg-slate-950/60 dark:text-white"
              />

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#065F46] to-[#0EA5E9] px-7 py-4 font-black text-white shadow-lg transition hover:scale-105"
              >
                Send Message <Send size={18} />
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white p-3 shadow-xl dark:border-white/10 dark:bg-white/10">
              <iframe
                title="GIU Location Map"
                src="https://maps.google.com/maps?q=Gedo%20Somalia&t=&z=10&ie=UTF8&iwloc=&output=embed"
                className="h-[460px] w-full rounded-[2rem] border-0"
                loading="lazy"
              />
            </div>

            <div className="rounded-[2.5rem] bg-slate-950 p-8 text-white shadow-xl">
              <h3 className="text-2xl font-black">Connect With Us</h3>
              <p className="mt-3 text-slate-300">
                Follow GIU updates, admissions notices, and campus news.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-3 font-bold transition hover:bg-[#0EA5E9]"
                >
                  <Globe size={18} />
                  Website
                </a>

                <a
                  href="https://wa.me/252610000000"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-5 py-3 font-bold transition hover:bg-emerald-500"
                >
                  <MessageCircle size={18} />
                  WhatsApp
                </a>

                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-3 font-bold transition hover:bg-[#0EA5E9]"
                >
                  <Globe size={18} />
                  Social
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}