import type { SVGProps } from "react";

const iconClass = "h-7 w-7";

export function IconShieldCheck(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={iconClass}
      {...props}
    >
      <path d="M16 4 L26 8 L26 14 C26 21 21 26 16 28 C11 26 6 21 6 14 L6 8 Z" />
      <path d="M10 16 L14 20 L22 12" />
    </svg>
  );
}

export function IconClockHistory(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={iconClass}
      {...props}
    >
      <circle cx="16" cy="13" r="7" />
      <path d="M16 13 L12 10" />
      <path d="M16 13 L16 8" />
      <path d="M9 6 A5 5 0 0 1 14 4" />
      <path d="M14 4 L12 6" />
      <path d="M14 22 L16 26 L18 22" />
      <path d="M16 26 L16 28" />
    </svg>
  );
}

export function IconBarChartReport(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={iconClass}
      {...props}
    >
      <path d="M8 20 L8 26" />
      <path d="M14 16 L14 26" />
      <path d="M20 10 L20 26" />
      <path d="M20 10 L24 10" />
      <circle cx="28" cy="10" r="4" />
      <circle cx="28" cy="10" r="0.8" fill="currentColor" />
    </svg>
  );
}
