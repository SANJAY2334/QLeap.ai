import PageWrapper from "../components/PageWrapper";

const Terms = () => {
  return (
    <PageWrapper>
      <section className="mt-24 max-w-4xl mx-auto px-6 text-[#C5C6C7]">
        <h1 className="text-4xl font-bold text-[#66FCF1] mb-6">Terms of Service</h1>

        <p className="text-[#9CA3AF] mb-6">
          Effective date: 21 November 2022
        </p>

        <h2 className="text-2xl font-semibold text-white mt-6 mb-2">1. Acceptance</h2>
        <p className="text-[#C5C6C7] leading-relaxed">
          By using QLeap.ai services or site, you agree to these Terms. If you do not agree, do not use
          our services.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-6 mb-2">2. Services</h2>
        <p className="text-[#C5C6C7] leading-relaxed">
          QLeap.ai provides software, consulting, and related services. Specific terms for paid services
          will be governed by separate agreements.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-6 mb-2">3. Acceptable Use</h2>
        <p className="text-[#C5C6C7] leading-relaxed">
          You must not misuse our services to conduct illegal activity, abuse or infringe rights, or harm
          systems. We reserve the right to suspend or terminate accounts that violate acceptable use.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-6 mb-2">4. Intellectual Property</h2>
        <p className="text-[#C5C6C7] leading-relaxed">
          QLeap.ai retains ownership of its platform, trademarks, and content. You retain ownership of
          content you provide, subject to rights you grant to QLeap.ai to operate the service.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-6 mb-2">5. Limitation of Liability</h2>
        <p className="text-[#C5C6C7] leading-relaxed">
          To the maximum extent permitted by law, QLeap.ai’s liability is limited. We provide services
          "as is" and do not guarantee uninterrupted operation. For paid services, liability limits may be
          further defined in service agreements.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-6 mb-2">6. Termination</h2>
        <p className="text-[#C5C6C7] leading-relaxed">
          We may suspend or terminate access for violations or by notice. On termination, outstanding
          obligations survive as described in these Terms.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-6 mb-2">7. Governing Law</h2>
        <p className="text-[#C5C6C7] leading-relaxed">
          These Terms are governed by the applicable law specified in your service agreement or, absent
          agreement, by the jurisdiction where QLeap.ai is registered. Consult legal counsel for interpretation.
        </p>

        <div className="mt-10 border-t border-[#1F2833] pt-6 text-sm text-[#9CA3AF]">
          <p>Questions? Email <a href="mailto:legal@QLeap.ai" className="text-[#66FCF1] underline">legal@QLeap.ai</a></p>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Terms;
