import { useState } from "react";
import toast from "react-hot-toast";
import PageWrapper from "../components/PageWrapper";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";
      const res = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        toast.success("Message received. We'll be in touch soon.", {
          icon: "📨",
        });
        setForm({ name: "", email: "", message: "" });
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch {
      toast.error("Something went wrong. Check your connection.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <PageWrapper>
      <section className="mt-24 max-w-2xl mx-auto px-6 text-center text-[#C5C6C7]">
        <h2 className="text-5xl font-bold text-[#66FCF1] mb-4">Get in Touch</h2>
        <p className="text-[#9CA3AF] mb-10">
          Have an idea, collaboration, or project? Let’s connect.  
          QLeap.ai thrives on purposeful partnerships and bold innovation.
        </p>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded bg-[#1F2833] text-white placeholder-[#9CA3AF] border border-[#1F2833] focus:ring-2 focus:ring-[#66FCF1] focus:outline-none"
            required
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full px-4 py-3 rounded bg-[#1F2833] text-white placeholder-[#9CA3AF] border border-[#1F2833] focus:ring-2 focus:ring-[#66FCF1] focus:outline-none"
            required
          />
          <textarea
            rows="6"
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="w-full px-4 py-3 rounded bg-[#1F2833] text-white placeholder-[#9CA3AF] border border-[#1F2833] focus:ring-2 focus:ring-[#66FCF1] focus:outline-none"
            required
          ></textarea>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-[#45A29E] hover:bg-[#3C8C89] text-white font-semibold px-6 py-3 rounded-md transition flex justify-center items-center gap-2"
          >
            {isLoading ? (
              <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></span>
            ) : (
              "Send Message"
            )}
          </button>
        </form>

        <p className="text-[#9CA3AF] text-sm mt-6">
          Or reach us directly at{" "}
          <a
            href="mailto:hello@QLeap.ai"
            className="text-[#66FCF1] hover:text-[#45A29E] underline transition"
          >
            qleap.techai@gmail.com
          </a>
        </p>
      </section>
    </PageWrapper>
  );
};

export default Contact;
