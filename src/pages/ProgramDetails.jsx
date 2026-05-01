import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  BookOpen,
  CheckCircle,
  Clock,
  GraduationCap,
  Wallet,
  Briefcase,
} from "lucide-react";

const programs = [
  {
    id: "computer-science",
    faculty: "Computer Science",
    title: "Bachelor of Computer Science",
    duration: "4 Years",
    fee: "$450 / Semester",
    credits: "128 Credits",
    mode: "Full-time",
    overview:
      "This program prepares students with practical skills in programming, databases, networking, software engineering, artificial intelligence, and modern web technologies.",
    requirements: [
      "Secondary school certificate",
      "Basic computer knowledge",
      "English language foundation",
      "Completed admission form",
    ],
    careers: [
      "Software Developer",
      "IT Officer",
      "Data Analyst",
      "System Administrator",
    ],
    courses: [
      "Programming Fundamentals",
      "Database Systems",
      "Web Development",
      "Software Engineering",
      "Artificial Intelligence",
    ],
  },
  {
    id: "business-administration",
    faculty: "Business",
    title: "Bachelor of Business Administration",
    duration: "4 Years",
    fee: "$400 / Semester",
    credits: "124 Credits",
    mode: "Part-time",
    overview:
      "A professional business program focused on management, finance, accounting, entrepreneurship, leadership, and organizational development.",
    requirements: [
      "Secondary school certificate",
      "Basic mathematics skills",
      "English language foundation",
      "Completed admission form",
    ],
    careers: [
      "Business Manager",
      "Finance Officer",
      "Accountant",
      "Entrepreneur",
    ],
    courses: [
      "Principles of Management",
      "Financial Accounting",
      "Marketing Management",
      "Business Law",
      "Entrepreneurship",
    ],
  },
  {
    id: "public-health",
    faculty: "Health Sciences",
    title: "Bachelor of Public Health",
    duration: "4 Years",
    fee: "$500 / Semester",
    credits: "130 Credits",
    mode: "Full-time",
    overview:
      "This program develops health professionals who can support community health, disease prevention, health education, and public health management.",
    requirements: [
      "Secondary school certificate",
      "Science background preferred",
      "Good communication skills",
      "Completed admission form",
    ],
    careers: [
      "Public Health Officer",
      "Community Health Worker",
      "Health Program Assistant",
      "NGO Health Officer",
    ],
    courses: [
      "Introduction to Public Health",
      "Epidemiology",
      "Health Promotion",
      "Community Health",
      "Research Methods",
    ],
  },
  {
    id: "sharia-law",
    faculty: "Sharia & Law",
    title: "Bachelor of Sharia & Law",
    duration: "4 Years",
    fee: "$350 / Semester",
    credits: "126 Credits",
    mode: "Part-time",
    overview:
      "A balanced program combining Islamic jurisprudence, legal studies, civil law, legal writing, ethics, and justice systems.",
    requirements: [
      "Secondary school certificate",
      "Interest in legal studies",
      "Arabic or Islamic studies foundation preferred",
      "Completed admission form",
    ],
    careers: [
      "Legal Assistant",
      "Sharia Consultant",
      "Court Clerk",
      "Community Legal Advisor",
    ],
    courses: [
      "Islamic Jurisprudence",
      "Civil Law",
      "Legal Writing",
      "Criminal Law",
      "Family Law",
    ],
  },
  {
    id: "education",
    faculty: "Education",
    title: "Bachelor of Education",
    duration: "4 Years",
    fee: "$300 / Semester",
    credits: "122 Credits",
    mode: "Full-time",
    overview:
      "This program prepares future educators with teaching methods, curriculum design, educational psychology, assessment, and classroom leadership.",
    requirements: [
      "Secondary school certificate",
      "Strong communication skills",
      "Interest in teaching",
      "Completed admission form",
    ],
    careers: [
      "Teacher",
      "Academic Coordinator",
      "School Administrator",
      "Education Officer",
    ],
    courses: [
      "Teaching Methods",
      "Educational Psychology",
      "Curriculum Development",
      "Assessment & Evaluation",
      "Classroom Management",
    ],
  },
  {
    id: "midwifery",
    faculty: "Midwifery",
    title: "Diploma in Midwifery",
    duration: "3 Years",
    fee: "$450 / Semester",
    credits: "96 Credits",
    mode: "Full-time",
    overview:
      "This diploma prepares students with practical maternal health, newborn care, reproductive health, clinical skills, and community service training.",
    requirements: [
      "Secondary school certificate",
      "Science background preferred",
      "Good health and communication skills",
      "Completed admission form",
    ],
    careers: [
      "Midwife",
      "Maternal Health Assistant",
      "Clinic Assistant",
      "Community Health Worker",
    ],
    courses: [
      "Maternal Health",
      "Newborn Care",
      "Clinical Midwifery",
      "Reproductive Health",
      "Community Practice",
    ],
  },
];

