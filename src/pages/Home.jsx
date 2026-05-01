import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  GraduationCap,
  Users,
  BookOpen,
  Building2,
} from "lucide-react";

import logo from "../assets/giu-logo.png";
import AnimatedCounter from "../components/AnimatedCounter";
import Testimonials from "../components/Testimonials";
import HeroSlider from "../components/HeroSlider";

const stats = [
  { label: "Students", value: 2500 },
  { label: "Programs", value: 35 },
  { label: "Lecturers", value: 120 },
  { label: "Faculties", value: 8 },
];

const faculties = [
  {
    title: "Computer Science",
    desc: "Software, AI, Data Science & IT",
    icon: BookOpen,
  },
  {
    title: "Business & Economics",
    desc: "Finance, Accounting & Management",
    icon: Building2,
  },
  {
    title: "Health Sciences",
    desc: "Medical & Community Health",
    icon: Users,
  },
];

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#064E3B] via-[#065F46] to-[#0EA5E9] pt-40 text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-white blur-3xl" />
          <div className="absolute bottom-10 right-20 h-96 w-96 rounded-full bg-sky-300 blur-3xl" />
        </div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pb-24 lg:grid-cols-2 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-bold backdrop-blur">
              Welcome to Gedo International University
            </span>

            <h1 className="mt-6 text-4xl font-black leading-tight md:text-6xl">
              Build Your Future With Quality Education
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-emerald-50">
              GIU provides modern education, practical skills, and academic
              excellence to prepare students for leadership and global success.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/admissions"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 font-black text-[#065F46] shadow-xl transition hover:scale-105"
              >
                Apply Now <ArrowRight size={18} />
              </Link>

              <Link
                to="/academics"
                className="inline-flex items-center justify-center rounded-full border border-white/40 px-7 py-4 font-black text-white transition hover:bg-white/10"
              >
                Explore Programs
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            className="rounded-[2rem] border border-white/20 bg-white/10 p-5 shadow-2xl backdrop-blur-xl"
          >
            <div className="rounded-[1.5rem] bg-white p-6 text-slate-900 dark:bg-slate-950 dark:text-white">
              <img
                src={logo}
                alt="GIU Logo"
                className="mx-auto mb-6 h-28 w-28 object-contain drop-shadow-xl"
              />

              <div className="flex items-center justify-center gap-3">
                <GraduationCap className="text-emerald-600" size={32} />
                <h3 className="text-2xl font-black text-[#065F46] dark:text-emerald-300">
                  Admissions Open
                </h3>
              </div>

              <p className="mt-3 text-center font-semibold text-slate-500 dark:text-slate-300">
                Apply online for the new academic year.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">
                {stats.map((s) => (
                  <AnimatedCounter
                    key={s.label}
                    value={s.value}
                    label={s.label}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* AUTO MOVING IMAGE SLIDER */}
      <HeroSlider />

      {/* FACULTIES SECTION */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-black text-[#065F46] dark:text-white">
            Our Faculties
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300">
            Explore academic excellence across multiple disciplines.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {faculties.map((f) => {
            const Icon = f.icon;

            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-3xl bg-white p-6 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl dark:bg-white/10"
              >
                <Icon className="text-[#0EA5E9]" size={32} />
                <h3 className="mt-4 text-xl font-black text-slate-900 dark:text-white">
                  {f.title}
                </h3>
                <p className="mt-2 text-slate-600 dark:text-slate-300">
                  {f.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      <Testimonials />

      {/* CTA SECTION */}
      <section className="bg-gradient-to-r from-[#065F46] to-[#0EA5E9] px-5 py-16 text-center text-white">
        <h2 className="text-3xl font-black">Ready to Start Your Journey?</h2>

        <Link
          to="/admissions"
          className="mt-6 inline-block rounded-full bg-white px-7 py-4 font-black text-[#065F46] shadow-xl transition hover:scale-105"
        >
          Apply Now
        </Link>
      </section>
    </>
  );
}