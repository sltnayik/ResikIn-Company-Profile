import Link from "next/link";
import serviceData from "../../data/service.json";

export const metadata = {
  title: "Layanan - ResikIn Tech",
  description:
    "Pelajari layanan lengkap ResikIn untuk pengelolaan kebersihan, daur ulang, dan operasional berkelanjutan.",
};

const howItWorks = [
  {
    step: 1,
    title: "Assessment Kebutuhan",
    description:
      "Kami memetakan kebutuhan operasional, target kebersihan, dan tantangan keberlanjutan yang paling relevan untuk organisasi Anda.",
  },
  {
    step: 2,
    title: "Desain Solusi",
    description:
      "Tim ResikIn menyusun paket layanan, alur kerja, dan indikator performa agar implementasi berjalan efisien sejak hari pertama.",
  },
  {
    step: 3,
    title: "Eksekusi Lapangan",
    description:
      "Layanan dijalankan secara terukur dengan koordinasi tim, pemantauan kualitas, dan pelaporan progres yang konsisten.",
  },
  {
    step: 4,
    title: "Evaluasi & Optimasi",
    description:
      "Kami meninjau hasil, mengukur dampak, dan menyempurnakan strategi agar performa kebersihan dan sustainability terus meningkat.",
  },
];

const industries = [
  {
    name: "Corporate Office",
    description:
      "Mendukung kebersihan area kerja modern dengan standar higienitas dan operasional yang konsisten.",
  },
  {
    name: "Commercial Property",
    description:
      "Cocok untuk gedung komersial, retail, dan area publik yang membutuhkan layanan terjadwal dan terukur.",
  },
  {
    name: "Hospitality & Lifestyle",
    description:
      "Meningkatkan pengalaman pengunjung melalui lingkungan yang lebih bersih, aman, dan ramah lingkungan.",
  },
  {
    name: "Community & Institution",
    description:
      "Mendukung sekolah, kawasan hunian, dan fasilitas umum dengan solusi kebersihan dan daur ulang yang lebih praktis.",
  },
];

