import { useState } from "react";
import {
  Calendar,
  Clock,
  Mail,
  MessageSquare,
  Send,
  User,
} from "lucide-react";

export default function BookingForm({ lecturer }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
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
        date: "",
        time: "",
        message: "",
      });

      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    }, 1200);
  };

  return (
    <section className="relative overflow-hidden rounded-[3rem] bg-slate-950 p-8 text-white shadow-2xl md:p-14">
      <div className="absolute inset-0 bg-gradient-to-br from-[#065F46]/80 via-slate-950 to-[#0EA5E9]/70" />
      <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-sky-400/30 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-emerald-400/30 blur-3xl" />

      <div className="relative grid gap-10 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-black md:text-4xl">
            Book Appointment
          </h2>

          <p className="mt-4 text-white/80">
            Schedule a meeting with{" "}
            <span className="font-bold text-emerald-300">{lecturer.name}</span>{" "}
            for academic guidance, consultation, or support.
          </p>

          <div className="mt-8 space-y-5">
            <Feature icon={User} text="Direct lecturer communication" />
            <Feature icon={Calendar} text="Flexible date selection" />
            <Feature icon={Clock} text="Choose your preferred time" />
            <Feature icon={MessageSquare} text="Add custom message" />
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-5 rounded-[2rem] border border-white/15 bg-white/10 p-8 backdrop-blur-xl"
        >
          {submitted && (
            <div className="rounded-xl bg-emerald-400/20 p-4 text-center font-bold text-emerald-300">
              Booking submitted successfully ✅
            </div>
          )}

          <Input
            icon={User}
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
          />

          <Input
            icon={Mail}
            name="email"
            type="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
          />

          <div className="grid grid-cols-2 gap-3">
            <Input
              icon={Calendar}
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
            />

            <Input
              icon={Clock}
              type="time"
              name="time"
              value={form.time}
              onChange={handleChange}
            />
          </div>

          <div className="flex items-start gap-3 rounded-xl bg-white/10 p-4">
            <MessageSquare className="mt-1 text-white/60" />
            <textarea
              name="message"
              placeholder={`Message to ${lecturer.name}`}
              value={form.message}
              onChange={handleChange}
              className="w-full bg-transparent text-white outline-none placeholder:text-white/50"
              rows={4}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#065F46] to-[#0EA5E9] py-4 font-black text-white shadow-xl transition hover:scale-105 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? (
              <>
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                Processing...
              </>
            ) : (
              <>
                <Send size={18} />
                Confirm Booking
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}

function Feature({ icon: Icon, text }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15">
        <Icon size={18} />
      </div>
      <p className="font-semibold text-white/85">{text}</p>
    </div>
  );
}

function Input({
  icon: Icon,
  type = "text",
  name,
  placeholder,
  value,
  onChange,
}) {
  return (
    <div className="flex items-center gap-3 rounded-xl bg-white/10 p-4">
      <Icon className="text-white/60" />
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
        className="w-full bg-transparent text-white outline-none placeholder:text-white/50"
      />
    </div>
  );
}