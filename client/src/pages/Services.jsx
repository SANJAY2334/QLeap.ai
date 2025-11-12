import PageWrapper from "../components/PageWrapper";

const Services = () => {
  return (
    <PageWrapper>
      <section className="mt-24 max-w-5xl mx-auto text-center px-6 text-[#C5C6C7]">
        {/* Header */}
        <h2 className="text-5xl font-bold text-[#66FCF1] mb-6">Our Services</h2>
        <p className="text-[#C5C6C7] text-lg mb-12">
          We craft intelligent digital solutions — scalable, secure, and designed to evolve with your business.
        </p>

        {/* Services List */}
        <div className="space-y-12">
          {/* Web Development */}
          <div className="p-8 bg-[#1F2833] rounded-xl shadow-md hover:shadow-lg hover:bg-[#202C38] transition-all">
            <h3 className="text-2xl font-semibold mb-3 text-[#66FCF1]">🌐 Web Development</h3>
            <p className="text-[#C5C6C7] leading-relaxed">
              From minimalist portfolios to enterprise dashboards — we build responsive, fast, and SEO-optimized web applications
              using modern frameworks and clean architecture principles.
            </p>
          </div>

          {/* Mobile App Solutions */}
          <div className="p-8 bg-[#1F2833] rounded-xl shadow-md hover:shadow-lg hover:bg-[#202C38] transition-all">
            <h3 className="text-2xl font-semibold mb-3 text-[#66FCF1]">📱 Mobile App Solutions</h3>
            <p className="text-[#C5C6C7] leading-relaxed">
              Building intuitive, cross-platform mobile experiences with React Native and Flutter.
              Our apps blend performance, usability, and scalability to deliver true mobile excellence.
            </p>
          </div>

          {/* AI / ML Integrations */}
          <div className="p-8 bg-[#1F2833] rounded-xl shadow-md hover:shadow-lg hover:bg-[#202C38] transition-all">
            <h3 className="text-2xl font-semibold mb-3 text-[#66FCF1]">🤖 AI & ML Integrations</h3>
            <p className="text-[#C5C6C7] leading-relaxed">
              Empower your digital ecosystem with intelligent automation, sentiment analysis, and generative AI.
              We design models that enhance user experience and accelerate decision-making.
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-16">
          <a
            href="/contact"
            className="bg-[#45A29E] hover:bg-[#3C8C89] text-white px-8 py-3 rounded-md font-semibold transition-all shadow-md"
          >
            Let’s Build Together
          </a>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Services;
