import PageWrapper from "../components/PageWrapper";

const Home = () => {
  return (
    <PageWrapper>
      <section className="mt-24 px-6 text-[#C5C6C7]">
        {/* ──────────────── HERO SECTION ──────────────── */}
        <div className="text-center max-w-5xl mx-auto">
          <h1 className="text-6xl font-extrabold mb-6 leading-tight text-white">
            Empowering Intelligence with{" "}
            <span className="text-[#66FCF1]">QLeap.ai</span>
          </h1>

          <p className="text-xl text-[#9CA3AF] max-w-3xl mx-auto mb-12">
            We design and engineer intelligent systems that bridge human creativity with machine precision —
            transforming ideas into scalable, future-ready solutions.
          </p>

          <div className="flex justify-center gap-14 mb-28">
            
          </div>
        </div>

        {/* ──────────────── ABOUT SNAPSHOT ──────────────── */}
        <div className="relative bg-gradient-to-r from-[#0B0C10]/60 via-[#1F2833]/80 to-[#0B0C10]/60 py-16 px-8 rounded-2xl shadow-inner mb-24">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="text-left md:pr-8">
              <h2 className="text-4xl font-bold text-[#66FCF1] mb-4">
                Who We Are
              </h2>
              <p className="text-lg text-[#C5C6C7] leading-relaxed mb-4">
                QLeap.ai is a technology innovation firm focused on building AI-driven products,
                enterprise-grade web and mobile applications, and scalable software ecosystems.
              </p>
              <p className="text-lg text-[#9CA3AF] leading-relaxed">
                Founded by{" "}
                <span className="text-[#66FCF1] font-medium">Sanjay R</span> (Full Stack Developer),{" "}
                <span className="text-[#66FCF1] font-medium">Shreyas Madiwalar</span> (UI/UX Architect), and{" "}
                <span className="text-[#66FCF1] font-medium">Pooja B. S.</span> (Business Analyst),
                QLeap.ai brings over{" "}
                <span className="font-medium">3+ years of multidisciplinary experience</span> across engineering,
                design, and business strategy — crafting intelligent digital solutions that align innovation with measurable impact.
              </p>
            </div>

            <div className="flex justify-center md:justify-end">
              <img
                src="https://cdn-icons-png.flaticon.com/512/906/906343.png"
                alt="AI Concept"
                className="w-64 md:w-80 opacity-80 hover:opacity-100 transition-transform hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* ──────────────── CORE EXPERTISE ──────────────── */}
        <div className="max-w-6xl mx-auto mb-28">
          <h2 className="text-center text-4xl font-bold text-[#66FCF1] mb-12">
            Our Core Expertise
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-[#1F2833]/80 rounded-xl shadow-md hover:shadow-lg hover:bg-[#202C38] transition-all text-left">
              <h3 className="text-2xl font-semibold text-[#66FCF1] mb-3">
                🧠 AI-Powered Systems
              </h3>
              <p>
                From generative AI to predictive automation, we engineer intelligent systems that
                learn, adapt, and evolve with your business needs.
              </p>
            </div>

            <div className="p-8 bg-[#1F2833]/80 rounded-xl shadow-md hover:shadow-lg hover:bg-[#202C38] transition-all text-left">
              <h3 className="text-2xl font-semibold text-[#66FCF1] mb-3">
                🌐 Full-Stack Engineering
              </h3>
              <p>
                Robust, scalable, and secure web & mobile ecosystems — built with precision using
                React, Node.js, and cloud-native infrastructure.
              </p>
            </div>

            <div className="p-8 bg-[#1F2833]/80 rounded-xl shadow-md hover:shadow-lg hover:bg-[#202C38] transition-all text-left">
              <h3 className="text-2xl font-semibold text-[#66FCF1] mb-3">
                🎨 Experience Design
              </h3>
              <p>
                Data-driven UI/UX that merges functionality with emotion — creating products that
                people understand, trust, and love to use.
              </p>
            </div>
          </div>
        </div>

        {/* ──────────────── CLIENTS SECTION ──────────────── */}
        <div className="bg-[#0B0C10]/50 py-16 rounded-xl mb-20">
          <p className="text-[#9CA3AF] text-sm uppercase tracking-widest mb-8 text-center">
            Trusted by innovators and partners worldwide
          </p>
          <div className="flex justify-center gap-12 flex-wrap opacity-90">
            <img
              src="https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/256x256/2675c675d01ad9ecf6a68d4b7d1de06e"
              alt="MResult Services Pvt Ltd"
              className="h-12 w-auto grayscale hover:grayscale-0 transition"
            />
            <img
              src="https://tse3.mm.bing.net/th/id/OIP.Pl-1AG_ErnGDcwXIUguPZgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"
              alt="City College Jayanagar"
              className="h-12 w-auto grayscale hover:grayscale-0 transition"
            />
            <img
              src="https://img.freepik.com/premium-vector/coffee-bar-coffee-shop-badge-stamp-label-logo-design-template_527727-327.jpg?w=2000"
              alt="Coffee Bar - Since 2023"
              className="h-12 w-auto grayscale hover:grayscale-0 transition"
            />
          </div>
        </div>

        {/* ──────────────── VISION STATEMENT ──────────────── */}
        <div className="max-w-3xl mx-auto text-center mt-16">
          <h3 className="text-2xl font-semibold text-[#66FCF1] mb-4">
            Our Vision
          </h3>
          <p className="text-[#C5C6C7] text-lg leading-relaxed">
            To engineer a world where artificial intelligence amplifies human potential — creating
            technology that’s not just powerful, but profoundly human.
          </p>
        </div>

        {/* ──────────────── CLOSING LINE ──────────────── */}
        <div className="mt-20 text-[#9CA3AF] text-sm italic text-center">
          “QLeap.ai — where logic meets imagination, and innovation becomes reality.”
        </div>
      </section>
    </PageWrapper>
  );
};

export default Home;
