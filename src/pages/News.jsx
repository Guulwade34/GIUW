import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Bookmark,
  Calendar,
  Eye,
  Flame,
  MessageCircle,
  Search,
  User,
} from "lucide-react";

import campus from "../assets/giu-campus.jpeg";
import classroom from "../assets/giu-classroom.jpeg";
import students from "../assets/giu-students.jpeg";

const newsData = [
  {
    id: "1",
    title: "GIU Hosts Annual Tech Conference",
    image: campus,
    date: "March 20, 2026",
    category: "Events",
    author: "GIU Media Team",
    views: "1.2K",
    comments: 24,
    readTime: "4 min read",
    excerpt:
      "GIU brings together students, lecturers, and technology leaders to discuss innovation, AI, and digital skills.",
    breaking: true,
  },
  {
    id: "2",
    title: "New Modern Classrooms Opened",
    image: classroom,
    date: "April 5, 2026",
    category: "Campus",
    author: "Academic Affairs",
    views: "980",
    comments: 14,
    readTime: "3 min read",
    excerpt:
      "The new classrooms include smart learning tools and a modern environment for interactive academic experience.",
    breaking: false,
  },
  {
    id: "3",
    title: "Student Innovation Fair 2026",
    image: students,
    date: "May 10, 2026",
    category: "Students",
    author: "Student Affairs",
    views: "1.5K",
    comments: 31,
    readTime: "5 min read",
    excerpt:
      "Students showcase creative projects, business ideas, and technology solutions at the annual innovation fair.",
    breaking: false,
  },
];

const categories = ["All", "Events", "Campus", "Students"];

