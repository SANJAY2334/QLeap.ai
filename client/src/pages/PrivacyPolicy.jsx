import PageWrapper from "../components/PageWrapper";

const PrivacyPolicy = () => {
  return (
    <PageWrapper>
      <section className="mt-24 max-w-4xl mx-auto px-6 text-[#C5C6C7]">
        <h1 className="text-4xl font-bold text-[#66FCF1] mb-6">Privacy Policy</h1>

        <p className="text-[#9CA3AF] mb-6">
          Last updated: 21 November 2022
        </p>

        <h2 className="text-2xl font-semibold text-white mt-6 mb-2">1. Introduction</h2>
        <p className="text-[#C5C6C7] leading-relaxed">
          At QLeap.ai we respect your privacy. This policy explains what information we collect,
          why we collect it, how we use it, and the choices you have about your data.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-6 mb-2">2. Information We Collect</h2>
        <ul className="text-[#C5C6C7] list-disc ml-6 leading-relaxed">
          <li>Information you provide directly (name, email, message, resumes, profile data).</li>
          <li>Usage data (pages visited, interactions, device and browser information).</li>
          <li>Cookies and tracking data used to improve product experience.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-white mt-6 mb-2">3. How We Use Information</h2>
        <p className="text-[#C5C6C7] leading-relaxed">
          We use data to respond to inquiries, improve our products, provide services, and communicate
          updates. We do not sell personal data to third parties.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-6 mb-2">4. Sharing & Disclosure</h2>
        <p className="text-[#C5C6C7] leading-relaxed">
          We share data only with service providers who support our operations (hosting, analytics, email),
          and where required by law. We require partners to maintain reasonable data protections.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-6 mb-2">5. Cookies & Tracking</h2>
        <p className="text-[#C5C6C7] leading-relaxed">
          We use cookies and similar technologies to operate the site and analyze usage. You can control
          cookie settings via your browser, though some features may be affected.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-6 mb-2">6. Data Retention & Security</h2>
        <p className="text-[#C5C6C7] leading-relaxed">
          We retain data as necessary for the purposes described and implement reasonable technical
          and organizational measures to protect against unauthorized access.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-6 mb-2">7. Your Rights</h2>
        <p className="text-[#C5C6C7] leading-relaxed">
          You may request access, correction, or deletion of your personal data. To exercise these rights,
          contact us at <a href="/contact" className="text-[#66FCF1] underline">Contact</a>.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-6 mb-2">8. Changes to this Policy</h2>
        <p className="text-[#C5C6C7] leading-relaxed">
          We may update this policy. Significant changes will be posted with an updated effective date.
        </p>

        <div className="mt-10 border-t border-[#1F2833] pt-6 text-sm text-[#9CA3AF]">
          <p>Contact: <a href="mailto:hello@QLeap.ai" className="text-[#66FCF1] underline">hello@QLeap.ai</a></p>
        </div>
      </section>
    </PageWrapper>
  );
};

export default PrivacyPolicy;
