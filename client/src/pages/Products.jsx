import PageWrapper from "../components/PageWrapper";

const Products = () => {
  return (
    <PageWrapper>
      <section className="mt-24 max-w-6xl mx-auto text-center px-6 text-[#C5C6C7]">
        <h2 className="text-5xl font-bold text-[#66FCF1] mb-6">Our Products</h2>
        <p className="text-[#C5C6C7] mb-12 text-lg">
          Intelligent tools and refined apps — built to simplify operations, amplify insight,
          and deliver measurable impact.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Product 1 */}
          <div className="p-8 bg-[#1F2833] rounded-xl shadow-md hover:shadow-lg hover:bg-[#202c38] transition-all">
            <h3 className="text-2xl font-semibold mb-3 text-[#66FCF1]">🧠 Smart Resume Builder</h3>
            <p className="text-[#C5C6C7] text-md">
              AI-driven resume generation with adaptive templates, instant formatting,
              and role-specific optimization to improve interview callbacks.
            </p>
          </div>

          {/* Product 2 */}
          <div className="p-8 bg-[#1F2833] rounded-xl shadow-md hover:shadow-lg hover:bg-[#202c38] transition-all">
            <h3 className="text-2xl font-semibold mb-3 text-[#66FCF1]">📋 Complaint Ticket System</h3>
            <p className="text-[#C5C6C7] text-md">
              Enterprise-grade ticketing with automated triage, SLA enforcement,
              and analytics to reduce resolution time and improve customer satisfaction.
            </p>
          </div>

          {/* Product 3 */}
          <div className="p-8 bg-[#1F2833] rounded-xl shadow-md hover:shadow-lg hover:bg-[#202c38] transition-all">
            <h3 className="text-2xl font-semibold mb-3 text-[#66FCF1]">📊 DWARE Dashboard</h3>
            <p className="text-[#C5C6C7] text-md">
              Real-time query builder and comparative analytics — a unified visualization
              suite for multi-source data and operational insight.
            </p>
          </div>

          {/* Product 4 */}
          <div className="p-8 bg-[#1F2833] rounded-xl shadow-md hover:shadow-lg hover:bg-[#202c38] transition-all">
            <h3 className="text-2xl font-semibold mb-3 text-[#66FCF1]">👨‍🍳 Chef Connect</h3>
            <p className="text-[#C5C6C7] text-md">
              A platform connecting chefs and patrons — discovery, collaboration, and
              commissioning tools with integrated ordering and portfolio management.
            </p>
          </div>

          {/* Product 5 */}
          <div className="p-8 bg-[#1F2833] rounded-xl shadow-md hover:shadow-lg hover:bg-[#202c38] transition-all">
            <h3 className="text-2xl font-semibold mb-3 text-[#66FCF1]">🌍 Adventure — Tourism App</h3>
            <p className="text-[#C5C6C7] text-md">
              Personalized travel planning with AI-guided itineraries, live maps,
              curated experiences, and expense tracking for modern travelers.
            </p>
          </div>

          {/* Product 6 */}
          <div className="p-8 bg-[#1F2833] rounded-xl shadow-md hover:shadow-lg hover:bg-[#202c38] transition-all">
            <h3 className="text-2xl font-semibold mb-3 text-[#66FCF1]">☕ Coffee Bar App</h3>
            <p className="text-[#C5C6C7] text-md">
              Mobile ordering and loyalty platform for cafés — intuitive menus,
              digital payments, and real-time order tracking to streamline service.
            </p>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Products;
