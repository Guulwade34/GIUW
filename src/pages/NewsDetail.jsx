import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  Calendar,
  MapPin,
  Clock,
  User,
  Mail,
  Phone,
  Send,
  CheckCircle,
  X,
} from "lucide-react";

import campus from "../assets/giu-campus.jpeg";
import classroom from "../assets/giu-classroom.jpeg";
import students from "../assets/giu-students.jpeg";

const newsData = [
  {
    id: "1",
    title: "GIU Hosts Annual Tech Conference",
    image: campus,
    date: "2026-05-12",
    time: "10:00 AM",
    location: "GIU Main Hall",
    category: "Event",
    registrationOpen: true,
    registrationStart: "2026-04-01",
    registrationEnd: "2026-05-11",
    content:
      "Gedo International University successfully hosted its annual technology conference, bringing together students, lecturers, and industry experts. The event focused on innovation, artificial intelligence, and future career opportunities in technology.",
  },
  {
    id: "2",
    title: "New Modern Classrooms Opened",
    image: classroom,
    date: "2026-04-05",
    time: "09:00 AM",
    location: "Block B",
    category: "News",
    registrationOpen: false,
    content:
      "GIU continues to improve its learning environment by introducing modern classrooms equipped with smart boards and digital tools.",
  },
  {
    id: "3",
    title: "Student Innovation Fair 2026",
    image: students,
    date: "2026-06-10",
    time: "11:00 AM",
    location: "GIU Campus",
    category: "Event",
    registrationOpen: true,
    registrationStart: "2026-04-01",
    registrationEnd: "2026-06-09",
    content:
      "Students will showcase innovative projects and ideas during the GIU Innovation Fair. The event highlights creativity, entrepreneurship, and problem-solving skills.",
  },
];

