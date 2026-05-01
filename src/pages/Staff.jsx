import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Award,
  BookOpen,
  Briefcase,
  Filter,
  GraduationCap,
  Mail,
  Phone,
  Search,
  Sparkles,
  Star,
} from "lucide-react";
import { motion } from "framer-motion";

import ahmed from "../assets/staff/ahmed.jpg";
import mohamed from "../assets/staff/mohamed.jpg";
import fatima from "../assets/staff/fatima.jpg";
import abdi from "../assets/staff/abdi.jpg";
import hawo from "../assets/staff/hawo.jpg";
import hassan from "../assets/staff/hassan.jpg";

const lecturers = [
  {
    id: "ahmed-mohamed",
    name: "Dr. Ahmed Mohamed",
    image: ahmed,
    title: "Dean, Faculty of Computer Science",
    department: "Computer Science",
    qualification: "PhD in Information Systems",
    experience: "12+ Years",
    status: "Available",
    rating: "4.9",
    courses: ["Database Systems", "Software Engineering", "Web Development"],
    email: "ahmed@giu.edu.so",
    phone: "+252 61 0000000",
    featured: true,
  },
  {
    id: "mohamed-hassan",
    name: "Ustad Mohamed Hassan",
    image: mohamed,
    title: "Lecturer, Sharia & Law",
    department: "Sharia & Law",
    qualification: "MA in Islamic Law",
    experience: "9+ Years",
    status: "Busy",
    rating: "4.8",
    courses: ["Islamic Jurisprudence", "Legal Writing", "Family Law"],
    email: "mohamed@giu.edu.so",
    phone: "+252 61 0000000",
    featured: false,
  },
  {
    id: "fatima-ali",
    name: "Ms. Fatima Ali",
    image: fatima,
    title: "Lecturer, Midwifery",
    department: "Midwifery",
    qualification: "BSc Midwifery",
    experience: "7+ Years",
    status: "Available",
    rating: "4.7",
    courses: ["Maternal Health", "Newborn Care", "Clinical Practice"],
    email: "fatima@giu.edu.so",
    phone: "+252 61 0000000",
    featured: true,
  },
  {
    id: "abdi-omar",
    name: "Mr. Abdi Omar",
    image: abdi,
    title: "Lecturer, Business Administration",
    department: "Business",
    qualification: "MBA Finance",
    experience: "8+ Years",
    status: "Available",
    rating: "4.8",
    courses: ["Accounting", "Finance", "Entrepreneurship"],
    email: "abdi@giu.edu.so",
    phone: "+252 61 0000000",
    featured: false,
  },
  {
    id: "hawo-aden",
    name: "Ms. Hawo Aden",
    image: hawo,
    title: "Lecturer, Education",
    department: "Education",
    qualification: "MA Education",
    experience: "6+ Years",
    status: "Offline",
    rating: "4.6",
    courses: ["Teaching Methods", "Curriculum Development", "Assessment"],
    email: "hawo@giu.edu.so",
    phone: "+252 61 0000000",
    featured: false,
  },
  {
    id: "hassan-yusuf",
    name: "Dr. Hassan Yusuf",
    image: hassan,
    title: "Lecturer, Public Health",
    department: "Health Sciences",
    qualification: "MPH Public Health",
    experience: "10+ Years",
    status: "Available",
    rating: "4.9",
    courses: ["Epidemiology", "Community Health", "Health Promotion"],
    email: "hassan@giu.edu.so",
    phone: "+252 61 0000000",
    featured: true,
  },
];

