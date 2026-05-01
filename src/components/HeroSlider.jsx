import { useEffect, useState } from "react";
import campus from "../assets/giu-campus.jpeg";
import classroom from "../assets/giu-classroom.jpeg";
import students from "../assets/giu-students.jpeg";

const slides = [
  {
    image: campus,
    title: "Welcome to Gedo International University",
    desc: "Excellence in education, empowering future leaders.",
  },
  {
    image: classroom,
    title: "Modern Learning Environment",
    desc: "Interactive classrooms and practical learning experience.",
  },
  {
    image: students,
    title: "Active Student Life",
    desc: "A vibrant community focused on growth and innovation.",
  },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
      <div className="relative h-[85vh] w-full overflow-hidden shadow-2xl">
        
        {/* Images */}
        {slides.map((slide, i) => (
          <img
            key={i}
            src={slide.image}
            alt={slide.title}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

        {/* Text */}
        <div className="absolute bottom-10 left-8 right-8 text-white">
          <h2 className="text-3xl font-black md:text-5xl">
            {slides[index].title}
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-white/85">
            {slides[index].desc}
          </p>
        </div>

        {/* Dots */}
        <div className="absolute bottom-6 right-6 flex gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-3 rounded-full transition ${
                i === index ? "w-8 bg-white" : "w-3 bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}