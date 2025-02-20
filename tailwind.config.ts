import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)"
      },
      animation: {
        'spin-slow': 'spin 30s linear infinite',
        float: 'float 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': {
            transform: 'translateY(0)', // Start and end at the same position
          },
          '50%': {
            transform: 'translateY(-20px)', // Move 10px up at the middle point
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
