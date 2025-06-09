module.exports = {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      keyframes: {
        slideInOut: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '5%': { transform: 'translateX(0)', opacity: '1' },
          '95%': { transform: 'translateX(0)', opacity: '1' },
          '100%': { transform: 'translateX(-100%)', opacity: '0' },
        }
      },
      animation: {
        slideLoop: 'slideInOut 20s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
