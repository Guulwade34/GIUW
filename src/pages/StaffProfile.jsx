import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  BookOpen,
  Briefcase,
  Download,
  GraduationCap,
  Video,
} from "lucide-react";

import ahmed from "../assets/staff/ahmed.jpg";
import mohamed from "../assets/staff/mohamed.jpg";
import fatima from "../assets/staff/fatima.jpg";

import ahmedVideo from "../assets/videos/ahmed.mp4";
import BookingForm from "../components/BookingForm";

const lecturers = [
  {
    id: "ahmed-mohamed",
    name: "Dr. Ahmed Mohamed",
    image: ahmed,
    title: "Dean, Faculty of Computer Science",
    department: "Computer Science",
    qualification: "PhD in Information Systems",
    experience: "12+ Years",
    rating: "4.9",
    bio: "Experienced academic leader specializing in information systems and software engineering.",
    courses: ["Database Systems", "Software Engineering", "Web Development"],
  },
  {
    id: "mohamed-hassan",
    name: "Ustad Mohamed Hassan",
    image: mohamed,
    title: "Lecturer, Sharia & Law",
    department: "Sharia & Law",
    qualification: "MA in Islamic Law",
    experience: "9+ Years",
    rating: "4.8",
    bio: "Lecturer in Islamic jurisprudence.",
    courses: ["Islamic Law", "Legal Writing", "Family Law"],
  },
  {
    id: "fatima-ali",
    name: "Ms. Fatima Ali",
    image: fatima,
    title: "Lecturer, Midwifery",
    department: "Midwifery",
    qualification: "BSc Midwifery",
    experience: "7+ Years",
    rating: "4.7",
    bio: "Maternal health lecturer.",
    courses: ["Maternal Health", "Newborn Care", "Clinical Practice"],
  },
];

export default function StaffProfile() {
  const { id } = useParams();
  const lecturer = lecturers.find((item) => item.id === id) || lecturers[0];

  return (
    <section className="min-h-screen bg-slate-50 pb-24 pt-36 dark:bg-[#020617]">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        
        {/* BACK */}
        <Link
          to="/staff"
          className="inline-flex items-center gap-2 font-black text-[#065F46] dark:text-emerald-300"
        >
          <ArrowLeft size={18} />
          Back to Staff
        </Link>

        {/* HERO */}
        <div className="mt-8 overflow-hidden rounded-[3rem] bg-slate-950 text-white shadow-2xl">
          <div className="relative grid gap-10 p-8 md:p-14 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="absolute inset-0 bg-gradient-to-br from-[#065F46]/90 to-[#0EA5E9]/80" />

            {/* IMAGE */}
            <div className="relative flex items-center justify-center">
              <div className="h-64 w-64 overflow-hidden rounded-full border-4 border-white/20 shadow-2xl">
                <img
                  src={lecturer.image}
                  alt={lecturer.name}
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>

            {/* INFO */}
            <div className="relative">
              <span className="rounded-full bg-white/15 px-5 py-2 text-sm font-black backdrop-blur">
                {lecturer.department}
              </span>

              <h1 className="mt-6 text-4xl font-black md:text-6xl">
                {lecturer.name}
              </h1>

              <p className="mt-4 text-xl font-bold text-emerald-300">
                {lecturer.title}
              </p>

              <p className="mt-5 text-white/85">{lecturer.bio}</p>

              {/* STATS */}
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <Mini label="Qualification" value={lecturer.qualification} />
                <Mini label="Experience" value={lecturer.experience} />
                <Mini label="Rating" value={lecturer.rating} />
              </div>

              {/* ACTIONS */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/contact"
                  className="rounded-full bg-white px-7 py-4 text-center font-black text-[#065F46] shadow-xl transition hover:scale-105"
                >
                  Contact Lecturer
                </Link>

                <button className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-4 font-black text-white">
                  <Download size={18} />
                  Download CV
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* VIDEO */}
        {lecturer.id === "ahmed-mohamed" && (
          <div className="mt-10">
            <Panel title="Video Introduction" icon={Video}>
              <video
                src={ahmedVideo}
                controls
                className="h-[420px] w-full rounded-xl bg-black object-contain"
              />
            </Panel>
          </div>
        )}

        {/* COURSES */}
        <div className="mt-10">
          <Panel title="Courses Taught" icon={BookOpen}>
            <div className="grid gap-3 md:grid-cols-2">
              {lecturer.courses.map((course) => (
                <div
                  key={course}
                  className="rounded-xl bg-slate-100 p-4 font-bold text-slate-700 dark:bg-white/10 dark:text-slate-300"
                >
                  <BookOpen className="mb-2 text-[#0EA5E9]" size={20} />
                  {course}
                </div>
              ))}
            </div>
          </Panel>
        </div>

        {/* ACADEMIC DETAILS */}
        <div className="mt-10">
          <Panel title="Academic Details" icon={GraduationCap}>
            <div className="grid gap-4 md:grid-cols-2">
              <Detail
                icon={GraduationCap}
                label="Qualification"
                value={lecturer.qualification}
              />
              <Detail
                icon={Briefcase}
                label="Department"
                value={lecturer.department}
              />
            </div>
          </Panel>
        </div>

        {/* ✅ BOOKING FORM */}
        <div className="mt-12">
          <BookingForm lecturer={lecturer} />
        </div>

      </div>
    </section>
  );
}

/* COMPONENTS */

function Mini({ label, value }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/10 p-4 text-center backdrop-blur">
      <p className="text-xs text-white/60">{label}</p>
      <p className="font-black text-white">{value}</p>
    </div>
  );
}

function Detail({ icon: Icon, label, value }) {
  return (
    <div className="rounded-2xl bg-slate-100 p-5 dark:bg-white/10">
      <Icon className="text-[#0EA5E9]" size={24} />
      <p className="mt-3 text-sm text-slate-500 dark:text-slate-300">
        {label}
      </p>
      <p className="font-black text-[#065F46] dark:text-emerald-300">
        {value}
      </p>
    </div>
  );
}

function Panel({ title, icon: Icon, children }) {
  return (
    <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-lg dark:border-white/10 dark:bg-white/10">
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#065F46] to-[#0EA5E9] text-white">
          <Icon size={22} />
        </div>

        <h2 className="text-2xl font-black text-[#065F46] dark:text-white">
          {title}
        </h2>
      </div>

      <div className="mt-6">{children}</div>
    </div>
  );
}