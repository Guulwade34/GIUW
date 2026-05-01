import { Link } from "react-router-dom";
import { Mail, MapPin, Phone, Globe, ExternalLink } from "lucide-react";
import logo from "../assets/giu-logo.png";

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-white dark:bg-[#020617]">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-4 lg:px-8">
        <div className="flex flex-col items-start">
          <img
            src={logo}
            alt="GIU Logo"
            className="mb-4 h-16 w-16 object-contain drop-shadow-md"
          />

          <h3 className="text-xl font-black">Gedo International University</h3>

          <p className="mt-4 leading-7 text-blue-100 dark:text-slate-300">
            A modern university committed to academic excellence, innovation,
            and community development.
          </p>
        </div>

        <div>
          <h4 className="mb-4 font-black">Quick Links</h4>

          <div className="flex flex-col gap-3 text-blue-100 dark:text-slate-300">
            <Link className="transition hover:text-white" to="/about">
              About
            </Link>
            <Link className="transition hover:text-white" to="/academics">
              Academics
            </Link>
            <Link className="transition hover:text-white" to="/admissions">
              Admissions
            </Link>
            <Link className="transition hover:text-white" to="/news">
              News
            </Link>
          </div>
        </div>

        <div>
          <h4 className="mb-4 font-black">Contact</h4>

          <div className="space-y-4 text-blue-100 dark:text-slate-300">
            <p className="flex items-center gap-3">
              <Phone size={18} />
              +252 61 0000000
            </p>

            <p className="flex items-center gap-3">
              <Mail size={18} />
              info@giu.edu.so
            </p>

            <p className="flex items-center gap-3">
              <MapPin size={18} />
              Gedo, Somalia
            </p>
          </div>
        </div>

        <div>
          <h4 className="mb-4 font-black">Follow Us</h4>

          <div className="flex gap-3">
            <a
              href="#"
              aria-label="Website"
              className="rounded-full bg-white/10 p-3 transition hover:scale-110 hover:bg-emerald-600"
            >
              <Globe size={18} />
            </a>

            <a
              href="#"
              aria-label="External link"
              className="rounded-full bg-white/10 p-3 transition hover:scale-110 hover:bg-emerald-600"
            >
              <ExternalLink size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-sm text-blue-100 dark:text-slate-400">
        © 2026 Gedo International University. All rights reserved.
      </div>
    </footer>
  );
}