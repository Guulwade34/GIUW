import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  BookOpen,
  CheckCircle,
  Globe2,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
import logo from "../assets/giu-logo.png";

const stats = [
  { value: "2,500+", label: "Active Students" },
  { value: "6+", label: "Faculties" },
  { value: "20+", label: "Programs" },
  { value: "100+", label: "Academic Staff" },
];

const features = [
  {
    title: "Career-Focused Education",
    desc: "Programs designed with practical skills, projects, and real-world learning.",
    icon: BookOpen,
  },
  {
    title: "Community Impact",
    desc: "GIU prepares graduates who contribute to education, health, law, and development.",
    icon: Users,
  },
  {
    title: "Modern Learning Culture",
    desc: "A clean academic environment focused on discipline, innovation, and excellence.",
    icon: Sparkles,
  },
];

const values = [
  "Academic Excellence",
  "Integrity & Ethics",
  "Innovation",
  "Community Service",
];

export default function About() {
  return (
    <section className="min-h-screen overflow-hidden bg-slate-950 pt-24 text-white">
      {/* HERO */}
      <div className="relative px-5 pb-20 pt-24 lg:px-8">
        <div className="absolute inset-0">
          <div className="absolute left-[-120px] top-20 h-96 w-96 rounded-full bg-[#0EA5E9]/30 blur-3xl" />
          <div className="absolute right-[-120px] top-40 h-96 w-96 rounded-full bg-[#065F46]/50 blur-3xl" />
          <div className="absolute bottom-0 left-1/2 h-72 w-72 rounded-full bg-emerald-400/20 blur-3xl" />
        </div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-2 text-sm font-black text-sky-200 backdrop-blur">
              <Sparkles size={16} />
              About Gedo International University
            </span>

            <h1 className="mt-7 max-w-3xl text-5xl font-black leading-tight md:text-7xl">
              A New Standard of{" "}
              <span className="bg-gradient-to-r from-[#0EA5E9] to-emerald-300 bg-clip-text text-transparent">
                Modern Education
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              GIU is built to prepare confident graduates with knowledge,
              discipline, practical skills, and leadership for the future.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/admissions"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 font-black text-[#065F46] shadow-2xl transition hover:scale-105"
              >
                Apply Now <ArrowRight size={18} />
              </Link>

              <Link
                to="/academics"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-7 py-4 font-black text-white backdrop-blur transition hover:bg-white/20"
              >
                Explore Programs
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="rounded-[2.5rem] border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur-2xl">
              <div className="rounded-[2rem] bg-white p-8 text-center text-slate-900">
                <img
                  src={logo}
                  alt="GIU Logo"
                  className="mx-auto h-36 w-36 object-contain drop-shadow-xl"
                />

                <h2 className="mt-6 text-3xl font-black text-[#065F46]">
                  Gedo International University
                </h2>

                <p className="mt-2 font-semibold text-slate-500">
                  Excellence Through Knowledge
                </p>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  {stats.slice(0, 4).map((item) => (
                    <div
                      key={item.label}
                      className="rounded-2xl bg-slate-50 p-4"
                    >
                      <h3 className="text-2xl font-black text-[#065F46]">
                        {item.value}
                      </h3>
                      <p className="mt-1 text-xs font-bold text-slate-500">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 hidden rounded-3xl border border-white/20 bg-white/10 p-5 backdrop-blur-xl md:block">
              <Award className="text-emerald-300" />
              <p className="mt-2 text-sm font-black">Academic Excellence</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* MISSION / VISION */}
      <div className="bg-slate-50 px-5 py-20 text-slate-900 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          <div className="rounded-[2rem] bg-white p-8 shadow-xl">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0EA5E9]/10 text-[#0EA5E9]">
              <Target />
            </div>
            <h2 className="mt-5 text-3xl font-black text-[#065F46]">
              Our Mission
            </h2>
            <p className="mt-4 leading-8 text-slate-600">
              To provide quality, accessible, and practical higher education
              that empowers students with knowledge, values, and career-ready
              skills.
            </p>
          </div>

          <div className="rounded-[2rem] bg-gradient-to-br from-[#065F46] to-[#0EA5E9] p-8 text-white shadow-xl">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15">
              <Globe2 />
            </div>
            <h2 className="mt-5 text-3xl font-black">Our Vision</h2>
            <p className="mt-4 leading-8 text-white/90">
              To become a leading university recognized for academic
              excellence, innovation, research, and positive community impact.
            </p>
          </div>
        </div>

        {/* FEATURES */}
        <div className="mx-auto mt-20 max-w-7xl">
          <div className="text-center">
            <span className="font-black text-[#0EA5E9]">Why GIU</span>
            <h2 className="mt-3 text-4xl font-black text-[#065F46]">
              Built for the Next Generation
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {features.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-2xl"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#065F46] to-[#0EA5E9] text-white shadow-lg transition group-hover:scale-110">
                    <Icon size={30} />
                  </div>

                  <h3 className="mt-6 text-2xl font-black text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-8 text-slate-600">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* VALUES CTA */}
        <div className="mx-auto mt-20 max-w-7xl rounded-[2.5rem] bg-slate-950 p-8 text-white shadow-2xl md:p-12">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-4xl font-black">
                Our Core Values Shape Every Graduate
              </h2>
              <p className="mt-4 leading-8 text-slate-300">
                GIU focuses on producing graduates who are skilled,
                responsible, ethical, and ready to serve their communities.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {values.map((value) => (
                <div
                  key={value}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 font-black backdrop-blur"
                >
                  <CheckCircle className="text-emerald-300" size={20} />
                  {value}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}