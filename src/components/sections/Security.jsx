import { Lock, ShieldCheck, Fingerprint } from "lucide-react";

function SecurityCard({ icon, title, desc }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl text-center">
      <div className="text-purple mb-4 flex justify-center">{icon}</div>

      <h4 className="text-white font-semibold">{title}</h4>

      <p className="text-sm text-white/50 mt-2">{desc}</p>
    </div>
  );
}

export function Security() {
  return (
    <section className="bg-black py-10 px-6 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 items-center">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-purple mb-4">
            Security you can trust
          </p>

          <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
            Your security, <br /> our priority.
          </h2>

          <p className="mt-6 text-white/60 max-w-md">
            We use bank-grade security and advanced encryption to keep your data
            and transactions 100% secure.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          <SecurityCard
            icon={<Lock />}
            title="Bank-grade Encryption"
            desc="Your data is protected with 256-bit encryption."
          />

          <SecurityCard
            icon={<ShieldCheck />}
            title="Secure Payments"
            desc="All transactions are secured with multiple layers."
          />

          <SecurityCard
            icon={<Fingerprint />}
            title="Privacy Protection"
            desc="Your data is never shared. Ever."
          />
        </div>
      </div>
    </section>
  );
}
