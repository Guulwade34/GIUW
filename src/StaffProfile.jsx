import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  BookOpen,
  Briefcase,
  GraduationCap,
  Mail,
  Phone,
  UserRound,
} from "lucide-react";

const lecturers = [
  {
    id: "ahmed-mohamed",
    name: "Dr. Ahmed Mohamed",
    title: "Dean, Faculty of Computer Science",
    department: "Computer Science",
    qualification: "PhD in Information Systems",
    bio: "Dr. Ahmed Mohamed is an experienced academic leader specializing in information systems, software engineering, and digital transformation.",
    courses: ["Database Systems", "Software Engineering", "Web Development"],
    email: "ahmed@giu.edu.so",
    phone: "+252 61 0000000",
  },
  {
    id: "mohamed-hassan",
    name: "Ustad Mohamed Hassan",
    title: "Lecturer, Sharia & Law",
    department: "Sharia & Law",
    qualification: "MA in Islamic Law",
    bio: "Ustad Mohamed Hassan teaches Islamic jurisprudence, legal writing, and family law with strong academic and community experience.",
    courses: ["Islamic Jurisprudence", "Legal Writing", "Family Law"],
    email: "mohamed@giu.edu.so",
    phone: "+252 61 0000000",
  },
  {
    id: "fatima-ali",
    name: "Ms. Fatima Ali",
    title: "Lecturer, Midwifery",
    department: "Midwifery",
    qualification: "BSc Midwifery",
    bio: "Ms. Fatima Ali focuses on maternal health, newborn care, clinical practice, and practical midwifery training.",
    courses: ["Maternal Health", "Newborn Care", "Clinical Practice"],
    email: "fatima@giu.edu.so",
    phone: "+252 61 0000000",
  },
];

export default function StaffProfile() {
  const { id } = useParams();

  const lecturer = lecturers.find((item) => item.id === id) || lecturers[0];

  return (
    <section className="min-h-screen bg-slate-50 pb-24 pt-36 dark:bg-[#020617]">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Link
          to="/staff"
          className="inline-flex items-center gap-2 font-black text-[#065F46] dark:text-emerald-300"
        >
          <ArrowLeft size={18} />
          Back to Staff
        </Link>

        <div className="mt-8 overflow-hidden rounded-[3rem] bg-slate-950 text-white shadow-2xl">
          <div className="relative grid gap-10 p-8 md:p-14 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="absolute inset-0 bg-gradient-to-br from-[#065F46]/80 via-slate-950 to-[#0EA5E9]/70" />
            <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-sky-400/30 blur-3xl" />

            <div className="relative flex items-center justify-center">
              <div className="flex h-56 w-56 items-center justify-center rounded-full border-4 border-white/20 bg-white/10 backdrop-blur">
                <UserRound size={110} />
              </div>
            </div>

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

              <p className="mt-5 max-w-2xl leading-8 text-white/85">
                {lecturer.bio}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          <div className="rounded-[2rem] bg-white p-8 shadow-lg dark:bg-white/10 lg:col-span-2">
            <h2 className="text-2xl font-black text-[#065F46] dark:text-white">
              Academic Profile
            </h2>

            <div className="mt-6 space-y-5">
              <p className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                <GraduationCap className="text-[#0EA5E9]" />
                <strong>Qualification:</strong> {lecturer.qualification}
              </p>

              <p className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                <Briefcase className="text-[#0EA5E9]" />
                <strong>Department:</strong> {lecturer.department}
              </p>
            </div>

            <h3 className="mt-10 text-xl font-black text-slate-900 dark:text-white">
              Courses Taught
            </h3>

            <div className="mt-5 grid gap-3 md:grid-cols-2">
              {lecturer.courses.map((course) => (
                <div
                  key={course}
                  className="rounded-2xl bg-slate-100 p-4 font-bold text-slate-700 dark:bg-white/10 dark:text-slate-300"
                >
                  <BookOpen className="mb-2 text-[#0EA5E9]" size={20} />
                  {course}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] bg-white p-8 shadow-lg dark:bg-white/10">
            <h2 className="text-2xl font-black text-[#065F46] dark:text-white">
              Contact
            </h2>

            <div className="mt-6 space-y-5 text-slate-700 dark:text-slate-300">
              <p className="flex items-center gap-3">
                <Mail className="text-[#0EA5E9]" />
                {lecturer.email}
              </p>

              <p className="flex items-center gap-3">
                <Phone className="text-[#0EA5E9]" />
                {lecturer.phone}
              </p>
            </div>

            <Link
              to="/contact"
              className="mt-8 block rounded-full bg-gradient-to-r from-[#065F46] to-[#0EA5E9] px-6 py-4 text-center font-black text-white shadow-lg"
            >
              Contact Lecturer
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}