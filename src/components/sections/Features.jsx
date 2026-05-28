import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { CustomImages } from "../common/CustomImages";

const features = [
  {
    title: "Pay Credit Card Bills",
    desc: "Pay your bills seamlessly and never miss a due date.",
    image: CustomImages.Pay,
  },
  {
    title: "CRED Coins",
    desc: "Earn CRED coins on every payment and redeem exciting rewards.",
    image: CustomImages.Coins,
  },
  {
    title: "CRED Score",
    desc: "Track your credit health for free and improve your score.",
    image: CustomImages.Score,
  },
  {
    title: "UPI Payments",
    desc: "Secure UPI payments with exclusive benefits.",
    image: CustomImages.UPI,
  },
  {
    title: "Rewards",
    desc: "Unlock premium rewards from top brands.",
    image: CustomImages.Reward,
  },
  {
    title: "Cashback",
    desc: "Get assured cashback on your bill payments.",
    image: CustomImages.Cashback,
  },
];

export default function Features() {
  return (
    <section className="relative bg-black py-10 px-6 lg:px-10 overflow-hidden">
      <div className="mx-auto mb-14 flex max-w-7xl items-center justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-purple mb-4">
            Features
          </p>

          <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
            Everything you need. <br /> One place.
          </h2>
        </div>

        <button className="hidden md:flex items-center gap-2 rounded-xl border border-white/10 px-6 py-3 text-sm text-white/70 hover:text-white hover:border-white/20 transition">
          Explore all features
          <ArrowRight size={16} />
        </button>
      </div>

      <div className="mx-auto max-w-7xl">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={1.2}
          loop={true}
          speed={4000} // smooth continuous movement
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          //   allowTouchMove={true}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3.2 },
            1280: { slidesPerView: 4 },
          }}
        >
          {features.map((feature, index) => (
            <SwiperSlide key={index}>
              <FeatureCard {...feature} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

function FeatureCard({ title, desc, image }) {
  return (
    <motion.div
      transition={{ duration: 0.4 }}
      className="group relative h-full rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
      style={{
        boxShadow: "0 10px 40px rgba(0,0,0,0.5)",
      }}
    >
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-purple/10 blur-2xl" />

      <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-xl bg-black/40">
        <img src={image} alt={title} className="h-12 object-contain" />
      </div>

      <h3 className="text-white font-semibold text-lg">{title}</h3>

      <p className="mt-2 text-sm text-white/50 leading-relaxed">{desc}</p>
    </motion.div>
  );
}
