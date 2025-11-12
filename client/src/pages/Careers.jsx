import PageWrapper from "../components/PageWrapper";

const Careers = () => {
  return (
    <PageWrapper>
      <section className="mt-24 max-w-3xl mx-auto text-center px-6 text-[#C5C6C7]">
        {/* Header */}
        <h2 className="text-5xl font-bold text-[#66FCF1] mb-6">Join QLeap.ai</h2>

        {/* Intro */}
        <p className="text-lg text-[#C5C6C7] mb-4">
          We’re expanding our team of builders, designers, and innovators who are shaping the next leap in AI-driven technology.
        </p>

        {/* Core Message */}
        <p className="text-md text-[#9CA3AF] mb-8 leading-relaxed">
          At QLeap.ai, you won’t just write code or design interfaces — you’ll help engineer intelligent systems that redefine how people and machines collaborate. 
          Every role here carries impact, ownership, and the drive to make technology truly human.
        </p>

        {/* Roles or Callout */}
        <div className="bg-[#1F2833]/70 border border-[#1F2833] rounded-xl p-8 shadow-md hover:shadow-lg transition">
          <h3 className="text-2xl font-semibold text-[#66FCF1] mb-3">Open Opportunities</h3>
          <ul className="space-y-2 text-left text-[#C5C6C7] text-sm">
            <li>• Full-Stack Developers — React, Node.js, MongoDB, and beyond.</li>
            <li>• UI/UX Designers — shaping intuitive digital experiences.</li>
            <li>• AI/ML Engineers — integrating intelligence into products that scale.</li>
          </ul>
        </div>

        {/* CTA */}
        <p className="mt-10 text-sm text-[#9CA3AF] italic">
          Think you belong here? Let’s talk. Share your profile through our{" "}
          <a
            href="/contact"
            className="text-[#66FCF1] hover:text-[#45A29E] transition"
          >
            Contact
          </a>{" "}
          page — we’d love to hear from you.
        </p>
      </section>
    </PageWrapper>
  );
};

export default Careers;
