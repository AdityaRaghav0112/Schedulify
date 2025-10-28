/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Theme colors backed by CSS variables for light/dark switching
        background: 'var(--color-background)',
        surface: 'var(--color-surface)',
        'primary-accent': 'var(--color-primary-accent)',
        'secondary-accent': 'var(--color-secondary-accent)',
        'text-primary': 'var(--color-text-primary)',
        'text-secondary': 'var(--color-text-secondary)',
        success: 'var(--color-success)',
        error: 'var(--color-error)',
        waiting: 'var(--color-waiting)',
        border: 'var(--color-border)',
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'neon-cyan': '0 0 10px rgba(0, 173, 181, 0.5), 0 0 20px rgba(0, 173, 181, 0.3)',
        'neon-amber': '0 0 10px rgba(255, 180, 0, 0.5), 0 0 20px rgba(255, 180, 0, 0.3)',
        'neon-indigo': '0 0 10px rgba(99, 102, 241, 0.5), 0 0 20px rgba(99, 102, 241, 0.3)',
        'neon-green': '0 0 10px rgba(74, 222, 128, 0.5), 0 0 20px rgba(74, 222, 128, 0.3)',
        'card': '0 4px 16px rgba(0,0,0,0.08)',
      },
      animation: {
        'pulse-neon': 'pulse-neon 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow-cyan': 'glow-cyan 2s ease-in-out infinite',
        'fade-in-up': 'fade-in-up 400ms ease-out both',
        'fade-in': 'fade-in 300ms ease-out both',
      },
      keyframes: {
        'pulse-neon': {
          '0%, 100%': { opacity: 1, boxShadow: '0 0 10px rgba(0, 173, 181, 0.5)' },
          '50%': { opacity: 0.8, boxShadow: '0 0 20px rgba(0, 173, 181, 0.8)' },
        },
        'glow-cyan': {
          '0%, 100%': { boxShadow: '0 0 5px rgba(0, 173, 181, 0.5)' },
          '50%': { boxShadow: '0 0 15px rgba(0, 173, 181, 0.8)' },
        },
        'fade-in-up': {
          '0%': { opacity: 0, transform: 'translateY(6px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
}

