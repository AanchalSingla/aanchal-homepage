import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    './app/**/*.{ts,tsx,js,jsx}',
    './pages/**/*.{ts,tsx,js,jsx}',
    './components/**/*.{ts,tsx,js,jsx}',
    './src/**/*.{ts,tsx,js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FDF6EC',
        blush: '#F4C2C2',
        sage: '#B5C9B7',
        lavender: '#D6C9E8',
        peach: '#F9D5A7',
        dustyrose: '#E8A0A0',
        softgreen: '#C8DFC4',
        warmwhite: '#FAF8F5',
        brown: '#7A5C4F',
        charcoal: '#3D3535',
      },
    },
  },
  plugins: [],
};

export default config;
