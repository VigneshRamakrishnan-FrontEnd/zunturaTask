import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { CustomImages } from "../common/CustomImages";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black pt-24">
      <div className="absolute right-0 top-0 h-[700px] w-[700px] rounded-full bg-purple/10 blur-[160px]" />

      <div className="absolute inset-0 opacity-[0.03] mix-blend-soft-light">
        <div className="h-full w-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      <div className="relative mx-auto grid min-h-[90vh] max-w-7xl items-center gap-10 px-6 lg:grid-cols-2 lg:px-10">
        <div className="z-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-purple"
          >
            Not everyone gets it.
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className=" font-display text-[3rem] font-black leading-[0.9] tracking-[-0.06em] text-white sm:text-[5rem] lg:text-[6rem] "
          >
            Neither <br /> should you.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className=" mt-8 max-w-md text-lg leading-8 text-white/70 "
          >
            CRED is an exclusive community for India's most trustworthy
            individuals. Pay your credit card bills, earn rewards and experience
            a world of privileges.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="mt-10"
          >
            <button className=" group flex items-center gap-3 rounded-2xl bg-gradient-to-r from-purple-bright to-purple-hover px-8 py-5 text-lg font-semibold text-white shadow-purple-glow transition-all duration-300 hover:scale-[1.03] ">
              Join CRED
              <ArrowRight
                size={20}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-8 flex items-center gap-2"
          >
            <p className="text-sm text-white/40"> Already a member? </p>
            <button className="text-sm font-medium text-purple transition hover:text-white">
              Log in
            </button>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="mt-16 flex items-center gap-4"
          >
            <div className="flex h-10 w-6 items-start justify-center rounded-full border border-white/20 p-1">
              <div className="h-2 w-2 rounded-full bg-white/60" />
            </div>
            <span className="text-sm text-white/40">Scroll to explore</span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative flex justify-center lg:justify-end"
        >
          <motion.img
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            src={CustomImages.HeroPodium}
            alt="CRED Hero"
            className=" relative z-10 w-full max-w-[700px] object-contain drop-shadow-[0_0_80px_rgba(139,92,246,0.25)] "
          />

          <div className="absolute bottom-0 h-40 w-96 rounded-full bg-purple/30 blur-[100px]" />
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
