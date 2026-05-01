import { useState } from "react";
import {
  ArrowRight,
  FlaskConical,
  Search,
  X,
  BookOpen,
} from "lucide-react";
import { Link } from "react-router-dom";

const data = [
  {
    id: 1,
    title: "Digital Learning Innovation",
    category: "Education",
    status: "Ongoing",
    desc: "Improving digital learning access and student engagement.",
    full: "This research explores how digital tools can improve education access and learning outcomes in rural communities.",
  },
  {
    id: 2,
    title: "Community Health Awareness",
    category: "Health",
    status: "Completed",
    desc: "Community-based health awareness programs.",
    full: "A study focused on awareness, prevention, and healthcare accessibility in local communities.",
  },
  {
    id: 3,
    title: "Technology for Development",
    category: "Technology",
    status: "Ongoing",
    desc: "Building systems for local solutions.",
    full: "Research on building software systems that support education, business, and services.",
  },
];

const tabs = ["Projects", "Publications", "Researchers"];
const categories = ["All", "Education", "Health", "Technology"];

export default function Research() {
  const [activeTab, setActiveTab] = useState("Projects");
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [selected, setSelected] = useState(null);

  const filtered = data.filter((item) => {
    const matchSearch =
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.desc.toLowerCase().includes(search.toLowerCase());

    const matchCategory =
      category === "All" || item.category === category;

    return matchSearch && matchCategory;
  });

  return (
    <section className="min-h-screen bg-slate-50 pb-24 pt-32 dark:bg-[#020617]">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">

        {/* HERO */}
        <div className="relative overflow-hidden rounded-[3rem] bg-slate-950 p-12 text-white shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-[#065F46]/90 to-[#0EA5E9]/80" />

          <div className="relative max-w-3xl">
            <span className="flex items-center gap-2 font-black text-emerald-300">
              <FlaskConical size={18} />
              Research Center
            </span>

            <h1 className="mt-5 text-5xl font-black">
              Innovation & Research
            </h1>

            <p className="mt-4 text-white/80">
              Explore research projects, publications, and innovations at GIU.
            </p>
          </div>
        </div>

        {/* TABS */}
        <div className="mt-10 flex gap-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`rounded-full px-6 py-3 font-black ${
                activeTab === tab
                  ? "bg-[#0EA5E9] text-white"
                  : "bg-white shadow dark:bg-white/10"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* SEARCH + FILTER */}
        <div className="mt-8 flex flex-col gap-4 md:flex-row md:justify-between">
          <div className="flex items-center gap-3 rounded-full bg-white px-5 py-3 shadow dark:bg-white/10">
            <Search size={18} />
            <input
              placeholder="Search research..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-transparent outline-none"
            />
          </div>

          <div className="flex gap-3 flex-wrap">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`rounded-full px-5 py-2 font-black ${
                  category === c
                    ? "bg-[#065F46] text-white"
                    : "bg-white shadow dark:bg-white/10"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* PROJECTS */}
        {activeTab === "Projects" && (
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((item) => (
              <div
                key={item.id}
                className="group rounded-[2rem] bg-white p-6 shadow-lg transition hover:-translate-y-2 dark:bg-white/10"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black text-[#0EA5E9]">
                    {item.category}
                  </span>

                  <span
                    className={`text-xs font-black ${
                      item.status === "Ongoing"
                        ? "text-green-500"
                        : "text-gray-500"
                    }`}
                  >
                    {item.status}
                  </span>
                </div>

                <h2 className="mt-4 text-xl font-black">
                  {item.title}
                </h2>

                <p className="mt-3 text-slate-600 dark:text-slate-300">
                  {item.desc}
                </p>

                <Link
  to={`/research/${item.id}`}
  className="mt-5 flex items-center gap-2 font-black text-[#0EA5E9]"
>
  View Details <ArrowRight size={16} />
</Link>
              </div>
            ))}
          </div>
        )}

        {/* OTHER TABS */}
        {activeTab !== "Projects" && (
          <div className="mt-12 text-center text-lg font-bold text-slate-500">
            Coming Soon...
          </div>
        )}
      </div>

      {/* MODAL */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          <div className="w-full max-w-xl rounded-[2rem] bg-white p-8 dark:bg-slate-900">
            <div className="flex justify-between">
              <h2 className="text-2xl font-black">{selected.title}</h2>
              <button onClick={() => setSelected(null)}>
                <X />
              </button>
            </div>

            <p className="mt-4 text-slate-600 dark:text-slate-300">
              {selected.full}
            </p>

            <button className="mt-6 flex items-center gap-2 font-black text-[#0EA5E9]">
              Read Full Paper <BookOpen size={16} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}