export default function Staff() {
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("All");
  const [status, setStatus] = useState("All");

  const departments = ["All", ...new Set(lecturers.map((item) => item.department))];
  const statuses = ["All", "Available", "Busy", "Offline"];

  const featuredLecturer = lecturers.find((item) => item.featured);

  const filteredLecturers = useMemo(() => {
    return lecturers.filter((lecturer) => {
      const matchesDepartment =
        department === "All" || lecturer.department === department;

      const matchesStatus = status === "All" || lecturer.status === status;

      const matchesSearch =
        `${lecturer.name} ${lecturer.title} ${lecturer.department} ${lecturer.qualification} ${lecturer.courses.join(
          " "
        )}`
          .toLowerCase()
          .includes(search.toLowerCase());

      return matchesDepartment && matchesStatus && matchesSearch;
    });
  }, [search, department, status]);

  return (
    <section className="min-h-screen overflow-hidden bg-slate-50 pb-24 pt-36 transition dark:bg-[#020617]">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* HERO */}
        <div className="relative overflow-hidden rounded-[3rem] bg-slate-950 text-white shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-[#065F46]/80 via-slate-950 to-[#0EA5E9]/70" />
          <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-sky-400/30 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-emerald-400/30 blur-3xl" />

          <div className="relative grid gap-10 p-8 md:p-14 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-2 text-sm font-black backdrop-blur">
                <Sparkles size={16} />
                GIU Academic Staff
              </span>

              <h1 className="mt-6 max-w-3xl text-4xl font-black leading-tight md:text-6xl">
                Meet the Experts Behind GIU’s Academic Excellence
              </h1>

              <p className="mt-5 max-w-2xl leading-8 text-white/85">
                Explore our academic leaders, lecturers, departments, courses,
                qualifications, and professional profiles.
              </p>

              <div className="mt-8 grid max-w-2xl gap-4 sm:grid-cols-3">
                <MiniStat value="100+" label="Academic Staff" />
                <MiniStat value="6+" label="Faculties" />
                <MiniStat value="20+" label="Programs" />
              </div>
            </motion.div>

            {featuredLecturer && (
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                className="rounded-[2.5rem] border border-white/15 bg-white/10 p-4 backdrop-blur-xl"
              >
                <div className="relative overflow-hidden rounded-[2rem]">
                  <img
                    src={featuredLecturer.image}
                    alt={featuredLecturer.name}
                    className="h-[360px] w-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

                  <div className="absolute left-5 top-5 rounded-full bg-emerald-300 px-4 py-2 text-xs font-black text-[#065F46]">
                    Featured Lecturer
                  </div>

                  <div className="absolute bottom-5 left-5 right-5">
                    <h2 className="text-2xl font-black">
                      {featuredLecturer.name}
                    </h2>
                    <p className="mt-1 text-white/80">
                      {featuredLecturer.title}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>

        {/* FILTER BAR */}
        <div className="sticky top-28 z-30 mt-8 rounded-[2rem] border border-slate-200 bg-white/85 p-4 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-white/10">
          <div className="grid gap-4 lg:grid-cols-[1fr_auto_auto]">
            <div className="flex items-center gap-3 rounded-2xl bg-slate-100 px-5 py-4 dark:bg-slate-950/60">
              <Search className="text-slate-400" size={22} />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search lecturer, course, department..."
                className="w-full bg-transparent text-slate-900 outline-none placeholder:text-slate-400 dark:text-white"
              />
            </div>

            <select
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              className="rounded-2xl border border-slate-200 bg-white px-5 py-4 font-black text-slate-700 outline-none dark:border-white/10 dark:bg-slate-950/60 dark:text-white"
            >
              {departments.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>

            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="rounded-2xl border border-slate-200 bg-white px-5 py-4 font-black text-slate-700 outline-none dark:border-white/10 dark:bg-slate-950/60 dark:text-white"
            >
              {statuses.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </div>
        </div>

        {/* ACTIVE FILTERS */}
        <div className="mt-6 flex flex-wrap items-center gap-3 text-sm font-bold text-slate-600 dark:text-slate-300">
          <span className="flex items-center gap-2">
            <Filter size={17} className="text-[#0EA5E9]" />
            Showing {filteredLecturers.length} staff members
          </span>

          <span className="rounded-full bg-white px-4 py-2 shadow-sm dark:bg-white/10">
            Department: {department}
          </span>

          <span className="rounded-full bg-white px-4 py-2 shadow-sm dark:bg-white/10">
            Status: {status}
          </span>
        </div>

        {/* STAFF GRID */}
        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredLecturers.map((lecturer, index) => (
            <motion.article
              key={lecturer.email}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="group overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-2xl dark:border-white/10 dark:bg-white/10"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={lecturer.image}
                  alt={lecturer.name}
                  className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute left-5 top-5 flex gap-2">
                  <span className="rounded-full bg-white px-4 py-2 text-xs font-black text-[#065F46] shadow-lg">
                    {lecturer.department}
                  </span>
                </div>

                <span
                  className={`absolute right-5 top-5 rounded-full px-4 py-2 text-xs font-black shadow-lg ${
                    lecturer.status === "Available"
                      ? "bg-emerald-300 text-[#065F46]"
                      : lecturer.status === "Busy"
                      ? "bg-amber-300 text-amber-900"
                      : "bg-slate-200 text-slate-700"
                  }`}
                >
                  {lecturer.status}
                </span>

                <div className="absolute bottom-5 left-5 right-5">
                  <h2 className="text-2xl font-black text-white">
                    {lecturer.name}
                  </h2>

                  <p className="mt-1 font-semibold text-white/80">
                    {lecturer.title}
                  </p>
                </div>
              </div>

              <div className="p-7">
                <div className="grid grid-cols-2 gap-3">
                  <InfoBox icon={GraduationCap} label="Qualification" value={lecturer.qualification} />
                  <InfoBox icon={Briefcase} label="Experience" value={lecturer.experience} />
                </div>

                <div className="mt-5 flex items-center gap-2 rounded-2xl bg-slate-50 p-4 dark:bg-white/10">
                  <Star className="text-amber-400" size={20} fill="currentColor" />
                  <span className="font-black text-slate-900 dark:text-white">
                    {lecturer.rating}
                  </span>
                  <span className="text-sm font-semibold text-slate-500 dark:text-slate-300">
                    Lecturer Rating
                  </span>
                </div>

                <div className="mt-5">
                  <p className="mb-3 flex items-center gap-2 text-sm font-black text-slate-900 dark:text-white">
                    <BookOpen size={17} className="text-[#0EA5E9]" />
                    Courses Taught
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {lecturer.courses.map((course) => (
                      <span
                        key={course}
                        className="rounded-full bg-slate-100 px-3 py-2 text-xs font-bold text-slate-600 dark:bg-white/10 dark:text-slate-300"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 space-y-3 text-sm font-semibold text-slate-600 dark:text-slate-300">
                  <p className="flex items-center gap-2">
                    <Mail size={17} className="text-[#0EA5E9]" />
                    {lecturer.email}
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone size={17} className="text-[#0EA5E9]" />
                    {lecturer.phone}
                  </p>
                </div>

                <div className="mt-7 flex gap-3">
                  <Link
                    to={`/staff/${lecturer.id}`}
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#065F46] to-[#0EA5E9] px-5 py-3 font-black text-white shadow-lg transition hover:scale-105"
                  >
                    View Profile <ArrowRight size={17} />
                  </Link>

                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center rounded-full bg-slate-100 px-4 py-3 font-black text-[#065F46] transition hover:bg-slate-200 dark:bg-white/10 dark:text-emerald-300"
                  >
                    <Mail size={18} />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {filteredLecturers.length === 0 && (
          <div className="mt-12 rounded-[2rem] bg-white p-10 text-center shadow-lg dark:bg-white/10">
            <h3 className="text-2xl font-black text-slate-900 dark:text-white">
              No staff found
            </h3>
            <p className="mt-3 text-slate-600 dark:text-slate-300">
              Try another keyword, department, or availability status.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

function MiniStat({ value, label }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur">
      <h3 className="text-3xl font-black text-emerald-300">{value}</h3>
      <p className="mt-1 text-sm font-bold text-white/70">{label}</p>
    </div>
  );
}

function InfoBox({ icon: Icon, label, value }) {
  return (
    <div className="rounded-2xl bg-slate-50 p-4 dark:bg-white/10">
      <Icon className="text-[#0EA5E9]" size={20} />
      <p className="mt-2 text-xs font-bold text-slate-400">{label}</p>
      <p className="mt-1 text-sm font-black text-[#065F46] dark:text-emerald-300">
        {value}
      </p>
    </div>
  );
}