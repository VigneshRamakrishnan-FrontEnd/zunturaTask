import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { CustomImages } from "../components/common/CustomImages";

const navLinks = ["CRED pay", "CRED coins", "CRED score", "CRED protect"];

export default function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/5 bg-black/30 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5">
            <img
              src={CustomImages.Logo}
              alt="Logo"
              className="h-6 w-6 object-contain"
            />
          </div>
          <h1 className="font-display text-2xl font-bold tracking-tight text-white">
            CRED
          </h1>
        </div>

        <nav className="hidden items-center gap-10 lg:flex">
          {navLinks.map((item) => (
            <a
              key={item}
              href="/"
              className="group relative text-sm font-medium text-text-secondary transition duration-300 hover:text-white"
            >
              {item}
              <span className="absolute -bottom-2 left-0 h-[1px] w-0 bg-purple transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <button className="btn-premium purple-glow rounded-2xl px-7 py-3 text-sm font-semibold text-white cursor-pointer">
            Download CRED
          </button>
        </div>
        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenu(!mobileMenu)}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white lg:hidden"
        >
          {mobileMenu ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenu && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.35 }}
            className="border-t border-white/5 bg-[#090909]/95 backdrop-blur-2xl lg:hidden"
          >
            <div className="flex flex-col gap-6 px-6 py-8">
              {navLinks.map((item) => (
                <a
                  key={item}
                  href="/"
                  className="text-lg font-medium text-text-secondary transition hover:text-white"
                >
                  {item}
                </a>
              ))}
              <button className="mt-4 btn-premium purple-glow rounded-2xl px-6 py-4 text-base font-semibold text-white">
                Download CRED
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
