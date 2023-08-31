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
        'light-gray': 'var(--light-gray)'
      }
    },
  },
  plugins: [],
}
export default config
