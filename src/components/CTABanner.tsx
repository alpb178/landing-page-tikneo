import Image from "next/image";
import Link from "next/link";

/**
 * Banner CTA navy con los mockups de móvil.
 * Diseño: Figma "WEB BANNER 45" (nodo 10315-41907).
 */
export default function CTABanner() {
  return (
    <section className="bg-navy overflow-hidden">
      <div className="max-w-[1440px] mx-auto relative h-[300px] md:h-[430px]">
        {/* Halo azul detrás de los mockups - visible on lg+ */}
        <div
          aria-hidden="true"
          className="hidden lg:block absolute left-[133px] top-[-132px] size-[693px] rounded-full bg-blue-accent blur-[185.5px]"
        />

        {/* Phone mockups - visible on lg+ */}
        <div className="hidden lg:block">
          <PhoneMockup
            screenshot="/images/pricing/phone-dashboard.png"
            alt="TikNEO Dashboard"
            className="left-[164px]"
          />
          <PhoneMockup
            screenshot="/images/pricing/phone-chrono.png"
            alt="TikNEO Chrono"
            className="left-[510px]"
          />
        </div>

        {/* CTA content */}
        <div className="absolute inset-0 flex items-center justify-center lg:justify-end px-8 lg:pr-[168px]">
          <div className="flex flex-col gap-4 max-w-[339px] text-center lg:text-left">
            <p className="text-2xl text-white font-normal tracking-[-0.408px]">
              Simplifica la gestión de tu empresa y enfócate en crecer.
            </p>
            <Link
              href="/demo"
              className="block w-full text-center bg-white text-navy rounded-[32px] h-12 leading-[48px] font-semibold hover:opacity-90 transition-opacity"
            >
              Solicitar demo
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function PhoneMockup({
  screenshot,
  alt,
  className,
}: {
  screenshot: string;
  alt: string;
  className?: string;
}) {
  return (
    <Image
      src={screenshot}
      alt={alt}
      width={632}
      height={1314}
      className={`absolute top-[60px] w-[316px] h-[657px] ${className ?? ""}`}
    />
  );
}
