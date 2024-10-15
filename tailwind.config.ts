import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        purpleActive: "#A9A9D3",
        lightText: "#A5A5BB",
        lightBlue: "#F2F7FC",
        lightGray: "#e6e6e6",
        darkBlue: "#2A2A34",
        moneyGreen: "#6BA034"
      }
    }
  },
  plugins: [
    function ({ addUtilities }: any) {
      const newUtilities = {
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none"
        },
        "no-scrollbar": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none"
        }
      }
      addUtilities(newUtilities)
    }
  ]
}
export default config
