import type { Config } from 'tailwindcss';

export default {
  content: [
    './components/**/*.{vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue'
  ],
  theme: {
    extend: {
      colors: {
        // Tokens aligned to demo_studio_small_apps_ui.txt
        primary: '#1B263B',
        secondary: '#415A77',
        accent: '#778DA9',
        success: '#1B7F75',
        warning: '#D67E3B',
        danger: '#C62D42',
        info: '#2856A3',
        background: '#f8f9fa',
        surface: '#ffffff',
        on: {
          surface: '#1B263B',
          'surface-2': '#415A77'
        },
        border: '#e0e0e0',
        divider: '#f0f0f0'
      },
      boxShadow: {
        card: '0 4px 18px rgba(27,38,59,0.08)',
        elevated: '0 10px 32px rgba(27,38,59,0.15)'
      },
      fontFamily: {
        sans: ['Inter', 'Roboto', 'system-ui', 'Arial', 'sans-serif']
      },
      borderRadius: {
        xl: '12px'
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        floaty: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' }
        }
      },
      animation: {
        fadeInUp: 'fadeInUp 0.3s cubic-bezier(0.4,0,0.2,1)',
        floaty: 'floaty 8s ease-in-out infinite'
      }
    }
  },
  plugins: []
} satisfies Config;