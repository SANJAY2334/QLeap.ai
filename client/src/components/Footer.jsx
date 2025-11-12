const Footer = () => {
  return (
    <footer className="bg-[#0B0C10] text-[#C5C6C7] border-t border-[#1F2833] py-10 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-center md:text-left">
        {/* ──────────────────────────────── 1️⃣ Brand Section */}
        <div>
          <h3 className="text-[#66FCF1] font-bold text-xl mb-2">Quantum Leap.ai</h3>
          <p className="text-sm text-[#9CA3AF] leading-relaxed">
            Innovating intelligent solutions for a smarter tomorrow.  
            Combining AI precision and human creativity to engineer systems that evolve with purpose.
          </p>
        </div>

        {/* ──────────────────────────────── 2️⃣ Quick Links */}
        <div>
          <h4 className="text-[#66FCF1] font-semibold text-lg mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm text-[#9CA3AF]">
            <li><a href="/about" className="hover:text-[#45A29E] transition">About Us</a></li>
            <li><a href="/products" className="hover:text-[#45A29E] transition">Products</a></li>
            <li><a href="/services" className="hover:text-[#45A29E] transition">Services</a></li>
            <li><a href="/careers" className="hover:text-[#45A29E] transition">Careers</a></li>
            <li><a href="/contact" className="hover:text-[#45A29E] transition">Contact</a></li>
          </ul>
        </div>

        {/* ──────────────────────────────── 3️⃣ Legal & Contact */}
        <div>
          <h4 className="text-[#66FCF1] font-semibold text-lg mb-3">Legal & Contact</h4>
          <ul className="space-y-2 text-sm text-[#9CA3AF]">
            <li><a href="/privacy" className="hover:text-[#45A29E] transition">Privacy Policy</a></li>
            <li><a href="/terms" className="hover:text-[#45A29E] transition">Terms of Service</a></li>
            <li>
              <a href="mailto:hello@QLeap.ai" className="hover:text-[#45A29E] transition">
                hello@QLeap.ai
              </a>
            </li>
            <li>
              <p className="text-[#9CA3AF] text-sm mt-2 leading-relaxed">
                <strong>Head Office:</strong><br />
                Quantum Leap Innovations Pvt. Ltd.<br />
                Bengaluru, Karnataka, India
              </p>
            </li>
          </ul>
        </div>

        {/* ──────────────────────────────── 4️⃣ Social Media */}
        <div>
          <h4 className="text-[#66FCF1] font-semibold text-lg mb-3">Connect With Us</h4>
          <div className="flex justify-center md:justify-start gap-4 mt-2">
            <a
              href="https://www.linkedin.com/company/qleap-ai"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-[#45A29E] transition"
            >
              <i className="fab fa-linkedin text-2xl"></i>
            </a>
            <a
              href="https://github.com/qleap-ai"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-[#45A29E] transition"
            >
              <i className="fab fa-github text-2xl"></i>
            </a>
            <a
              href="https://twitter.com/qleap_ai"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="hover:text-[#45A29E] transition"
            >
              <i className="fab fa-twitter text-2xl"></i>
            </a>
            <a
              href="https://www.instagram.com/QLeap.ai"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-[#45A29E] transition"
            >
              <i className="fab fa-instagram text-2xl"></i>
            </a>
          </div>
        </div>
      </div>

      {/* ──────────────────────────────── Divider */}
      <div className="border-t border-[#1F2833] mt-10 pt-6 text-center text-xs text-[#9CA3AF]">
        © {new Date().getFullYear()} QLeap.ai — All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
