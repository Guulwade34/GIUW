import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Ahmed Hassan",
    role: "Computer Science Student",
    text: "GIU gave me practical skills, confidence, and a clear academic direction for my future career.",
  },
  {
    name: "Fatima Ali",
    role: "Public Health Student",
    text: "The lecturers are supportive, and the programs are designed to help students serve the community.",
  },
  {
    name: "Mohamed Abdi",
    role: "Business Student",
    text: "I like the modern learning environment and the focus on real-world professional skills.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-20 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="text-center">
          <span className="font-black text-[#0EA5E9]">Student Voices</span>
          <h2 className="mt-3 text-4xl font-black text-[#065F46] dark:text-white">
            What Our Students Say
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600 dark:text-slate-300">
            Real experiences from students building their future at GIU.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-2xl dark:border-white/10 dark:bg-white/10"
            >
              <Quote className="text-[#0EA5E9]" size={34} />

              <p className="mt-5 leading-8 text-slate-600 dark:text-slate-300">
                “{item.text}”
              </p>

              <div className="mt-6 flex gap-1 text-yellow-400">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={18} fill="currentColor" />
                ))}
              </div>

              <div className="mt-6">
                <h3 className="font-black text-slate-900 dark:text-white">
                  {item.name}
                </h3>
                <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">
                  {item.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}