"use client";

import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import type { PlanOption } from "./plans";

type PlanContactModalProps = {
  plan: PlanOption;
  onClose: () => void;
};

export default function PlanContactModal({
  plan,
  onClose,
}: PlanContactModalProps) {
  const [mounted, setMounted] = useState(false);
  const [status, setStatus] = useState<"idle" | "success">("idle");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (key: string) => (data.get(key) as string) || "-";
    const subject = encodeURIComponent(`TikNEO - ${get("asunto")}`);
    const body = encodeURIComponent(
      `Plan: ${plan.name} (${plan.price} ${plan.baseDescription})\n` +
        `Nombre: ${get("nombre")}\n` +
        `Email: ${get("email")}\n` +
        `Empresa: ${get("empresa")}\n\n` +
        `Mensaje: ${get("mensaje")}`
    );
    window.location.href = `mailto:info@tikneo.com?subject=${subject}&body=${body}`;
    setStatus("success");
  };

  useEffect(() => {
    setMounted(true);
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  if (!mounted) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={`Consultar precio del ${plan.name}`}
        className="relative bg-white rounded-[32px] shadow-xl w-full max-w-lg p-6 sm:p-8 my-8"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          aria-label="Cerrar"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-gray-500 hover:bg-gray-100 transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        <h3 className="text-xl sm:text-2xl font-bold text-primary text-center mb-2">
          {plan.name}
        </h3>
        <p className="text-gray-600 text-center text-sm md:text-base mb-6">
          Déjanos tus datos y te contactamos con el precio a tu medida.
        </p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input type="hidden" name="plan" value={plan.slug} />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="plan-nombre"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Nombre*
              </label>
              <input
                id="plan-nombre"
                name="nombre"
                type="text"
                required
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 bg-gray-50/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                placeholder="Nombre"
              />
            </div>
            <div>
              <label
                htmlFor="plan-email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email*
              </label>
              <input
                id="plan-email"
                name="email"
                type="email"
                required
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 bg-gray-50/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                placeholder="Email"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="plan-empresa"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Nombre de empresa
            </label>
            <input
              id="plan-empresa"
              name="empresa"
              type="text"
              className="w-full px-4 py-2.5 rounded-lg border border-gray-300 bg-gray-50/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
              placeholder="Nombre de empresa"
            />
          </div>

          <div>
            <label
              htmlFor="plan-asunto"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Asunto*
            </label>
            <input
              id="plan-asunto"
              name="asunto"
              type="text"
              required
              defaultValue={plan.contactSubject}
              className="w-full px-4 py-2.5 rounded-lg border border-gray-300 bg-gray-50/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
              placeholder="Asunto"
            />
          </div>

          <div>
            <label
              htmlFor="plan-mensaje"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Mensaje
            </label>
            <textarea
              id="plan-mensaje"
              name="mensaje"
              rows={4}
              defaultValue={plan.contactMessage}
              className="w-full px-4 py-2.5 rounded-lg border border-gray-300 bg-gray-50/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors resize-y"
              placeholder="Cuéntanos sobre tu empresa o resuelve tus dudas"
            />
          </div>

          <div className="pt-1">
            {status === "success" && (
              <p
                role="status"
                className="text-center text-sm text-green-600 font-medium mb-3"
              >
                Se abrirá tu cliente de correo con la solicitud preparada para
                info@tikneo.com. Si no se abre, escríbenos directamente.
              </p>
            )}
            <button
              type="submit"
              className="w-full py-3.5 rounded-xl font-bold text-white bg-primary hover:opacity-90 transition-all shadow-md"
            >
              Enviar
            </button>
            <p className="text-center text-gray-500 text-sm mt-3">
              Sin compromiso | Te respondemos rápido
            </p>
          </div>
        </form>
      </div>
    </div>,
    document.body
  );
}
