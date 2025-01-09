/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'navy': {
          DEFAULT: '#000080',
          50: '#e6e6ff',
        },
        'maroon': {
          DEFAULT: '#800000',
          50: '#ffe6e6',
        },
        'copper': {
          DEFAULT: '#B87333',
          dark: '#8B4513',  // Dark copper for hover states
        },
        'teal': '#0097A7',
        'beige': '#F5F5DC',
        'gold': '#FFD700',
        'sage': '#BCE3C5',
        'text': {
          primary: '#000000',
          secondary: '#333333',
          light: '#999999',
        },
        // Adding the new blue color
        'new-blue': '#0066CC',  // This is the new blue color to replace navy where needed
      },
      fontFamily: {
        'sans': ['Open Sans', 'sans-serif'],
        'serif': ['Merriweather', 'serif'],
      },
      fontSize: {
        'h1': '48px',
        'h2': '36px',
        'h3': '28px',
        'body': '16px',
        'small': '14px',
      },
      maxWidth: {
        'container': '1400px',
      },
      spacing: {
        'section': '80px',
      },
      gridTemplateColumns: {
        'auto-fit': 'repeat(auto-fit, minmax(250px, 1fr))',
      },
    },
  },
  plugins: [
    import('@tailwindcss/typography'),
  ],
}
