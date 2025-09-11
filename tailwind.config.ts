import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        base: {
          bg: '#0a0a0a',
          fg: '#e5e7eb',
          muted: '#9ca3af',
          card: '#0f0f10',
          border: '#1f2937'
        },
        accent: {
          DEFAULT: '#e5e7eb',
          soft: '#9ca3af'
        }
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          '2xl': '1280px'
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        display: ['var(--font-space-grotesk)']
      },
      boxShadow: {
        subtle: '0 1px 0 0 rgba(255,255,255,0.06) inset',
      },
      backgroundImage: {
        'noise': "url('data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' viewBox=\\'0 0 300 300\\'%3E%3Cfilter id=\\'n\\'%3E%3CfeTurbulence baseFrequency=\\'0.7\\' numOctaves=\\'2\\' stitchTiles=\\'stitch\\'/%3E%3CfeColorMatrix type=\\'saturate\\' values=\\'0\\'/%3E%3C/filter%3E%3Crect width=\\'100%25\\' height=\\'100%25\\' filter=\\'url(%23n)\\' opacity=\\'0.025\\'/%3E%3C/svg%3E')",
        'radial': 'radial-gradient(1200px 600px at 50% -50%, rgba(255,255,255,0.08), transparent)'
      }
    }
  },
  plugins: [],
}

export default config
