import { motion } from "framer-motion";
import { Crown, ShieldCheck, Sparkles } from "lucide-react";
import { CustomImages } from "../common/CustomImages";

export default function AboutCred() {
  return (
    <section className="relative bg-black py-10 px-6 lg:px-12">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <img
            src={CustomImages.About} // your image
            alt="CRED Door"
            className="w-full max-w-[500px] object-contain"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sm uppercase tracking-[0.2em] text-white/40 mb-4">
            About CRED
          </p>

          <h2 className="text-4xl sm:text-5xl font-bold leading-tight text-white">
            A members-only club <br />
            that rewards trust.
          </h2>

          <p className="mt-6 max-w-lg text-white/60 leading-7">
            We believe in rewarding responsible credit behaviour. CRED members
            enjoy exclusive rewards, experiences and privileges curated for the
            best.
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="glass-card p-6 rounded-2xl text-center feature-card">
              <Crown className="mx-auto mb-3 text-purple" size={28} />
              <h4 className="text-white font-semibold">Exclusive</h4>
              <p className="text-sm text-white/50 mt-1">By invitation only</p>
            </div>

            <div className="glass-card p-6 rounded-2xl text-center feature-card">
              <ShieldCheck className="mx-auto mb-3 text-purple" size={28} />
              <h4 className="text-white font-semibold">Trusted</h4>
              <p className="text-sm text-white/50 mt-1">Built on trust</p>
            </div>

            <div className="glass-card p-6 rounded-2xl text-center feature-card">
              <Sparkles className="mx-auto mb-3 text-purple" size={28} />
              <h4 className="text-white font-semibold">Rewarding</h4>
              <p className="text-sm text-white/50 mt-1">Benefits that matter</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
