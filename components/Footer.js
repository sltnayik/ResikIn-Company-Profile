import Link from "next/link";
import Image from "next/image";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/service" },
  { label: "Team", href: "/team" },
  { label: "Contact", href: "/contact" },
];

const services = [
  "Eco Cleaning",
  "Waste Management",
  "Smart Recycling",
  "Sustainability Consulting",
];

const contactInfo = [
  { label: "Email", value: "hello@resikin.id", href: "mailto:hello@resikin.id" },
  { label: "Phone", value: "+62 812-3456-7890", href: "tel:+6281234567890" },
  {
    label: "Location",
    value: "Jakarta, Indonesia",
    href: "https://maps.google.com",
  },
];

function FooterSection({ title, children }) {
  return (
    <section>
      <h3 className="text-lg font-semibold tracking-tight text-white">{title}</h3>
      <div className="mt-5 space-y-3 text-sm leading-7 text-emerald-50/80">
        {children}
      </div>
    </section>
  );
}

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-emerald-950 via-green-900 to-emerald-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10">
        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-4">
          <section className="max-w-sm">
        <Link
          href="/"
          className="flex items-center gap-3 text-white transition hover:text-emerald-200"
          aria-label="ResikIn homepage"
        >
          <Image
            src="/logo-no-bg.png"
            alt="ResikIn logo"
            width={190}
            height={62}
            priority
            className="h-10 w-auto object-contain sm:h-11"
          />
        </Link>
            <p className="mt-5 text-sm leading-7 text-emerald-50/80">
              ResikIn is a clean-tech startup focused on smarter cleaning,
              better waste solutions, and sustainable living for modern
              communities and businesses.
            </p>
          </section>

          <FooterSection title="Quick Links">
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-2 transition duration-300 hover:translate-x-1 hover:text-emerald-300"
              >
                <span className="text-emerald-400">&bull;</span>
                <span>{link.label}</span>
              </Link>
            ))}
          </FooterSection>

          <FooterSection title="Services">
            {services.map((service) => (
              <p
                key={service}
                className="flex items-center gap-2 transition duration-300 hover:translate-x-1 hover:text-emerald-300"
              >
                <span className="text-emerald-400">&bull;</span>
                <span>{service}</span>
              </p>
            ))}
          </FooterSection>

          <FooterSection title="Contact Info">
            {contactInfo.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.label === "Location" ? "_blank" : undefined}
                rel={item.label === "Location" ? "noreferrer" : undefined}
                className="block transition duration-300 hover:text-emerald-300"
              >
                <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300/80">
                  {item.label}
                </span>
                <span className="mt-1 block text-sm text-emerald-50/90">
                  {item.value}
                </span>
              </a>
            ))}
          </FooterSection>
        </div>

        <div className="mt-12 border-t border-emerald-700/60 pt-6">
          <div className="flex flex-col gap-3 text-sm text-emerald-100/75 sm:flex-row sm:items-center sm:justify-between">
            <p>&copy; {new Date().getFullYear()} ResikIn. All rights reserved.</p>
            <p>Built for a cleaner future with sustainable innovation.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
