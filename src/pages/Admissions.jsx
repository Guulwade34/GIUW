import { useState } from "react";
import api from "../services/api";

export default function Admissions() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    program: "",
    message: "",
    document: null,
  });

  const [loading, setLoading] = useState(false);
  const [applicationId, setApplicationId] = useState("");
  const [error, setError] = useState("");

  const [trackId, setTrackId] = useState("");
  const [trackingLoading, setTrackingLoading] = useState(false);
  const [trackingError, setTrackingError] = useState("");
  const [trackingResult, setTrackingResult] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "document") {
      setForm({ ...form, document: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setApplicationId("");

    try {
      const formData = new FormData();

      formData.append("name", form.name);
      formData.append("email", form.email);
      formData.append("phone", form.phone);
      formData.append("program", form.program);
      formData.append("message", form.message);

      if (form.document) {
        formData.append("document", form.document);
      }

      const res = await api.post("/applicants/create.php", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (res.data.success) {
        setApplicationId(res.data.application_id);

        setForm({
          name: "",
          email: "",
          phone: "",
          program: "",
          message: "",
          document: null,
        });
      } else {
        setError(res.data.message || "Something went wrong");
      }
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Failed to submit application. Check backend connection."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleTrack = async (e) => {
    e.preventDefault();
    setTrackingLoading(true);
    setTrackingError("");
    setTrackingResult(null);

    try {
      const res = await api.get("/applicants/track.php", {
        params: {
          application_id: trackId,
        },
      });

      if (res.data.success) {
        setTrackingResult(res.data.data);
      } else {
        setTrackingError(res.data.message || "Application not found");
      }
    } catch (err) {
      setTrackingError(
        err.response?.data?.message ||
          "Failed to track application. Check backend connection."
      );
    } finally {
      setTrackingLoading(false);
    }
  };

  return (
    <section className="mx-auto max-w-7xl px-5 pb-20 pt-36 lg:px-8">
      <div className="text-center">
        <span className="font-black text-[#0EA5E9]">GIU Admissions</span>

        <h1 className="mt-3 text-4xl font-black text-[#065F46] md:text-5xl">
          Apply & Track Admission
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-slate-600">
          Submit your application online and use your Application ID to track
          your admission status.
        </p>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <div>
          {applicationId && (
            <div className="mb-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-5 text-center">
              <h3 className="text-xl font-black text-emerald-700">
                Application Submitted Successfully
              </h3>
              <p className="mt-2 text-slate-700">Your Application ID is:</p>
              <p className="mt-2 text-2xl font-black text-[#065F46]">
                {applicationId}
              </p>
            </div>
          )}

          {error && (
            <div className="mb-6 rounded-2xl border border-red-200 bg-red-50 p-5 text-center font-semibold text-red-700">
              {error}
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="rounded-[2rem] bg-white p-8 shadow-xl"
          >
            <h2 className="mb-6 text-2xl font-black text-slate-900">
              Online Application Form
            </h2>

            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Full Name"
              required
              className="mb-4 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-[#0EA5E9]"
            />

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
              className="mb-4 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-[#0EA5E9]"
            />

            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              required
              className="mb-4 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-[#0EA5E9]"
            />

            <select
              name="program"
              value={form.program}
              onChange={handleChange}
              required
              className="mb-4 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-[#0EA5E9]"
            >
              <option value="">Select Program</option>
              <option value="Computer Science">Computer Science</option>
              <option value="Business Administration">
                Business Administration
              </option>
              <option value="Public Health">Public Health</option>
              <option value="Information Technology">
                Information Technology
              </option>
            </select>

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Message (Optional)"
              className="mb-4 h-32 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-[#0EA5E9]"
            />

            <label className="mb-2 block text-sm font-black text-slate-700">
              Upload Certificate / ID / Document
            </label>

            <input
              type="file"
              name="document"
              onChange={handleChange}
              accept=".pdf,.jpg,.jpeg,.png"
              className="mb-6 w-full rounded-xl border border-dashed border-slate-300 p-4"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-full bg-gradient-to-r from-[#065F46] to-[#0EA5E9] py-4 font-black text-white shadow-lg transition hover:scale-105 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Submitting..." : "Submit Application"}
            </button>
          </form>
        </div>

        <div>
          <form
            onSubmit={handleTrack}
            className="rounded-[2rem] bg-white p-8 shadow-xl"
          >
            <h2 className="text-2xl font-black text-slate-900">
              Track Application
            </h2>

            <p className="mt-2 text-slate-600">
              Enter your Application ID to check your admission status.
            </p>

            <input
              value={trackId}
              onChange={(e) => setTrackId(e.target.value)}
              placeholder="Example: GIU-2026-A1B2C3"
              required
              className="mt-6 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-[#0EA5E9]"
            />

            <button
              type="submit"
              disabled={trackingLoading}
              className="mt-5 w-full rounded-full bg-[#065F46] py-4 font-black text-white transition hover:scale-105 disabled:opacity-60"
            >
              {trackingLoading ? "Checking..." : "Check Status"}
            </button>

            {trackingError && (
              <div className="mt-6 rounded-2xl border border-red-200 bg-red-50 p-5 font-semibold text-red-700">
                {trackingError}
              </div>
            )}

            {trackingResult && (
              <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
                <h3 className="text-xl font-black text-[#065F46]">
                  Application Found
                </h3>

                <div className="mt-5 space-y-3 text-slate-700">
                  <p>
                    <strong>Application ID:</strong>{" "}
                    {trackingResult.application_id}
                  </p>
                  <p>
                    <strong>Name:</strong> {trackingResult.full_name}
                  </p>
                  <p>
                    <strong>Email:</strong> {trackingResult.email}
                  </p>
                  <p>
                    <strong>Phone:</strong> {trackingResult.phone}
                  </p>
                  <p>
                    <strong>Program:</strong> {trackingResult.program}
                  </p>
                  <p>
                    <strong>Status:</strong>{" "}
                    <span className="rounded-full bg-white px-3 py-1 font-black text-[#065F46]">
                      {trackingResult.status}
                    </span>
                  </p>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}