export default function NewsDetail() {
  const { id } = useParams();
  const news = newsData.find((item) => item.id === id) || newsData[0];

  const [openModal, setOpenModal] = useState(false);

  const today = new Date();
  const start = news.registrationStart ? new Date(news.registrationStart) : null;
  const end = news.registrationEnd ? new Date(news.registrationEnd) : null;

  const isRegistrationOpen =
    news.category === "Event" &&
    news.registrationOpen &&
    start &&
    end &&
    today >= start &&
    today <= end;

  return (
    <section className="min-h-screen bg-slate-50 pb-24 pt-32 dark:bg-[#020617]">
      <div className="mx-auto max-w-6xl px-5">
        <Link
          to="/news"
          className="inline-flex items-center gap-2 font-black text-[#065F46] dark:text-emerald-300"
        >
          <ArrowLeft size={18} />
          Back to News
        </Link>

        <div className="mt-6 overflow-hidden rounded-[2rem] shadow-2xl">
          <img
            src={news.image}
            alt={news.title}
            className="h-[430px] w-full object-cover"
          />
        </div>

        <div className="mt-8 rounded-[2rem] bg-white p-8 shadow-lg dark:bg-white/10">
          <span className="rounded-full bg-[#0EA5E9]/10 px-4 py-2 text-xs font-black text-[#0EA5E9]">
            {news.category}
          </span>

          <h1 className="mt-5 text-3xl font-black text-[#065F46] dark:text-white md:text-5xl">
            {news.title}
          </h1>

          <div className="mt-6 flex flex-wrap gap-6 text-sm font-semibold text-slate-600 dark:text-slate-300">
            <span className="flex items-center gap-2">
              <Calendar size={16} /> {news.date}
            </span>

            <span className="flex items-center gap-2">
              <Clock size={16} /> {news.time}
            </span>

            <span className="flex items-center gap-2">
              <MapPin size={16} /> {news.location}
            </span>
          </div>

          {news.category === "Event" && (
            <div
              className={`mt-6 rounded-2xl p-4 font-black ${
                isRegistrationOpen
                  ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-300"
                  : "bg-red-50 text-red-700 dark:bg-red-400/10 dark:text-red-300"
              }`}
            >
              {isRegistrationOpen
                ? "Registration is open for this event."
                : "Registration is currently closed for this event."}
            </div>
          )}

          <p className="mt-8 leading-8 text-slate-700 dark:text-slate-300">
            {news.content}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            {news.category === "Event" && (
              <>
                {isRegistrationOpen ? (
                  <button
                    onClick={() => setOpenModal(true)}
                    className="rounded-full bg-gradient-to-r from-[#065F46] to-[#0EA5E9] px-7 py-4 font-black text-white shadow-lg transition hover:scale-105"
                  >
                    Register for Event
                  </button>
                ) : (
                  <button
                    disabled
                    className="cursor-not-allowed rounded-full bg-slate-400 px-7 py-4 font-black text-white"
                  >
                    Registration Closed
                  </button>
                )}
              </>
            )}

            <Link
              to="/contact"
              className="rounded-full border border-slate-300 px-7 py-4 font-black text-[#065F46] dark:border-white/10 dark:text-white"
            >
              Contact
            </Link>
          </div>
        </div>

        <div className="mt-14">
          <h2 className="text-2xl font-black text-[#065F46] dark:text-white">
            Related News
          </h2>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {newsData
              .filter((item) => item.id !== news.id)
              .map((item) => (
                <Link
                  key={item.id}
                  to={`/news/${item.id}`}
                  className="group overflow-hidden rounded-[1.5rem] bg-white shadow-lg dark:bg-white/10"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-40 w-full object-cover transition group-hover:scale-105"
                  />

                  <div className="p-4">
                    <h3 className="font-black text-[#065F46] dark:text-white">
                      {item.title}
                    </h3>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>

      {openModal && (
        <EventRegistrationModal
          event={news}
          onClose={() => setOpenModal(false)}
        />
      )}
    </section>
  );
}

function EventRegistrationModal({ event, onClose }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);

      setForm({
        name: "",
        email: "",
        phone: "",
        message: "",
      });

      setTimeout(() => {
        setSubmitted(false);
        onClose();
      }, 1800);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-5 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl overflow-hidden rounded-[2rem] bg-white p-8 shadow-2xl dark:bg-slate-950">
        <button
          onClick={onClose}
          className="absolute right-5 top-5 rounded-full bg-slate-100 p-3 text-slate-700 dark:bg-white/10 dark:text-white"
        >
          <X size={20} />
        </button>

        <h2 className="text-3xl font-black text-[#065F46] dark:text-white">
          Event Registration
        </h2>

        <p className="mt-3 font-semibold text-slate-600 dark:text-slate-300">
          Register for:{" "}
          <span className="font-black text-[#0EA5E9]">{event.title}</span>
        </p>

        {submitted && (
          <div className="mt-6 flex items-center gap-3 rounded-2xl bg-emerald-50 p-4 font-bold text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-300">
            <CheckCircle size={20} />
            Registration submitted successfully.
          </div>
        )}

        <form onSubmit={handleSubmit} className="mt-7 space-y-4">
          <Input
            icon={User}
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
          />

          <Input
            icon={Mail}
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
          />

          <Input
            icon={Phone}
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
          />

          <textarea
            name="message"
            placeholder="Message / Notes"
            value={form.message}
            onChange={handleChange}
            className="h-28 w-full resize-none rounded-2xl border border-slate-200 bg-white px-5 py-4 text-slate-900 outline-none dark:border-white/10 dark:bg-white/10 dark:text-white"
          />

          <button
            disabled={loading}
            className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#065F46] to-[#0EA5E9] py-4 font-black text-white shadow-lg transition hover:scale-105 disabled:opacity-60"
          >
            {loading ? (
              <>
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                Submitting...
              </>
            ) : (
              <>
                <Send size={18} />
                Submit Registration
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

function Input({ icon: Icon, type = "text", name, placeholder, value, onChange }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-4 dark:border-white/10 dark:bg-white/10">
      <Icon className="text-[#0EA5E9]" size={20} />
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
        className="w-full bg-transparent text-slate-900 outline-none placeholder:text-slate-400 dark:text-white"
      />
    </div>
  );
}