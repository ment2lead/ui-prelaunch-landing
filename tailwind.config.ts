import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      },
      fontSize: {
        h1: ['3.5rem', { lineHeight: '1.1', fontWeight: '700' }],
        h2: ['2.25rem', { lineHeight: '1.2', fontWeight: '700' }],
        h3: ['1.5rem', { lineHeight: '1.3', fontWeight: '600' }],
        body: ['1rem', { lineHeight: '1.6', fontWeight: '400' }],
        caption: ['0.8125rem', { lineHeight: '1.4', fontWeight: '400' }],
      },
      colors: {
        brand: {
          purple: '#5b237a',
          cyan: '#1acedf',
          slate: '#697aae',
          teal: '#126972',
          'light-cyan': '#a4e9f0',
        },
        night: {
          900: '#0a1622',
          850: '#0b1a2a',
        },
      },
    },
  },
} satisfies Config;
