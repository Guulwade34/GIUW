import { Link } from "react-router-dom";
import {
  BookOpen,
  Building2,
  GraduationCap,
  Search,
  Users,
  Scale,
} from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const programs = [
  {
    id: "computer-science",
    faculty: "Computer Science",
    title: "Bachelor of Computer Science",
    desc: "Software, AI, Data Science & Development",
    duration: "4 Years",
    fee: "$450 / Semester",
    icon: BookOpen,
  },
  {
    id: "business-administration",
    faculty: "Business",
    title: "Bachelor of Business Administration",
    desc: "Finance, Accounting & Entrepreneurship",
    duration: "4 Years",
    fee: "$400 / Semester",
    icon: Building2,
  },
  {
    id: "public-health",
    faculty: "Health Sciences",
    title: "Bachelor of Public Health",
    desc: "Community health and medical support",
    duration: "4 Years",
    fee: "$500 / Semester",
    icon: Users,
  },
  {
    id: "sharia-law",
    faculty: "Sharia & Law",
    title: "Bachelor of Sharia & Law",
    desc: "Islamic law and legal systems",
    duration: "4 Years",
    fee: "$350 / Semester",
    icon: Scale,
  },
  {
    id: "education",
    faculty: "Education",
    title: "Bachelor of Education",
    desc: "Teaching, learning, and academic development",
    duration: "4 Years",
    fee: "$300 / Semester",
    icon: GraduationCap,
  },
  {
    id: "midwifery",
    faculty: "Midwifery",
    title: "Diploma in Midwifery",
    desc: "Maternal and child healthcare",
    duration: "3 Years",
    fee: "$450 / Semester",
    icon: Users,
  },
];

export default function Academics() {
  const [search, setSearch] = useState("");
  const [activeFaculty, setActiveFaculty] = useState("All");

  const faculties = ["All", ...new Set(programs.map((p) => p.faculty))];

  const filtered = programs.filter((p) => {
    return (
      (activeFaculty === "All" || p.faculty === activeFaculty) &&
      `${p.title} ${p.faculty} ${p.desc}`
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  });

  return (
    <section className="min-h-screen bg-slate-50 pb-24 pt-36">
      <div className="mx-auto max-w-7xl px-5 text-center lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="inline-block rounded-full bg-[#0EA5E9]/10 px-5 py-2 text-sm font-black text-[#0EA5E9]">
            GIU Academics
          </span>

          <h1 className="mt-4 text-4xl font-black text-[#065F46] md:text-5xl">
            Academic Programs
          </h1>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
            Explore GIU faculties and programs designed to prepare students with
            practical knowledge, professional skills, and leadership capacity.
          </p>
        </motion.div>
      </div>

      <div className="mx-auto mt-10 max-w-2xl px-5">
        <div className="flex items-center gap-3 rounded-2xl bg-white px-5 py-4 shadow-lg">
          <Search className="text-slate-400" size={22} />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search programs, faculties..."
            className="w-full bg-transparent outline-none"
          />
        </div>
      </div>

      <div className="mt-6 flex flex-wrap justify-center gap-3 px-5">
        {faculties.map((faculty) => (
          <button
            key={faculty}
            onClick={() => setActiveFaculty(faculty)}
            className={`rounded-full px-5 py-2 text-sm font-black transition ${
              activeFaculty === faculty
                ? "bg-[#065F46] text-white shadow-lg"
                : "bg-white text-slate-700 shadow hover:bg-[#0EA5E9] hover:text-white"
            }`}
          >
            {faculty}
          </button>
        ))}
      </div>

      <div className="mx-auto mt-14 max-w-7xl px-5 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((program, index) => {
            const Icon = program.icon;

            return (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                className="group rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#065F46] to-[#0EA5E9] text-white shadow-lg">
                  <Icon size={30} />
                </div>

                <p className="text-xs font-black uppercase tracking-wide text-[#0EA5E9]">
                  Faculty of {program.faculty}
                </p>

                <h3 className="mt-3 text-xl font-black text-slate-900 transition group-hover:text-[#065F46]">
                  {program.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {program.desc}
                </p>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-slate-50 p-4">
                    <p className="text-xs font-bold text-slate-400">
                      Duration
                    </p>
                    <p className="mt-1 font-black text-[#065F46]">
                      {program.duration}
                    </p>
                  </div>

                  <div className="rounded-2xl bg-slate-50 p-4">
                    <p className="text-xs font-bold text-slate-400">Fees</p>
                    <p className="mt-1 font-black text-[#065F46]">
                      {program.fee}
                    </p>
                  </div>
                </div>

                <Link
                  to={`/program/${program.id}`}
                  className="mt-6 block rounded-full bg-gradient-to-r from-[#065F46] to-[#0EA5E9] px-5 py-3 text-center font-black text-white shadow-lg transition hover:scale-105"
                >
                  View Program Details
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="mx-auto mt-20 max-w-4xl rounded-[2rem] bg-gradient-to-r from-[#065F46] to-[#0EA5E9] px-6 py-12 text-center text-white shadow-2xl">
        <h2 className="text-3xl font-black">Ready to Start Your Journey?</h2>
        <p className="mx-auto mt-3 max-w-2xl text-white/90">
          Apply today and join Gedo International University.
        </p>

        <Link
          to="/admissions"
          className="mt-6 inline-block rounded-full bg-white px-8 py-4 font-black text-[#065F46] shadow-lg transition hover:scale-105"
        >
          Apply for Admission
        </Link>
      </div>
    </section>
  );
}