function ServiceIcon({ icon }) {
  const iconClassName = "h-7 w-7";

  switch (icon) {
    case "Leaf":
      return (
        <svg
          className={iconClassName}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
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
        <svg
          className={iconClassName}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
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
        <svg
          className={iconClassName}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.8"
            d="M7.5 10 5 5.5 9.5 3M5 5.5h5M16.5 14 19 18.5 14.5 21M19 18.5h-5M8 17H3l2.5-4.5M21 7h-5l2.5 4.5M8 17l2.5 4.5M21 7l-2.5-4.5"
          />
        </svg>
      );
    case "Sparkles":
      return (
        <svg
          className={iconClassName}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.8"
            d="m12 3 1.8 4.7L18.5 9l-4.7 1.3L12 15l-1.8-4.7L5.5 9l4.7-1.3L12 3ZM19 15l.9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9L19 15ZM5 14l1.2 2.8L9 18l-2.8 1.2L5 22l-1.2-2.8L1 18l2.8-1.2L5 14Z"
          />
        </svg>
      );
    case "BarChart3":
      return (
        <svg
          className={iconClassName}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.8"
            d="M4 20h16M7 16v-5M12 16V8M17 16V4"
          />
        </svg>
      );
    case "Truck":
      return (
        <svg
          className={iconClassName}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.8"
            d="M1 6h13v10H1V6Zm13 3h4l3 3v4h-7V9Zm-9 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm13 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
          />
        </svg>
      );
    default:
      return (
        <svg
          className={iconClassName}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
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

function ServiceCard({ service }) {
  return (
    <article className="group rounded-3xl border border-emerald-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl">
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700 transition duration-300 group-hover:bg-emerald-600 group-hover:text-white">
        <ServiceIcon icon={service.icon} />
      </div>

      <div className="mb-4 flex items-center justify-between gap-4">
        <h3 className="text-xl font-bold text-[#0d2818]">{service.title}</h3>
        <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
          {service.category}
        </span>
      </div>

      <p className="mb-5 text-sm leading-7 text-slate-600">
        {service.description}
      </p>

      <ul className="space-y-2">
        {service.benefits.map((benefit) => (
          <li
            key={benefit}
            className="flex items-start gap-3 text-sm text-slate-600"
          >
            <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-400" />
            <span>{benefit}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

function EmptyState() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <div className="rounded-3xl border border-emerald-100 bg-white p-10 shadow-sm">
          <span className="inline-flex rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
            Layanan ResikIn
          </span>
          <h2 className="mt-5 text-3xl font-bold text-[#0d2818]">
            Data layanan belum tersedia
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Saat ini informasi layanan sedang diperbarui. Silakan hubungi tim
            kami untuk mendapatkan katalog layanan terbaru.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
          >
            Hubungi Kami
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function ServicePage() {
  const services = Array.isArray(serviceData) ? serviceData : [];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0d2818] via-[#153d26] to-[#1a5d35] text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(74,222,128,0.15),transparent_50%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#143d24_1px,transparent_1px),linear-gradient(to_bottom,#143d24_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        </div>

        <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-6 py-20 md:py-28 lg:grid-cols-2 lg:items-center">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-[#4ade80] animate-pulse" />
              Solusi ResikIn
            </div>

            <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl">
              Layanan Berkelanjutan untuk{" "}
              <span className="bg-gradient-to-r from-[#4ade80] to-[#22c55e] bg-clip-text text-transparent">
                Operasional yang Lebih Bersih
              </span>
            </h1>

            <p className="max-w-xl text-lg leading-8 text-emerald-50/80 md:text-xl">
              ResikIn menghadirkan rangkaian layanan modern untuk membantu
              bisnis dan komunitas menjaga kebersihan, mengelola limbah, dan
              membangun sistem kerja yang lebih berkelanjutan.
            </p>
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-[#4ade80]/20 via-transparent to-[#22c55e]/10 blur-3xl" />
            <div className="relative rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-md">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <div className="text-3xl font-bold text-[#4ade80]">
                    {services.length || "0"}
                  </div>
                  <p className="mt-2 text-sm text-emerald-50/70">
                    Core service offerings
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <div className="text-3xl font-bold text-[#4ade80]">100%</div>
                  <p className="mt-2 text-sm text-emerald-50/70">
                    Sustainability-focused approach
                  </p>
                </div>
                <div className="col-span-2 rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-sm uppercase tracking-[0.18em] text-emerald-200">
                    Service Scope
                  </p>
                  <p className="mt-3 text-lg font-semibold text-white">
                    Cleaning, waste operations, recycling systems, consulting,
                    and green logistics in one integrated ecosystem.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {services.length === 0 ? (
        <EmptyState />
      ) : (
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto mb-16 max-w-2xl text-center">
              <span className="inline-block rounded-full bg-emerald-100 px-4 py-1 text-sm font-semibold text-emerald-700">
                Service Portfolio
              </span>
              <h2 className="mt-4 text-3xl font-bold text-[#0d2818] md:text-4xl">
                Solusi Lengkap untuk Kebutuhan Lapangan dan Strategis
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                Seluruh layanan dirancang untuk memberi dampak operasional yang
                nyata sekaligus mendukung target keberlanjutan jangka panjang.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {services.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-emerald-50 py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <span className="inline-block rounded-full bg-white px-4 py-1 text-sm font-semibold text-emerald-700 shadow-sm">
              How It Works
            </span>
            <h2 className="mt-4 text-3xl font-bold text-[#0d2818] md:text-4xl">
              Proses yang Terstruktur dan Mudah Diimplementasikan
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {howItWorks.map((item) => (
              <article
                key={item.step}
                className="rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-600 text-xl font-bold text-white">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-[#0d2818]">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <span className="inline-block rounded-full bg-emerald-100 px-4 py-1 text-sm font-semibold text-emerald-700">
              Ideal For
            </span>
            <h2 className="mt-4 text-3xl font-bold text-[#0d2818] md:text-4xl">
              Dirancang untuk Berbagai Lingkungan Operasional
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {industries.map((industry) => (
              <article
                key={industry.name}
                className="rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="text-lg font-bold text-[#0d2818]">
                  {industry.name}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {industry.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-[#0d2818] via-[#153d26] to-[#1a5d35] py-20 md:py-24">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-[#4ade80] blur-3xl" />
          <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-[#22c55e] blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold text-white md:text-5xl">
            Siap membangun operasional yang lebih bersih?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-emerald-50/75">
            Tim ResikIn siap membantu Anda memilih kombinasi layanan yang tepat
            untuk kebutuhan kebersihan dan sustainability organisasi Anda.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[#4ade80] px-8 py-4 text-base font-bold text-[#0d2818] transition hover:bg-[#22c55e]"
            >
              Jadwalkan Konsultasi
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-full border border-white/25 px-8 py-4 text-base font-bold text-white transition hover:bg-white/10"
            >
              Pelajari ResikIn
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
