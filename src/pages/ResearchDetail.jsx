import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  BookOpen,
  CalendarDays,
  Download,
  FlaskConical,
  GraduationCap,
  User,
} from "lucide-react";

const researchData = [
  {
    id: "1",
    title: "Digital Learning Innovation",
    category: "Education",
    status: "Ongoing",
    lead: "Faculty of Education",
    researcher: "Ms. Hawo Aden",
    date: "2026-04-15",
    abstract:
      "This research explores how digital tools can improve access to education, student engagement, and learning outcomes in rural communities.",
    objectives: [
      "Improve digital learning access",
      "Measure student engagement",
      "Identify challenges in rural education",
      "Recommend practical digital learning models",
    ],
    keywords: ["Digital Learning", "Education", "Student Engagement"],
  },
  {
    id: "2",
    title: "Community Health Awareness",
    category: "Health",
    status: "Completed",
    lead: "Faculty of Health Sciences",
    researcher: "Dr. Hassan Yusuf",
    date: "2026-03-10",
    abstract:
      "A community-based study focused on public health awareness, prevention, and healthcare accessibility in local communities.",
    objectives: [
      "Study public health awareness",
      "Identify prevention gaps",
      "Support community health education",
      "Improve healthcare outreach models",
    ],
    keywords: ["Public Health", "Awareness", "Community"],
  },
  {
    id: "3",
    title: "Technology for Development",
    category: "Technology",
    status: "Ongoing",
    lead: "Faculty of Computer Science",
    researcher: "Dr. Ahmed Mohamed",
    date: "2026-05-20",
    abstract:
      "Research on building software systems that support education, business, public services, and local development.",
    objectives: [
      "Design local digital solutions",
      "Support education and business systems",
      "Improve service delivery through technology",
      "Encourage student innovation projects",
    ],
    keywords: ["Technology", "Development", "Software Systems"],
  },
];

export default function ResearchDetail() {
  const { id } = useParams();
  const research =
    researchData.find((item) => item.id === id) || researchData[0];

  return (
    <section className="min-h-screen bg-slate-50 pb-24 pt-36 dark:bg-[#020617]">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Link
          to="/research"
          className="inline-flex items-center gap-2 font-black text-[#065F46] dark:text-emerald-300"
        >
          <ArrowLeft size={18} />
          Back to Research
        </Link>

        <div className="mt-8 overflow-hidden rounded-[3rem] bg-slate-950 text-white shadow-2xl">
          <div className="relative p-8 md:p-14">
            <div className="absolute inset-0 bg-gradient-to-br from-[#065F46]/90 via-slate-950 to-[#0EA5E9]/80" />
            <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-sky-400/30 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-emerald-400/30 blur-3xl" />

            <div className="relative max-w-4xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-5 py-2 text-sm font-black backdrop-blur">
                <FlaskConical size={16} />
                {research.category} Research
              </span>

              <h1 className="mt-6 text-4xl font-black leading-tight md:text-6xl">
                {research.title}
              </h1>

              <p className="mt-5 max-w-3xl leading-8 text-white/85">
                {research.abstract}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Meta icon={CalendarDays} text={research.date} />
                <Meta icon={GraduationCap} text={research.lead} />
                <Meta icon={User} text={research.researcher} />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          <div className="space-y-8 lg:col-span-2">
            <Panel title="Research Abstract" icon={BookOpen}>
              <p className="leading-8 text-slate-600 dark:text-slate-300">
                {research.abstract}
              </p>
            </Panel>

            <Panel title="Research Objectives" icon={FlaskConical}>
              <div className="grid gap-3">
                {research.objectives.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl bg-slate-100 p-5 font-bold text-slate-700 dark:bg-white/10 dark:text-slate-300"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </Panel>
          </div>

          <div className="space-y-8">
            <Panel title="Research Info" icon={GraduationCap}>
              <div className="space-y-4 text-slate-600 dark:text-slate-300">
                <Info label="Status" value={research.status} />
                <Info label="Category" value={research.category} />
                <Info label="Lead Faculty" value={research.lead} />
                <Info label="Researcher" value={research.researcher} />
              </div>
            </Panel>

            <Panel title="Keywords" icon={BookOpen}>
              <div className="flex flex-wrap gap-2">
                {research.keywords.map((keyword) => (
                  <span
                    key={keyword}
                    className="rounded-full bg-[#0EA5E9]/10 px-4 py-2 text-sm font-black text-[#0EA5E9]"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </Panel>

            <button className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#065F46] to-[#0EA5E9] px-7 py-4 font-black text-white shadow-lg transition hover:scale-105">
              <Download size={18} />
              Download Paper
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Meta({ icon: Icon, text }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-3 text-sm font-bold text-white/90 backdrop-blur">
      <Icon size={17} />
      {text}
    </span>
  );
}

function Info({ label, value }) {
  return (
    <div className="rounded-2xl bg-slate-100 p-4 dark:bg-white/10">
      <p className="text-sm font-bold text-slate-400">{label}</p>
      <p className="mt-1 font-black text-[#065F46] dark:text-emerald-300">
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