import PageWrapper from "../components/PageWrapper";

const About = () => {
  return (
    <PageWrapper>
      <section className="mt-24 text-center max-w-4xl mx-auto px-6 text-[#C5C6C7]">
        {/* Header */}
        <h2 className="text-5xl font-bold text-[#66FCF1] mb-6">About QLeap.ai</h2>

        {/* Intro */}
        <p className="text-lg text-[#C5C6C7] leading-relaxed mb-6">
          QLeap.ai began as a singular vision — to bridge human creativity and artificial intelligence
          through elegant, scalable digital solutions. What started as a pursuit of innovation
          has evolved into a mission: crafting intelligent systems that learn, adapt, and empower.
        </p>

        <p className="text-lg text-[#9CA3AF] leading-relaxed">
          We focus on building technology that feels natural — software that understands context,
          solves problems with precision, and delivers beauty through logic. Every product we build
          is an expression of purpose, not just performance.
        </p>

        {/* Experience */}
        <div className="mt-10 border-t border-[#1F2833] pt-8 text-sm text-[#9CA3AF]">
          <p>
            With over <span className="text-[#66FCF1] font-semibold">3+ years of hands-on experience</span> 
            in building full-stack applications, QLeap.ai combines innovation with discipline to deliver 
            meaningful results.
          </p>
          <p className="text-[#45A29E] font-semibold mt-2">
            We don’t chase trends — we build tomorrow.
          </p>
        </div>

        {/* Founders Section */}
        <div className="mt-16 border-t border-[#1F2833] pt-10">
          <h3 className="text-3xl font-semibold text-[#66FCF1] mb-8">The Core Team</h3>

          <div className="grid md:grid-cols-3 gap-10 text-left">
            {/* Founder */}
            <div className="bg-[#1F2833]/60 p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
              <h4 className="text-xl font-semibold text-white mb-2">Founder — Sanjay R</h4>
              <p className="text-[#9CA3AF] text-sm leading-relaxed">
                A Full Stack Developer with a deep understanding of modern web architecture, 
                Sanjay has led QLeap.ai’s core engineering for scalable, intelligent, and secure systems.
                His expertise spans frontend precision, backend design, and seamless API integrations.
              </p>
            </div>

            {/* Co-Founder */}
            <div className="bg-[#1F2833]/60 p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
              <h4 className="text-xl font-semibold text-white mb-2">Co-Founder — Shreyas Madiwalar</h4>
              <p className="text-[#9CA3AF] text-sm leading-relaxed">
                A creative designer with a mastery in UI/UX and digital product architecture, 
                Shreyas crafts intuitive design maps that align functionality with visual clarity. 
                His design direction ensures every QLeap.ai product feels both human and intelligent.
              </p>
            </div>

            {/* Business Analyst */}
            <div className="bg-[#1F2833]/60 p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
              <h4 className="text-xl font-semibold text-white mb-2">Business Analyst — Pooja B. S.</h4>
              <p className="text-[#9CA3AF] text-sm leading-relaxed">
                A strategic thinker and skilled analyst, Pooja bridges the gap between business objectives 
                and technical execution. She translates client requirements into actionable insights, 
                ensuring QLeap.ai’s solutions remain aligned with both market demand and user needs.
                Her analytical rigor drives clarity, precision, and measurable outcomes across every project.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default About;