export default function ProgramDetails() {
  const { id } = useParams();
  const program = programs.find((item) => item.id === id) || programs[0];

  return (
    <section className="min-h-screen bg-slate-50 px-5 pb-20 pt-36 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Link
          to="/academics"
          className="inline-flex items-center gap-2 font-black text-[#065F46]"
        >
          <ArrowLeft size={18} />
          Back to Academics
        </Link>

        <div className="mt-8 rounded-[2rem] bg-gradient-to-br from-[#065F46] to-[#0EA5E9] p-8 text-white shadow-2xl md:p-12">
          <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-bold">
            Faculty of {program.faculty}
          </span>

          <h1 className="mt-6 text-4xl font-black leading-tight md:text-5xl">
            {program.title}
          </h1>

          <p className="mt-5 max-w-3xl leading-8 text-white/90">
            {program.overview}
          </p>

          <Link
            to="/admissions"
            className="mt-8 inline-block rounded-full bg-white px-8 py-4 font-black text-[#065F46] shadow-lg transition hover:scale-105"
          >
            Apply Now
          </Link>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-4">
          <Info icon={Clock} title="Duration" value={program.duration} />
          <Info icon={Wallet} title="Fees" value={program.fee} />
          <Info icon={BookOpen} title="Credits" value={program.credits} />
          <Info icon={GraduationCap} title="Mode" value={program.mode} />
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          <div className="rounded-[2rem] bg-white p-8 shadow-lg lg:col-span-2">
            <h2 className="text-2xl font-black text-[#065F46]">
              Program Overview
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              {program.overview}
            </p>

            <h3 className="mt-8 text-xl font-black text-slate-900">
              Core Courses
            </h3>

            <div className="mt-5 grid gap-3 md:grid-cols-2">
              {program.courses.map((course) => (
                <div
                  key={course}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-4 font-bold text-slate-700"
                >
                  {course}
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <Card title="Admission Requirements" items={program.requirements} />
            <Card title="Career Opportunities" items={program.careers} />
          </div>
        </div>

        <div className="mt-10 rounded-[2rem] bg-white p-8 text-center shadow-lg">
          <Briefcase className="mx-auto text-[#0EA5E9]" size={34} />

          <h2 className="mt-4 text-2xl font-black text-[#065F46]">
            Ready to Join This Program?
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-slate-600">
            Start your academic journey with Gedo International University and
            build the skills needed for your future career.
          </p>

          <Link
            to="/admissions"
            className="mt-6 inline-block rounded-full bg-gradient-to-r from-[#065F46] to-[#0EA5E9] px-8 py-4 font-black text-white shadow-lg transition hover:scale-105"
          >
            Apply for Admission
          </Link>
        </div>
      </div>
    </section>
  );
}

function Info({ icon: Icon, title, value }) {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-lg">
      <Icon className="text-[#0EA5E9]" size={28} />
      <p className="mt-4 text-sm font-bold text-slate-400">{title}</p>
      <h3 className="mt-1 font-black text-[#065F46]">{value}</h3>
    </div>
  );
}

function Card({ title, items }) {
  return (
    <div className="rounded-[2rem] bg-white p-7 shadow-lg">
      <h3 className="text-xl font-black text-[#065F46]">{title}</h3>

      <div className="mt-5 space-y-3">
        {items.map((item) => (
          <p key={item} className="flex gap-3 text-slate-600">
            <CheckCircle className="mt-1 shrink-0 text-[#0EA5E9]" size={18} />
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}