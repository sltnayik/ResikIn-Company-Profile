import Link from "next/link";
import teamData from "../../../data/team.json";

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

function getTeamMembers() {
  return Array.isArray(teamData) ? teamData : [];
}

function getTeamMemberById(id) {
  return getTeamMembers().find((member) => member.id === id);
}

function getRelatedMembers(currentId) {
  return getTeamMembers().filter((member) => member.id !== currentId).slice(0, 3);
}

export async function generateStaticParams() {
  return getTeamMembers().map((member) => ({
    id: member.id,
  }));
}

export async function generateMetadata({ params }) {
  const member = getTeamMemberById(params.id);

  if (!member) {
    return {
      title: "Anggota Tim Tidak Ditemukan - ResikIn",
      description: "Profil anggota tim yang Anda cari tidak tersedia.",
    };
  }

  return {
    title: `${member.name} - ${member.role} | ResikIn`,
    description: member.bio,
  };
}

function NotFoundState() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0d2818] via-[#153d26] to-[#1a5d35] py-24 text-white md:py-32">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(74,222,128,0.15),transparent_50%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#143d24_1px,transparent_1px),linear-gradient(to_bottom,#143d24_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        </div>

        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
          <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur-sm">
            Team Detail
          </span>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight md:text-5xl">
            Profil anggota tim tidak ditemukan
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-emerald-50/80">
            Profil yang Anda cari mungkin telah diperbarui atau tidak tersedia
            lagi. Anda tetap bisa melihat daftar tim ResikIn yang lain.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/team"
              className="inline-flex items-center justify-center rounded-full bg-[#4ade80] px-8 py-4 text-base font-bold text-[#0d2818] transition hover:bg-[#22c55e]"
            >
              Kembali ke Tim
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-white/25 px-8 py-4 text-base font-bold text-white transition hover:bg-white/10"
            >
              Hubungi Kami
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default async function TeamDetailPage({ params }) {
  const member = getTeamMemberById(params.id);

  if (!member) {
    return <NotFoundState />;
  }

  const allMembers = getTeamMembers();
  const memberIndex = allMembers.findIndex((item) => item.id === member.id);
  const relatedMembers = getRelatedMembers(member.id);
  const gradient = getMemberGradient(memberIndex >= 0 ? memberIndex : 0);
  const firstName = member.name.split(" ")[0];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0d2818] via-[#153d26] to-[#1a5d35] text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(74,222,128,0.15),transparent_50%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#143d24_1px,transparent_1px),linear-gradient(to_bottom,#143d24_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-sm">
                <span className="h-2 w-2 rounded-full bg-[#4ade80] animate-pulse" />
                Tim ResikIn
              </div>

              <div
                className={`mb-8 flex h-36 w-36 items-center justify-center rounded-full bg-gradient-to-br ${gradient} text-4xl font-bold text-white shadow-2xl md:h-44 md:w-44 md:text-5xl`}
              >
                {getInitials(member.name)}
              </div>

              <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
                {member.name}
              </h1>
              <p className="mt-4 text-xl font-semibold text-[#4ade80] md:text-2xl">
                {member.role}
              </p>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-emerald-50/80">
                {member.bio}
              </p>
            </div>

            <div className="space-y-5">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center">
                    <p className="text-3xl font-bold text-[#4ade80]">
                      {member.experience}
                    </p>
                    <p className="mt-2 text-sm text-emerald-50/70">Experience</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center">
                    <p className="text-3xl font-bold text-[#4ade80]">
                      {member.achievements.length}
                    </p>
                    <p className="mt-2 text-sm text-emerald-50/70">
                      Key Achievements
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-200">
                  Specialization
                </p>
                <p className="mt-3 text-lg text-white">{member.specialization}</p>
              </div>

              <Link
                href={`mailto:${member.contactEmail}`}
                className="inline-flex w-full items-center justify-center rounded-full bg-[#4ade80] px-6 py-4 text-base font-bold text-[#0d2818] transition hover:bg-[#22c55e]"
              >
                Hubungi {firstName}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 md:grid-cols-3">
            <article className="rounded-3xl bg-emerald-50 p-6 text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                <svg
                  className="h-7 w-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2Z"
                  />
                </svg>
              </div>
              <h2 className="text-lg font-bold text-[#0d2818]">Experience</h2>
              <p className="mt-2 text-slate-600">{member.experience}</p>
            </article>

            <article className="rounded-3xl bg-emerald-50 p-6 text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                <svg
                  className="h-7 w-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8.5 14.5a5 5 0 117 0l-.548.547A3.374 3.374 0 0014 17.469V18a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386L8.5 14.5Z"
                  />
                </svg>
              </div>
              <h2 className="text-lg font-bold text-[#0d2818]">Expertise</h2>
              <p className="mt-2 text-slate-600">{member.specialization}</p>
            </article>

            <article className="rounded-3xl bg-emerald-50 p-6 text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                <svg
                  className="h-7 w-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2Z"
                  />
                </svg>
              </div>
              <h2 className="text-lg font-bold text-[#0d2818]">Contact</h2>
              <Link
                href={`mailto:${member.contactEmail}`}
                className="mt-2 inline-block text-emerald-700 transition hover:text-emerald-800 hover:underline"
              >
                {member.contactEmail}
              </Link>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-emerald-50 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <span className="inline-block rounded-full bg-white px-4 py-1 text-sm font-semibold text-emerald-700 shadow-sm">
              Achievements
            </span>
            <h2 className="mt-4 text-3xl font-bold text-[#0d2818] md:text-4xl">
              Pencapaian {firstName}
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {member.achievements.map((achievement) => (
              <article
                key={achievement}
                className="rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138Z"
                    />
                  </svg>
                </div>
                <p className="text-base leading-7 text-slate-700">{achievement}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {relatedMembers.length > 0 && (
        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold text-[#0d2818] md:text-4xl">
                Tim Lainnya
              </h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {relatedMembers.map((relatedMember, index) => (
                <Link
                  key={relatedMember.id}
                  href={`/team/${relatedMember.id}`}
                  className="group rounded-3xl border border-emerald-100 bg-white p-6 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div
                    className={`mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br ${getMemberGradient(
                      index + 1
                    )} text-2xl font-bold text-white transition duration-300 group-hover:scale-105`}
                  >
                    {getInitials(relatedMember.name)}
                  </div>
                  <h3 className="text-lg font-bold text-[#0d2818] transition group-hover:text-emerald-600">
                    {relatedMember.name}
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">{relatedMember.role}</p>
                  <p className="mt-4 line-clamp-2 text-sm leading-7 text-slate-600">
                    {relatedMember.bio}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 transition group-hover:gap-3">
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
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
