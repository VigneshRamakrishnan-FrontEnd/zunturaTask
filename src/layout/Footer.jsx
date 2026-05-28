import { FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";
import { CustomImages } from "../components/common/CustomImages";

const footerLinks = {
  CRED: ["About us", "Careers", "CRED Blog", "Newsroom"],
  PRODUCTS: [
    "CRED pay",
    "CRED coins",
    "CRED score",
    "CRED protect",
    "CRED store",
  ],
  COMPANY: ["Careers", "Contact us", "Partners", "Media kit"],
  LEGAL: [
    "Privacy Policy",
    "Terms & Conditions",
    "Grievance Redressal",
    "Fair Practice Code",
  ],
};

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/5 bg-black">
      <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-purple/10 blur-[140px]" />
      <div className="relative mx-auto max-w-7xl px-6 pb-10 pt-10 lg:pt-21 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                <img src={CustomImages.Logo} alt="CRED" className="h-6 w-6" />
              </div>
              <h2 className="font-display text-3xl font-bold text-white">
                CRED
              </h2>
            </div>
            <p className="mt-6 max-w-sm text-base leading-7 text-text-secondary">
              CRED is a members-only club that rewards trust. Pay bills, earn
              rewards and enjoy premium experiences curated for the best.
            </p>

            <div className="mt-8 flex items-center gap-4">
              {[FaInstagram, FaTwitter, FaLinkedin, FaYoutube].map(
                (Icon, i) => (
                  <button
                    key={i}
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-text-secondary transition duration-300 hover:border-purple/40 hover:bg-purple/10 hover:text-white"
                  >
                    <Icon size={18} />
                  </button>
                ),
              )}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="mb-6 text-sm font-semibold tracking-[0.2em] text-white/90">
                  {title}
                </h3>
                <ul className="space-y-4">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="/"
                        className="text-sm text-text-secondary transition duration-300 hover:text-white"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="my-12 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
          <p className="text-sm text-text-muted">
            © 2026 CRED. All rights reserved.
          </p>
          <p className="flex items-center gap-2 text-sm text-text-muted">
            Made with <span className="text-red-500">♥</span> in India
          </p>
        </div>
      </div>
    </footer>
  );
}