export default function News() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("giu_bookmarks")) || [];
    setBookmarks(saved);
  }, []);

  const toggleBookmark = (e, id) => {
    e.preventDefault();
    e.stopPropagation();

    const updated = bookmarks.includes(id)
      ? bookmarks.filter((item) => item !== id)
      : [...bookmarks, id];

    setBookmarks(updated);
    localStorage.setItem("giu_bookmarks", JSON.stringify(updated));
  };

  const featured = newsData[0];
  const sideFeatured = newsData.slice(1, 3);

  const filteredNews = newsData.filter((item) => {
    const matchSearch =
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.category.toLowerCase().includes(search.toLowerCase()) ||
      item.excerpt.toLowerCase().includes(search.toLowerCase());

    const matchCategory =
      activeCategory === "All" || item.category === activeCategory;

    return matchSearch && matchCategory;
  });

  const savedNews = newsData.filter((item) => bookmarks.includes(item.id));

  return (
    <section className="min-h-screen bg-slate-50 pb-24 pt-32 dark:bg-[#020617]">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.35em] text-[#0EA5E9]">
              GIU Newsroom
            </p>

            <h1 className="mt-3 text-4xl font-black text-[#065F46] dark:text-white md:text-6xl">
              News & Events
            </h1>

            <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-300">
              Stay updated with university announcements, campus activities,
              academic events, and student achievements.
            </p>
          </div>

          <div className="flex items-center gap-3 rounded-full bg-white px-5 py-3 shadow dark:bg-white/10">
            <Search size={18} className="text-slate-400" />
            <input
              type="text"
              placeholder="Search newsroom..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-transparent outline-none dark:text-white"
            />
          </div>
        </div>

        <div className="sticky top-28 z-30 mb-10 flex gap-3 overflow-x-auto rounded-2xl bg-white/80 p-3 shadow-xl backdrop-blur dark:bg-white/10">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`shrink-0 rounded-full px-5 py-2 text-sm font-black transition ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-[#065F46] to-[#0EA5E9] text-white"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-white/10 dark:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.4fr_0.8fr]">
          <Link
            to={`/news/${featured.id}`}
            className="group relative min-h-[560px] overflow-hidden rounded-[3rem] bg-slate-950 shadow-2xl"
          >
            <img
              src={featured.image}
              alt={featured.title}
              className="absolute inset-0 h-full w-full object-cover opacity-80 transition duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

            <div className="absolute left-8 right-8 top-8 flex items-center justify-between">
              {featured.breaking && (
                <span className="rounded-full bg-red-500 px-4 py-2 text-xs font-black uppercase tracking-wide text-white">
                  Breaking
                </span>
              )}

              <button
                type="button"
                onClick={(e) => toggleBookmark(e, featured.id)}
                className={`rounded-full p-3 backdrop-blur transition ${
                  bookmarks.includes(featured.id)
                    ? "bg-[#0EA5E9] text-white"
                    : "bg-white/15 text-white hover:bg-white/25"
                }`}
              >
                <Bookmark
                  size={20}
                  fill={
                    bookmarks.includes(featured.id) ? "currentColor" : "none"
                  }
                />
              </button>
            </div>

            <div className="absolute bottom-8 left-8 right-8 text-white">
              <div className="mb-4 flex flex-wrap gap-4 text-sm font-semibold text-white/80">
                <span className="flex items-center gap-2">
                  <Calendar size={16} /> {featured.date}
                </span>
                <span className="flex items-center gap-2">
                  <User size={16} /> {featured.author}
                </span>
              </div>

              <h2 className="max-w-3xl text-4xl font-black leading-tight md:text-6xl">
                {featured.title}
              </h2>

              <p className="mt-4 max-w-2xl leading-8 text-white/85">
                {featured.excerpt}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-5 text-sm font-bold text-white/80">
                <span className="flex items-center gap-2">
                  <Eye size={16} /> {featured.views}
                </span>
                <span className="flex items-center gap-2">
                  <MessageCircle size={16} /> {featured.comments}
                </span>
                <span>{featured.readTime}</span>
                <span className="inline-flex items-center gap-2 font-black text-emerald-300">
                  Read Full Story <ArrowRight size={17} />
                </span>
              </div>
            </div>
          </Link>

          <div className="grid gap-6">
            <div className="rounded-[2rem] bg-slate-950 p-6 text-white shadow-xl">
              <div className="flex items-center gap-2">
                <Flame className="text-orange-400" />
                <h3 className="text-xl font-black">Trending Now</h3>
              </div>

              <div className="mt-6 space-y-5">
                {sideFeatured.map((item, index) => (
                  <Link
                    key={item.id}
                    to={`/news/${item.id}`}
                    className="flex gap-4 rounded-2xl bg-white/10 p-3 transition hover:bg-white/15"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-24 w-28 rounded-xl object-cover"
                    />

                    <div>
                      <span className="text-xs font-black text-emerald-300">
                        #{index + 1} • {item.category}
                      </span>
                      <h4 className="mt-2 font-black leading-snug">
                        {item.title}
                      </h4>
                      <p className="mt-2 text-xs text-white/60">
                        {item.readTime}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] bg-white p-6 shadow-xl dark:bg-white/10">
              <div className="flex items-center gap-2">
                <Bookmark className="text-[#0EA5E9]" />
                <h3 className="text-xl font-black text-[#065F46] dark:text-white">
                  Saved News
                </h3>
              </div>

              <div className="mt-5 space-y-4">
                {savedNews.length > 0 ? (
                  savedNews.map((item) => (
                    <Link
                      key={item.id}
                      to={`/news/${item.id}`}
                      className="block border-b border-slate-200 pb-4 last:border-0 dark:border-white/10"
                    >
                      <p className="text-xs font-black text-[#0EA5E9]">
                        {item.category}
                      </p>
                      <h4 className="mt-1 font-black text-slate-900 dark:text-white">
                        {item.title}
                      </h4>
                      <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                        {item.date}
                      </p>
                    </Link>
                  ))
                ) : (
                  <p className="text-sm font-semibold text-slate-500 dark:text-slate-300">
                    No saved news yet.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-black text-[#065F46] dark:text-white">
            All Stories
          </h2>

          <div className="mt-7 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {filteredNews.length > 0 ? (
              filteredNews.map((news) => (
                <Link
                  key={news.id}
                  to={`/news/${news.id}`}
                  className="group overflow-hidden rounded-[2rem] bg-white shadow-lg transition hover:-translate-y-2 hover:shadow-2xl dark:bg-white/10"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={news.image}
                      alt={news.title}
                      className="h-56 w-full object-cover transition duration-700 group-hover:scale-110"
                    />

                    <span className="absolute left-5 top-5 rounded-full bg-white px-4 py-2 text-xs font-black text-[#065F46]">
                      {news.category}
                    </span>

                    <button
                      type="button"
                      onClick={(e) => toggleBookmark(e, news.id)}
                      className={`absolute right-5 top-5 rounded-full p-3 shadow-lg transition ${
                        bookmarks.includes(news.id)
                          ? "bg-[#0EA5E9] text-white"
                          : "bg-white text-slate-700 hover:bg-slate-100"
                      }`}
                    >
                      <Bookmark
                        size={18}
                        fill={
                          bookmarks.includes(news.id)
                            ? "currentColor"
                            : "none"
                        }
                      />
                    </button>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-black text-[#065F46] dark:text-white">
                      {news.title}
                    </h3>

                    <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
                      {news.excerpt}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-4 text-sm font-semibold text-slate-500 dark:text-slate-300">
                      <span className="flex items-center gap-2">
                        <Calendar size={15} /> {news.date}
                      </span>
                      <span className="flex items-center gap-2">
                        <Eye size={15} /> {news.views}
                      </span>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <div className="col-span-full rounded-[2rem] bg-white p-10 text-center font-bold text-slate-500 shadow dark:bg-white/10 dark:text-slate-300">
                No news found.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}