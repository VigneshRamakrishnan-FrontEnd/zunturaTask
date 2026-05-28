import { Star } from "lucide-react";
import { CustomImages } from "../common/CustomImages";

function RatingCard({ title, rating, reviews, image }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl text-center">
      <img src={image} alt={title} className="h-12 mx-auto mb-4" />

      <p className="text-white/60 text-sm">{title}</p>

      <h3 className="text-3xl font-bold text-white mt-2">{rating}</h3>

      <div className="flex justify-center gap-1 mt-2">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
        ))}
      </div>

      <p className="text-xs text-white/50 mt-2">{reviews}</p>
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="bg-black py-10 px-6 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 items-center">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-purple mb-4">
            Rated by millions
          </p>

          <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
            Loved by <br /> millions of members.
          </h2>

          <p className="mt-6 text-white/60 max-w-md">
            Our members trust us for our reliability, rewards and exceptional
            experience.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          <RatingCard
            title="App Store"
            rating="4.8"
            reviews="250K+ Ratings"
            image={CustomImages.Ios}
          />
          <RatingCard
            title="Play Store"
            rating="4.7"
            reviews="1M+ Ratings"
            image={CustomImages.Playstore}
          />
        </div>
      </div>
    </section>
  );
}
