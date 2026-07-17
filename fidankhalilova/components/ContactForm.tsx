"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error: any) {
      setStatus("error");
      setErrorMessage(error.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 mx-auto p-6 border rounded-3xl bg-white shadow-sm w-full"
    >
      <h3 className="text-2xl font-bold text-[#AC6891]">Ask me anything!</h3>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Your Name
        </label>
        <input
          type="text"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 border rounded-xl outline-none focus:border-[#AC6891] transition"
          placeholder="Fidan Khalilova"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Your Email
        </label>
        <input
          type="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 border rounded-xl outline-none focus:border-[#AC6891] transition"
          placeholder="example@domain.com"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Message Context
        </label>
        <textarea
          name="message"
          rows={5}
          required
          value={formData.message}
          onChange={handleChange}
          className="w-full p-3 border rounded-xl outline-none focus:border-[#AC6891] transition resize-none"
          placeholder="How can we collaborate?"
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-[#AC6891] text-white font-bold p-3 rounded-xl hover:bg-[#8e5275] transition disabled:bg-gray-400"
      >
        {status === "loading" ? "Sending..." : "Send Message"}
      </button>

      {status === "success" && (
        <p className="text-green-600 font-semibold text-center text-sm">
          ✓ Message sent successfully! I will get back to you soon.
        </p>
      )}
      {status === "error" && (
        <p className="text-red-500 font-semibold text-center text-sm">
          ✗ Error: {errorMessage}
        </p>
      )}
    </form>
  );
}
