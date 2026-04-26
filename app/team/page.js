import Link from "next/link";
import teamData from "../../data/team.json";

export const metadata = {
  title: "Tim Kami - ResikIn Tech",
  description:
    "Kenali tim profesional ResikIn yang membangun solusi kebersihan dan sustainability untuk masa depan yang lebih baik.",
};

const profileGradients = [
  "from-emerald-500 to-teal-600",
  "from-lime-500 to-emerald-700",
  "from-green-500 to-emerald-800",
  "from-teal-500 to-green-700",
];

function getMemberGradient(index) {
  return profileGradients[index % profileGradients.length];
}

function getInitials(name) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

function EmptyTeamState() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <div className="rounded-3xl border border-emerald-100 bg-white p-10 shadow-sm">
          <span className="inline-flex rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
            Tim ResikIn
          </span>
          <h2 className="mt-5 text-3xl font-bold text-[#0d2818]">
            Data tim belum tersedia
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Informasi anggota tim sedang diperbarui. Silakan hubungi ResikIn
            untuk mendapatkan informasi terbaru mengenai tim kami.
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

function TeamCard({ member, index }) {
  return (
    <article className="group rounded-3xl border border-emerald-100 bg-white p-6 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div
        className={`mx-auto mb-5 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br ${getMemberGradient(
          index
        )} text-2xl font-bold text-white shadow-lg transition duration-300 group-hover:scale-105`}
      >
        {getInitials(member.name)}
      </div>

      <h3 className="text-xl font-bold text-[#0d2818] transition group-hover:text-emerald-600">
        {member.name}
      </h3>
      <p className="mt-1 text-sm font-semibold uppercase tracking-[0.16em] text-emerald-700">
        {member.role}
      </p>
      <p className="mt-4 line-clamp-3 text-sm leading-7 text-slate-600">
        {member.bio}
      </p>

      <div className="mt-5 rounded-2xl bg-emerald-50 px-4 py-3 text-left">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-emerald-700">
          Specialization
        </p>
        <p className="mt-1 text-sm text-slate-700">{member.specialization}</p>
      </div>

      <Link
        href={`/team/${member.id}`}
        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 transition group-hover:gap-3"
      >
        Lihat Profil
        <svg
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </Link>
    </article>
  );
}

export default function TeamPage() {
  const teamMembers = Array.isArray(teamData) ? teamData : [];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0d2818] via-[#153d26] to-[#1a5d35] text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(74,222,128,0.15),transparent_50%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#143d24_1px,transparent_1px),linear-gradient(to_bottom,#143d24_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 text-center md:py-28">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-[#4ade80] animate-pulse" />
            Tim ResikIn
          </div>

          <h1 className="mx-auto max-w-4xl text-4xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl">
            Orang-Orang Hebat di Balik{" "}
            <span className="bg-gradient-to-r from-[#4ade80] to-[#22c55e] bg-clip-text text-transparent">
              Solusi Berkelanjutan
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-emerald-50/80 md:text-xl">
            Tim lintas fungsi yang memadukan teknologi, operasional, dan visi
            sustainability untuk menghadirkan dampak nyata bersama ResikIn.
          </p>
        </div>
      </section>

      {teamMembers.length === 0 ? (
        <EmptyTeamState />
      ) : (
        <section className="py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto mb-16 max-w-2xl text-center">
              <span className="inline-block rounded-full bg-emerald-100 px-4 py-1 text-sm font-semibold text-emerald-700">
                Our Team
              </span>
              <h2 className="mt-4 text-3xl font-bold text-[#0d2818] md:text-4xl">
                Profesional yang Menjalankan Misi ResikIn
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                Setiap anggota tim membawa keahlian berbeda untuk membangun
                layanan kebersihan dan keberlanjutan yang lebih efektif.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
              {teamMembers.map((member, index) => (
                <TeamCard key={member.id} member={member} index={index} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-emerald-50 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {[
              {
                number: `${teamMembers.length}+`,
                label: "Anggota Inti",
              },
              {
                number: "10+",
                label: "Tahun Pengalaman Gabungan",
              },
              {
                number: "100%",
                label: "Berfokus pada Sustainability",
              },
              {
                number: "24/7",
                label: "Komitmen pada Solusi",
              },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-[#0d2818] md:text-5xl">
                  {stat.number}
                </div>
                <div className="mt-2 text-sm font-medium text-slate-500">
                  {stat.label}
                </div>
              </div>
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
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Ingin berkolaborasi dengan tim kami?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-emerald-50/75">
            Mari diskusikan kebutuhan organisasi Anda bersama tim ResikIn untuk
            menciptakan solusi kebersihan dan sustainability yang relevan.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[#4ade80] px-8 py-4 text-base font-bold text-[#0d2818] transition hover:bg-[#22c55e]"
            >
              Hubungi Kami
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
