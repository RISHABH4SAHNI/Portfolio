/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        typewriter: {
          '0%': { width: '0%' },
          '100%': { width: '100%' }
        },
        blinkTextCursor: {
          '0%': { 'border-right-color': 'rgba(255, 255, 255, 0.75)' },
          '100%': { 'border-right-color': 'transparent' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        }
      },
      animation: {
        'typewriter': 'typewriter 4s steps(40) 1s 1 normal both',
        'blinkTextCursor': 'blinkTextCursor 500ms steps(40) infinite normal',
        'float': 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

