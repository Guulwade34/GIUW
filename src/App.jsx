import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

import Home from "./pages/Home";
import About from "./pages/About";
import Academics from "./pages/Academics";
import ProgramDetails from "./pages/ProgramDetails";
import Staff from "./pages/Staff";
import StaffProfile from "./pages/StaffProfile";
import Admissions from "./pages/Admissions";
import Research from "./pages/Research";
import News from "./pages/News";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";

// ✅ FIXED PATH
import NewsDetail from "./pages/NewsDetail";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [dark, setDark] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setDark(localStorage.getItem("theme") === "dark");
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-[#020617] dark:text-white">
      <Navbar dark={dark} setDark={setDark} />

      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.35 }}
          >
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/academics" element={<Academics />} />
              <Route path="/program/:id" element={<ProgramDetails />} />
              <Route path="/staff" element={<Staff />} />
              <Route path="/staff/:id" element={<StaffProfile />} />
              <Route path="/admissions" element={<Admissions />} />
              <Route path="/research" element={<Research />} />
              <Route path="/news" element={<News />} />

              {/* ✅ ADD THIS */}
              <Route path="/news/:id" element={<NewsDetail />} />

              <Route path="/contact" element={<Contact />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}