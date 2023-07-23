module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      scale: {
        '-100': '-1',
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite',
      },
      backgroundImage: {
        'cover-pic': "url('/adaminterback.png')",
        syth1: "url('/myPics/marceloSythLord2-removebg-preview.png')",
        'duo-gradient':
          'linear-gradient(89.86deg, #9572FC 23.08%, #43E7AD 33.94%, #E1D55D 44.57%)',
        'game-gradient':
          'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.08%)',
      },
      transitionTimingFunction: {
        'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
      },
      aspectRatio: {
        '1/3': '1 / 3',
      },
    },
  },
  plugins: [],
}
