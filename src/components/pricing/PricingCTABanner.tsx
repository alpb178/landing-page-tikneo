import Image from "next/image";
import Link from "next/link";

export default function PricingCTABanner() {
  return (
    <section className="bg-navy overflow-hidden">
      <div className="max-w-[1440px] mx-auto relative h-[430px]">
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
              href="/contacto"
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
    <div
      className={`absolute top-[60px] w-[316px] h-[657px] ${className ?? ""}`}
    >
      {/* Screen content */}
      <div className="absolute left-[11px] top-[8px] w-[296px] h-[639px] rounded-[24px] overflow-hidden">
        <Image
          src={screenshot}
          alt={alt}
          fill
          className="object-cover"
        />
      </div>
      {/* Phone frame overlay */}
      <Image
        src="/images/pricing/phone-frame.svg"
        alt=""
        width={316}
        height={654}
        className="absolute inset-0 w-full h-full pointer-events-none [--fill-0:var(--color-navy)]"
        aria-hidden="true"
      />
    </div>
  );
}
