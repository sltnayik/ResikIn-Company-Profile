import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "ResikIn - Sustainable Cleaning Solutions",
  description:
    "Innovative eco-friendly startup delivering smart cleaning and recycling services.",
  metadataBase: new URL("https://resikin.example"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-emerald-50 text-slate-900">
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
