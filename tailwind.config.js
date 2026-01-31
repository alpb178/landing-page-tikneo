/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/containers/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "tikneo-gradient":
          "linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%), radial-gradient(at top right, #e0d7ff 0%, transparent 40%), radial-gradient(at bottom left, #e9e3ff 0%, transparent 40%)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        textHeader: "#473082",
      },
    },
  },
  plugins: [],
};
