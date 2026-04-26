import Link from "next/link";
import serviceData from "../data/service.json";

export const metadata = {
  title: "ResikIn - Smart Sustainability for Cleaner Cities",
  description:
    "ResikIn membantu bisnis dan komunitas membangun sistem cleaning, recycling, dan sustainability yang lebih modern, efisien, dan berdampak.",
};

const stats = [
  { number: "15+", label: "Kota Terjangkau" },
  { number: "50rb+", label: "Laporan Diproses" },
  { number: "98%", label: "Kepuasan Mitra" },
  { number: "200+", label: "Tim Profesional" },
];

const services = Array.isArray(serviceData) ? serviceData.slice(0, 3) : [];

function HomeServiceIcon({ icon }) {
  const iconClassName = "h-8 w-8";

  switch (icon) {
    case "Leaf":
      return (
        <svg className={iconClassName} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.8"
            d="M6 21c6.5 0 12-5.5 12-12V3h-6C6.5 3 2 7.5 2 13v2c0 3.314 2.686 6 6 6Zm0 0c0-4 2-7 6-10"
          />
        </svg>
      );
    case "Trash2":
      return (
        <svg className={iconClassName} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.8"
            d="M4 7h16M9 7V5a1 1 0 011-1h4a1 1 0 011 1v2m-8 0 1 12a1 1 0 001 .917h6a1 1 0 001-.917L17 7"
          />
        </svg>
      );
    case "Recycle":
      return (
        <svg className={iconClassName} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.8"
            d="M7.5 10 5 5.5 9.5 3M5 5.5h5M16.5 14 19 18.5 14.5 21M19 18.5h-5M8 17H3l2.5-4.5M21 7h-5l2.5 4.5M8 17l2.5 4.5M21 7l-2.5-4.5"
          />
        </svg>
      );
    default:
      return (
        <svg className={iconClassName} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.8"
            d="M12 6v12M6 12h12"
          />
        </svg>
      );
  }
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0d2818] via-[#153d26] to-[#1a5d35] text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(168,230,207,0.15),transparent_50%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#143d24_1px,transparent_1px),linear-gradient(to_bottom,#143d24_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="max-w-2xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-sm">
                <span className="h-2 w-2 rounded-full bg-[#4ade80] animate-pulse" />
                Sustainability Platform for Modern Operations
              </div>

              <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl">
                Solusi Digital untuk{" "}
                <span className="bg-gradient-to-r from-[#4ade80] to-[#22c55e] bg-clip-text text-transparent">
                  Lingkungan yang Lebih Bersih
                </span>
              </h1>

              <p className="mb-8 max-w-xl text-lg leading-8 text-gray-300 md:text-xl">
                ResikIn membantu bisnis, komunitas, dan institusi membangun
                sistem cleaning, waste management, dan recycling yang lebih
                efisien, terukur, dan berkelanjutan.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="group flex items-center justify-center gap-2 rounded-xl bg-[#4ade80] px-8 py-4 text-center font-bold text-[#0d2818] shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#22c55e] hover:shadow-xl"
                >
                  Mulai Sekarang
                  <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link
                  href="/service"
                  className="group flex items-center justify-center gap-2 rounded-xl border-2 border-white/20 px-8 py-4 text-center font-bold text-white transition-all duration-300 hover:border-white/40 hover:bg-white/10"
                >
                  Pelajari Layanan
                  <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-[#4ade80]/20 via-transparent to-[#22c55e]/10 blur-3xl" />
              <div className="relative rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-md">
                <div className="mb-4 flex items-center gap-3">
                  <div className="h-3 w-3 rounded-full bg-red-500" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500" />
                  <div className="h-3 w-3 rounded-full bg-green-500" />
                </div>
                <div className="space-y-3">
                  <div className="h-4 w-3/4 rounded bg-white/10" />
                  <div className="h-4 w-1/2 rounded bg-white/10" />
                  <div className="mt-6 grid grid-cols-3 gap-3">
                    {stats.slice(0, 3).map((stat) => (
                      <div key={stat.label} className="rounded-xl border border-white/10 bg-white/5 p-4">
                        <div className="text-2xl font-bold text-[#4ade80]">{stat.number}</div>
                        <div className="text-xs text-gray-400">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path
              d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="group text-center">
                <div className="mb-2 text-3xl font-bold text-[#0d2818] transition-colors duration-300 group-hover:text-[#22c55e] md:text-5xl">
                  {stat.number}
                </div>
                <div className="font-medium text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <span className="inline-block rounded-full bg-[#22c55e]/10 px-4 py-1 text-sm font-semibold text-[#16a34a]">
              Layanan Kami
            </span>
            <h2 className="mt-4 text-3xl font-bold text-[#0d2818] md:text-4xl">
              Solusi Komprehensif untuk Operasional Berkelanjutan
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Dari cleaning hingga recycling strategy, ResikIn menghadirkan
              layanan yang siap mendukung performa operasional modern.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.id}
                className="group rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#22c55e]/30 hover:shadow-xl"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#22c55e]/10 text-[#16a34a] transition-all duration-300 group-hover:bg-[#22c55e] group-hover:text-white">
                  <HomeServiceIcon icon={service.icon} />
                </div>
                <h3 className="mb-3 text-xl font-bold text-[#0d2818]">
                  {service.title}
                </h3>
                <p className="mb-6 leading-relaxed text-gray-600">
                  {service.description}
                </p>
                <Link
                  href="/service"
                  className="inline-flex items-center gap-2 font-semibold text-[#16a34a] transition-all group-hover:gap-3"
                >
                  Selengkapnya
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-[#0d2818] via-[#153d26] to-[#1a5d35] py-20 md:py-28">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-[#4ade80] blur-3xl" />
          <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-[#22c55e] blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-6 text-3xl font-bold text-white md:text-5xl">
            Siap transformasi operasional Anda?
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-xl text-gray-300">
            Bangun sistem kebersihan dan sustainability yang terasa modern,
            kredibel, dan berdampak nyata bersama ResikIn.
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="group flex items-center justify-center gap-2 rounded-xl bg-[#4ade80] px-10 py-4 text-lg font-bold text-[#0d2818] shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#22c55e] hover:shadow-xl"
            >
              Hubungi Kami
              <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </Link>
            <Link
              href="/about"
              className="group flex items-center justify-center gap-2 rounded-xl border-2 border-white/30 px-10 py-4 text-lg font-bold text-white transition-all duration-300 hover:border-white/60 hover:bg-white/10"
            >
              Pelajari Lebih Lanjut
              <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
