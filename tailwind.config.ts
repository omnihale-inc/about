import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'text-color': 'var(--text-color)',
        'primary-color': 'var(--primary-color)',
        'white-color': 'var(--white-color)',
        'read-more': 'var(--read-more)',
        'light-gray': 'var(--light-gray)',
        'green-color': 'var(--green-color)'
      },
      backgroundImage: {
        "company-hero-desk": "url('/images/company/company-hero.jpg')",
        "company-hero-mob": "url('/images/company/company-hero-mob.jpg')"
      }
    },
  },
  variants:{
    display: ["group-hover"]
  },
  plugins: [],
}
export default config
