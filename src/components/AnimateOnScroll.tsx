"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type Variant = "fadeUp" | "fadeIn" | "slideUp" | "scaleIn";

type Props = {
  children: ReactNode;
  variant?: Variant;
  delay?: number;
  className?: string;
  /** Si es true, la animación solo se ejecuta una vez al entrar en vista */
  once?: boolean;
};

export default function AnimateOnScroll({
  children,
  variant = "fadeUp",
  delay = 0,
  className = "",
  once = true,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setVisible(true);
          else if (!once) setVisible(false);
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once]);

  const variantClasses = {
    fadeUp: visible ? "animate-fade-up-on-scroll" : "opacity-0 translate-y-8",
    fadeIn: visible ? "animate-fade-in-on-scroll" : "opacity-0",
    slideUp: visible ? "animate-slide-up-on-scroll" : "opacity-0 translate-y-6",
    scaleIn: visible ? "animate-scale-in-on-scroll" : "opacity-0 scale-95",
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${variantClasses[variant]} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
