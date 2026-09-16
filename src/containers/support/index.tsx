"use client";

import { useState } from "react";
import { Mail } from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const SUPPORT_EMAIL = "info@tikneo.com";
const SUCCESS_RESET_DELAY_MS = 6000;

const inputClasses =
  "w-full px-4 py-2.5 rounded-lg border border-gray-300 bg-gray-50/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors";

export default function Support() {
  const [status, setStatus] = useState<"idle" | "success">("idle");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const asunto = ((data.get("asunto") as string) || "").trim();
    const subject = encodeURIComponent(
      asunto ? `TikNEO - Soporte: ${asunto}` : "TikNEO - Soporte"
    );
    const body = encodeURIComponent((data.get("mensaje") as string) || "");
    window.location.href = `mailto:${SUPPORT_EMAIL}?subject=${subject}&body=${body}`;
    setStatus("success");
    setTimeout(() => setStatus("idle"), SUCCESS_RESET_DELAY_MS);
  };

  return (
    <section className="min-h-screen py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <AnimateOnScroll variant="fadeUp">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary text-center mb-3">
            Soporte
          </h1>
          <p className="text-gray-600 text-center text-base sm:text-lg leading-relaxed">
            ¿Tienes una duda, un problema con la aplicación o una sugerencia?
            Escríbenos y nuestro equipo te responderá lo antes posible. Completa
            el formulario y se abrirá tu aplicación de correo con el mensaje
            listo para enviar.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll variant="fadeUp" delay={80}>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-2 rounded-2xl bg-secondary px-5 py-4 text-center">
            <span className="flex items-center gap-2 font-semibold text-primary">
              <Mail className="h-5 w-5 shrink-0" aria-hidden="true" />
              Correo de soporte:
            </span>
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="font-semibold text-primary underline underline-offset-2 hover:opacity-80 transition-opacity"
            >
              {SUPPORT_EMAIL}
            </a>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll variant="fadeUp" delay={120}>
          <div className="mt-8 bg-white rounded-2xl sm:rounded-3xl shadow-lg border border-gray-100 p-5 sm:p-6 md:p-10">
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="soporte-asunto"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Asunto
                </label>
                <input
                  id="soporte-asunto"
                  name="asunto"
                  type="text"
                  className={inputClasses}
                  placeholder="¿En qué podemos ayudarte?"
                />
              </div>

              <div>
                <label
                  htmlFor="soporte-mensaje"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Mensaje*
                </label>
                <textarea
                  id="soporte-mensaje"
                  name="mensaje"
                  required
                  rows={6}
                  className={`${inputClasses} resize-y`}
                  placeholder="Cuéntanos los detalles de tu consulta…"
                />
              </div>

              <div className="pt-2">
                {status === "success" && (
                  <p
                    role="status"
                    className="text-center text-sm text-green-600 font-medium mb-3"
                  >
                    Se abrirá tu cliente de correo con el mensaje preparado para{" "}
                    {SUPPORT_EMAIL}. Si no se abre, escríbenos directamente.
                  </p>
                )}
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl font-bold text-white bg-primary hover:opacity-90 transition-all shadow-md"
                >
                  Enviar mensaje
                </button>
              </div>
            </form>
          </div>
        </AnimateOnScroll>

        <p className="mt-6 text-center text-sm text-gray-500">
          Si el formulario no abre tu aplicación de correo, escríbenos
          directamente a{" "}
          <a
            href={`mailto:${SUPPORT_EMAIL}`}
            className="text-primary underline underline-offset-2 hover:opacity-80 transition-opacity"
          >
            {SUPPORT_EMAIL}
          </a>
          .
        </p>
      </div>
    </section>
  );
}
