import About from "../components/sections/About";
import Features from "../components/sections/Features";
import Hero from "../components/sections/Hero";
import { Security } from "../components/sections/Security";
import { StatsBar } from "../components/sections/StatusBar";
import { Testimonials } from "../components/sections/Testimonials";

export default function Home() {
  return (
    <div className="w-full h-full">
      <Hero />

      <About />

      <Features />

      <Testimonials />

      <StatsBar />

      <Security />
    </div>
  );
}
