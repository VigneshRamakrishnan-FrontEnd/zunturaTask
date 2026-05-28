import { Users, ShieldCheck, Star } from "lucide-react";


function Stat({ icon, value, label }) {
  return (
    <div className="flex items-center gap-3 text-white">
      <div className="text-purple">{icon}</div>
      <div>
        <p className="text-lg font-semibold">{value}</p>
        <p className="text-xs text-white/50">{label}</p>
      </div>
    </div>
  );
}

function Divider() {
  return <div className="hidden md:block h-8 w-px bg-white/10" />;
}

export function StatsBar() {
  return (
    <section className="px-6 lg:px-10">
      <div className="mx-auto py-10 max-w-7xl rounded-2xl border border-white/10 bg-gradient-to-r from-[#0b0b12] via-[#111018] to-[#0b0b12] py-6 px-8 flex flex-wrap items-center justify-between gap-6">
        <Stat icon={<Users />} value="13M+" label="Members" />
        <Divider />

        <Stat icon={<ShieldCheck />} value="100%" label="On-time payments" />
        <Divider />

        <Stat icon={<Star />} value="4.8" label="App Store rating" />
        <Divider />

        <Stat icon={<Star />} value="4.7" label="Play Store rating" />
      </div>
    </section>
  );
}


