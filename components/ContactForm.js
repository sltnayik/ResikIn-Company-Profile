"use client";

import { useState } from "react";

const kebutuhanOptions = [
  { value: "", label: "Pilih kebutuhan..." },
  { value: "demo", label: "Jadwalkan Demo" },
  { value: "harga", label: "Informasi Harga" },
  { value: "kemitraan", label: "Kemitraan" },
  { value: "dukungan", label: "Dukungan Teknis" },
  { value: "lain", label: "Lainnya" },
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    kebutuhan: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Nama wajib diisi";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email wajib diisi";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Format email tidak valid";
    }

    if (!formData.kebutuhan) {
      newErrors.kebutuhan = "Pilih kebutuhan Anda";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Pesan wajib diisi";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Pesan minimal 10 karakter";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitStatus(null);

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitStatus("success");
    setFormData({
      name: "",
      email: "",
      company: "",
      kebutuhan: "",
      message: "",
    });
  };

  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-xl">
      <h2 className="mb-6 text-2xl font-bold text-[#0d2818]">Kirim Pesan</h2>

      {submitStatus === "success" && (
        <div className="mb-6 rounded-xl border border-[#22c55e]/30 bg-[#22c55e]/10 p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#22c55e] text-white">
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
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-[#0d2818]">Pesan Terkirim!</h3>
              <p className="text-sm text-gray-600">
                Terima kasih telah menghubungi kami. Tim kami akan merespons
                dalam 24 jam.
              </p>
            </div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-700">
            Nama Lengkap <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full rounded-xl border px-4 py-3 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#22c55e]/20 ${
              errors.name
                ? "border-red-500 focus:border-red-500"
                : "border-gray-200 focus:border-[#22c55e]"
            }`}
            placeholder="John Doe"
          />
          {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full rounded-xl border px-4 py-3 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#22c55e]/20 ${
              errors.email
                ? "border-red-500 focus:border-red-500"
                : "border-gray-200 focus:border-[#22c55e]"
            }`}
            placeholder="john@company.com"
          />
          {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="company" className="mb-2 block text-sm font-medium text-gray-700">
            Perusahaan / Organisasi
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full rounded-xl border border-gray-200 px-4 py-3 transition-all duration-300 focus:border-[#22c55e] focus:outline-none focus:ring-2 focus:ring-[#22c55e]/20"
            placeholder="PT Maju Jaya"
          />
        </div>

        <div>
          <label
            htmlFor="kebutuhan"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Kebutuhan <span className="text-red-500">*</span>
          </label>
          <select
            id="kebutuhan"
            name="kebutuhan"
            value={formData.kebutuhan}
            onChange={handleChange}
            className={`w-full rounded-xl border bg-white px-4 py-3 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#22c55e]/20 ${
              errors.kebutuhan
                ? "border-red-500 focus:border-red-500"
                : "border-gray-200 focus:border-[#22c55e]"
            }`}
          >
            {kebutuhanOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {errors.kebutuhan && (
            <p className="mt-1 text-sm text-red-500">{errors.kebutuhan}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="message"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Pesan <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className={`w-full resize-none rounded-xl border px-4 py-3 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#22c55e]/20 ${
              errors.message
                ? "border-red-500 focus:border-red-500"
                : "border-gray-200 focus:border-[#22c55e]"
            }`}
            placeholder="Ceritakan kebutuhan Anda..."
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-500">{errors.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#4ade80] px-8 py-4 text-lg font-bold text-[#0d2818] shadow-lg transition-all duration-300 hover:bg-[#22c55e] hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isSubmitting ? (
            <>
              <svg className="h-5 w-5 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4Zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647Z"
                />
              </svg>
              Mengirim...
            </>
          ) : (
            <>
              Kirim Pesan
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0-7 7m7-7H3"
                />
              </svg>
            </>
          )}
        </button>
      </form>
    </div>
  );
}
