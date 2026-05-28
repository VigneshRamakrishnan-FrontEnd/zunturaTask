import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <section className="relative flex min-h-screen items-center justify-center bg-black px-6 overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple/10 blur-[150px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple/10 blur-[120px] rounded-full" />

      <div className="relative z-10 text-center max-w-xl">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[6rem] sm:text-[8rem] font-black tracking-tight text-white"
        >
          404
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-2xl sm:text-3xl font-semibold text-white"
        >
          Page not found
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-4 text-white/60"
        >
          The page you’re looking for doesn’t exist or has been moved.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-8"
        >
          <button
            onClick={() => navigate("/")}
            className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-purple-bright to-purple-hover px-6 py-3 text-sm font-medium text-white shadow-purple-glow transition-all duration-300 hover:scale-[1.03]"
          >
            <ArrowLeft
              size={16}
              className="transition-transform group-hover:-translate-x-1"
            />
            Go back home
          </button>
        </motion.div>
      </div>
    </section>
  );
}
