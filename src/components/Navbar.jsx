import { Link, NavLink } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useState } from "react";
import logo from "../assets/giu-logo.png";

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Academics", path: "/academics" },
  { name: "Admissions", path: "/admissions" },
  { name: "Research", path: "/research" },
  { name: "News", path: "/news" },
  { name: "Contact", path: "/contact" },
  { name: "Staff", path: "/staff" },
];

export default function Navbar({ dark, setDark }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-slate-200/70 bg-white/80 shadow-sm backdrop-blur-xl transition dark:border-white/10 dark:bg-[#020617]/80">
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-5 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="GIU Logo"
            className="h-16 w-16 object-contain drop-shadow-md"
          />

          <div>
            <h1 className="text-lg font-black text-[#065F46] dark:text-white">
              Gedo International University
            </h1>
            <p className="text-xs font-semibold text-emerald-700 dark:text-emerald-300">
              Excellence Through Knowledge
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-bold transition ${
                  isActive
                    ? "text-[#0EA5E9] dark:text-emerald-300"
                    : "text-slate-700 hover:text-[#065F46] dark:text-slate-200 dark:hover:text-emerald-300"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <button
            onClick={() => setDark(!dark)}
            className="rounded-full border border-slate-200 bg-white p-3 text-slate-700 shadow-sm transition hover:scale-105 dark:border-white/10 dark:bg-white/10 dark:text-white"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <select className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700 dark:border-white/10 dark:bg-white/10 dark:text-white">
            <option>EN</option>
            <option>SO</option>
            <option>AR</option>
          </select>

          <Link
            to="/admissions"
            className="rounded-full bg-gradient-to-r from-[#065F46] to-[#0EA5E9] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-emerald-900/20 transition hover:scale-105 dark:shadow-emerald-500/20"
          >
            Apply Now
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="rounded-xl p-2 text-slate-800 lg:hidden dark:text-white"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white px-5 py-5 dark:border-white/10 dark:bg-[#020617] lg:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setOpen(false)}
                className="font-bold text-slate-700 dark:text-slate-200"
              >
                {link.name}
              </Link>
            ))}

            <button
              onClick={() => setDark(!dark)}
              className="rounded-full bg-slate-100 px-5 py-3 text-center font-black text-slate-800 dark:bg-white/10 dark:text-white"
            >
              {dark ? "Light Mode" : "Dark Mode"}
            </button>

            <Link
              to="/admissions"
              className="rounded-full bg-[#065F46] px-5 py-3 text-center font-bold text-white"
            >
              
              Apply Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}