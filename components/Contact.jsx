"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { SendIcon, CheckCircleIcon } from "lucide-react";
import emailjs from "@emailjs/browser";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Contact() {
  const formRef = useRef(null);

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        "service_xxx123",
        "template_abc456",
        formRef.current,
        { publicKey: "your_public_key_here" }
      );

      setIsSubmitted(true);
      setFormState({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      setError("Échec de l'envoi. Vérifie EmailJS et réessaie.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50"
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-2xl mx-auto">
        <motion.div variants={fadeInUp} className="text-center space-y-4 mb-12">
          <span className="text-sm font-mono text-teal-600 tracking-wider uppercase">
            Parlons de votre projet
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Travaillons ensemble !
          </h2>
          <p className="text-gray-600">Une idée, un projet ? Discutons.</p>
        </motion.div>

        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-3xl p-12 shadow-sm border border-gray-100 text-center"
          >
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircleIcon className="w-8 h-8 text-teal-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Message envoyé !
            </h3>
            <p className="text-gray-600">
              Merci de m’avoir contactée, je reviens vers vous très vite.
            </p>
            <button
              onClick={() => {
                setIsSubmitted(false);
                setError("");
              }}
              className="mt-6 text-teal-600 hover:text-teal-700 font-medium"
            >
              Envoyer un autre message
            </button>
          </motion.div>
        ) : (
          <motion.form
            ref={formRef}
            variants={fadeInUp}
            onSubmit={handleSubmit}
            className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 space-y-6"
          >
            {error ? (
              <p className="text-sm text-red-600 font-medium">{error}</p>
            ) : null}

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-gray-700"
                >
                  Nom
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formState.name}
                  onChange={(e) =>
                    setFormState((s) => ({ ...s, name: e.target.value }))
                  }
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition-all"
                  placeholder="Votre nom"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formState.email}
                  onChange={(e) =>
                    setFormState((s) => ({ ...s, email: e.target.value }))
                  }
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition-all"
                  placeholder="Votre email"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="message"
                className="text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formState.message}
                onChange={(e) =>
                  setFormState((s) => ({ ...s, message: e.target.value }))
                }
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition-all resize-none"
                placeholder="Vous avez un projet ? Parlons-en..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gray-900 text-white rounded-xl font-medium hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Envoi...
                </>
              ) : (
                <>
                  Envoyer le message
                  <SendIcon className="w-4 h-4" />
                </>
              )}
            </button>
          </motion.form>
        )}
      </div>
    </motion.section>
  );
}
