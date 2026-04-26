import Link from "next/link";
import ContactForm from "../../components/ContactForm";

export const metadata = {
  title: "Hubungi Kami - ResikIn Tech",
  description:
    "Hubungi tim ResikIn untuk konsultasi gratis tentang solusi digital pengelolaan sampah.",
};

const contactInfo = {
  address: "Jl. Teknologi Hijau No. 42, Jakarta Selatan 12140",
  email: "hello@resikin.id",
  phone: "+62 21 5550 1234",
  hours: "Senin - Jumat: 09.00 - 18.00 WIB",
  whatsapp: "+62 812 3456 7890",
};

const trustReasons = [
  {
    title: "Respon Cepat",
    description: "Tim kami akan merespons dalam 24 jam kerja.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "Konsultasi Gratis",
    description: "Dapatkan konsultasi awal tanpa biaya.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "Solusi Custom",
    description: "Disesuaikan dengan kebutuhan spesifik Anda.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
];

const faqs = [
  {
    question: "Berapa lama proses implementasi?",
    answer: "Biasanya 2-4 minggu tergantung kompleksitas.",
  },
  {
    question: "Apakah ada biaya uji coba gratis?",
    answer: "Ya, kami menyediakan demo gratis selama 14 hari.",
  },
  {
    question: "Bagaimana cara memulai?",
    answer: "Isi form atau hubungi langsung melalui WhatsApp.",
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0d2818] via-[#153d26] to-[#1a5d35] text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(74,222,128,0.15),transparent_50%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#143d24_1px,transparent_1px),linear-gradient(to_bottom,#143d24_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 text-center md:py-28">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-[#4ade80] animate-pulse" />
            Hubungi Kami
          </div>

          <h1 className="mx-auto mb-6 max-w-3xl text-4xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl">
            Mari Bersama Membangun Kota yang Lebih Bersih
          </h1>

          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-300 md:text-xl">
            Tim kami siap membantu Anda menemukan solusi terbaik untuk
            pengelolaan sampah dan kebersihan lingkungan.
          </p>
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
          <div className="grid gap-12 lg:grid-cols-5">
            <div className="space-y-8 lg:col-span-2">
              <div>
                <h2 className="mb-4 text-2xl font-bold text-[#0d2818] md:text-3xl">
                  Informasi Kontak
                </h2>
                <p className="text-gray-600">
                  Jangan ragu untuk menghubungi kami melalui berbagai channel di
                  bawah ini.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-[#22c55e]/10 text-[#16a34a]">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0d2818]">Alamat Kantor</h3>
                    <p className="text-gray-600">{contactInfo.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-[#22c55e]/10 text-[#16a34a]">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0d2818]">Email</h3>
                    <a href={`mailto:${contactInfo.email}`} className="text-[#16a34a] hover:underline">
                      {contactInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-[#22c55e]/10 text-[#16a34a]">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0d2818]">Telepon</h3>
                    <a href={`tel:${contactInfo.phone}`} className="text-[#16a34a] hover:underline">
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-[#22c55e]/10 text-[#16a34a]">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0d2818]">Jam Operasional</h3>
                    <p className="text-gray-600">{contactInfo.hours}</p>
                  </div>
                </div>

                <a
                  href={`https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-6 py-3 font-bold text-white shadow-lg transition-all duration-300 hover:bg-[#20BD5A] hover:shadow-xl"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
                  </svg>
                  Chat WhatsApp
                </a>
              </div>
            </div>

            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <h2 className="text-2xl font-bold text-[#0d2818] md:text-3xl">
              Mengapa Memilih Kami?
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            {trustReasons.map((reason) => (
              <article
                key={reason.title}
                className="rounded-2xl bg-white p-6 text-center shadow-sm transition-all duration-300 hover:shadow-md"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-[#22c55e]/10 text-[#16a34a]">
                  {reason.icon}
                </div>
                <h3 className="mb-2 text-lg font-bold text-[#0d2818]">
                  {reason.title}
                </h3>
                <p className="text-sm text-gray-600">{reason.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <div className="mb-12 text-center">
            <h2 className="text-2xl font-bold text-[#0d2818] md:text-3xl">
              Pertanyaan Umum
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <article key={faq.question} className="overflow-hidden rounded-xl border border-gray-200">
                <div className="bg-gray-50 p-5">
                  <div className="flex items-center justify-between">
                    <h3 className="pr-4 font-bold text-[#0d2818]">{faq.question}</h3>
                    <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#22c55e]/10 text-[#16a34a]">
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
                <div className="border-t border-gray-200 p-5">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-[#0d2818] via-[#153d26] to-[#1a5d35] py-16 md:py-20">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-[#4ade80] blur-3xl" />
          <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-[#22c55e] blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            Masih Ragu?
          </h2>
          <p className="mb-8 text-xl text-gray-300">
            Jadwalkan konsultasi gratis dengan tim ahli kami untuk menemukan
            solusi terbaik.
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/service"
              className="group flex items-center justify-center gap-2 rounded-xl bg-[#4ade80] px-8 py-4 text-lg font-bold text-[#0d2818] shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#22c55e] hover:shadow-xl"
            >
              Lihat Layanan
              <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
            <Link
              href="/about"
              className="group flex items-center justify-center gap-2 rounded-xl border-2 border-white/30 bg-transparent px-8 py-4 text-lg font-bold text-white transition-all duration-300 hover:border-white/60 hover:bg-white/10"
            >
              Pelajari Kami
              <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 7l5 5m0 0-5 5m5-5H6"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
