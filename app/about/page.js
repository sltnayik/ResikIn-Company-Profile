import Link from "next/link";
import teamData from "../../data/team.json";

export const metadata = {
  title: "Tentang Kami - ResikIn",
  description:
    "Pelajari perjalanan, nilai, dan tim di balik ResikIn dalam membangun solusi kebersihan dan sustainability yang modern.",
};

const milestones = [
  {
    year: "2022",
    title: "Awal Mula",
    description:
      "ResikIn lahir dari kebutuhan akan solusi kebersihan dan waste operations yang lebih modern, terukur, dan mudah diakses.",
  },
  {
    year: "2023",
    title: "Pilot Project",
    description:
      "Kami mulai bekerja sama dengan organisasi dan komunitas untuk menguji alur layanan cleaning dan recycling yang lebih efisien.",
  },
  {
    year: "2024",
    title: "Ekspansi Layanan",
    description:
      "Rangkaian layanan ResikIn berkembang ke consulting, workplace sanitation, dan green logistics untuk kebutuhan operasional yang lebih luas.",
  },
  {
    year: "2025",
    title: "Scale with Impact",
    description:
      "ResikIn bertumbuh sebagai startup sustainability yang memadukan operational excellence, data, dan service design.",
  },
];

const coreValues = [
  {
    title: "Operational Clarity",
    description:
      "Kami percaya sistem yang baik harus terasa jelas, terukur, dan benar-benar memudahkan tim di lapangan.",
  },
  {
    title: "Sustainable Thinking",
    description:
      "Setiap layanan dirancang untuk memberi dampak jangka panjang, bukan hanya hasil sesaat.",
  },
  {
    title: "Trusted Collaboration",
    description:
      "Kami membangun hubungan kerja yang kuat dengan klien, partner, dan komunitas untuk hasil yang lebih konsisten.",
  },
  {
    title: "Continuous Improvement",
    description:
      "Kami terus mengevaluasi layanan, pengalaman pengguna, dan kualitas eksekusi agar tumbuh lebih baik setiap saat.",
  },
];

const impactStats = [
  { number: "50rb+", label: "Laporan Diproses" },
  { number: "15+", label: "Kota Terjangkau" },
  { number: "98%", label: "Tingkat Kepuasan" },
  { number: "200+", label: "Tim Profesional" },
];

const previewTeam = Array.isArray(teamData) ? teamData.slice(0, 4) : [];

function getInitials(name) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

const gradients = [
  "from-emerald-500 to-teal-600",
  "from-lime-500 to-emerald-700",
  "from-green-500 to-emerald-800",
  "from-teal-500 to-green-700",
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0d2818] via-[#153d26] to-[#1a5d35] text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(74,222,128,0.15),transparent_50%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#143d24_1px,transparent_1px),linear-gradient(to_bottom,#143d24_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="max-w-2xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-sm">
                <span className="h-2 w-2 rounded-full bg-[#4ade80] animate-pulse" />
                Tentang ResikIn
              </div>

              <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl">
                Membangun standar baru untuk{" "}
                <span className="bg-gradient-to-r from-[#4ade80] to-[#22c55e] bg-clip-text text-transparent">
                  kebersihan dan sustainability
                </span>
              </h1>

              <p className="max-w-xl text-lg leading-8 text-gray-300 md:text-xl">
                ResikIn hadir untuk membantu organisasi bergerak lebih rapi,
                lebih hijau, dan lebih siap menghadapi tantangan operasional
                modern melalui layanan yang terasa profesional sejak hari
                pertama.
              </p>
            </div>

            <div className="relative hidden lg:block">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-[#4ade80]/20 via-transparent to-[#22c55e]/10 blur-3xl" />
              <div className="relative rounded-2xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-md">
                <div className="grid grid-cols-2 gap-4">
                  {impactStats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-xl border border-white/10 bg-white/5 p-4 text-center"
                    >
                      <div className="text-3xl font-bold text-[#4ade80]">
                        {stat.number}
                      </div>
                      <div className="mt-1 text-sm text-gray-400">
                        {stat.label}
                      </div>
                    </div>
                  ))}
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

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <span className="inline-block rounded-full bg-[#22c55e]/10 px-4 py-1 text-sm font-semibold text-[#16a34a]">
              Perjalanan Kami
            </span>
            <h2 className="mt-4 text-3xl font-bold text-[#0d2818] md:text-4xl">
              Bertumbuh dari kebutuhan nyata di lapangan
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {milestones.map((milestone) => (
              <article
                key={milestone.year}
                className="rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="inline-flex rounded-full bg-emerald-100 px-4 py-2 text-sm font-bold text-emerald-700">
                  {milestone.year}
                </span>
                <h3 className="mt-5 text-xl font-bold text-[#0d2818]">
                  {milestone.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {milestone.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-emerald-50 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <span className="inline-block rounded-full bg-white px-4 py-1 text-sm font-semibold text-emerald-700 shadow-sm">
              Nilai Utama
            </span>
            <h2 className="mt-4 text-3xl font-bold text-[#0d2818] md:text-4xl">
              Prinsip yang membentuk cara kami bekerja
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {coreValues.map((value) => (
              <article
                key={value.title}
                className="rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="text-lg font-bold text-[#0d2818]">{value.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {value.description}
                </p>
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

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <span className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm font-semibold text-[#4ade80]">
              Dampak Kami
            </span>
            <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
              Membangun dampak yang terukur untuk organisasi dan lingkungan
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {impactStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="mb-2 text-3xl font-bold text-[#4ade80] md:text-5xl">
                  {stat.number}
                </div>
                <div className="font-medium text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <span className="inline-block rounded-full bg-[#22c55e]/10 px-4 py-1 text-sm font-semibold text-[#16a34a]">
              Tim Kami
            </span>
            <h2 className="mt-4 text-3xl font-bold text-[#0d2818] md:text-4xl">
              Dipimpin oleh tim lintas fungsi yang berpengalaman
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {previewTeam.map((member, index) => (
              <Link
                key={member.id}
                href={`/team/${member.id}`}
                className="group rounded-3xl border border-emerald-100 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div
                  className={`mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br ${gradients[index % gradients.length]} text-2xl font-bold text-white transition group-hover:scale-105`}
                >
                  {getInitials(member.name)}
                </div>
                <h3 className="text-lg font-bold text-[#0d2818] transition group-hover:text-emerald-600">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm text-slate-500">{member.role}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20 md:py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-6 text-3xl font-bold text-[#0d2818] md:text-5xl">
            Siap bertumbuh bersama ResikIn?
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-xl text-slate-600">
            Mari bangun sistem kebersihan dan sustainability yang lebih rapi,
            modern, dan relevan untuk kebutuhan organisasi Anda.
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
              href="/service"
              className="group flex items-center justify-center gap-2 rounded-xl border-2 border-[#0d2818]/20 px-10 py-4 text-lg font-bold text-[#0d2818] transition-all duration-300 hover:bg-[#0d2818] hover:text-white"
            >
              Lihat Layanan
              <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
