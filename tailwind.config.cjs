/** @type {import('tailwindcss').Config} */
module.exports = {
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
        'purple': {
          DEFAULT: '#4A1980',
          50: '#f5e6ff',
        },
        'copper': {
          DEFAULT: '#806800',
          50: '#fff5e6',
        },
        'maroon': {
          DEFAULT: '#800000',
          50: '#ffe6e6',
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
        'cta': {
          DEFAULT: '#FFFFFF',
          dark: '#F5F5F5',
          contrast: '#1A1A1A'
        },
        'new-blue': '#0066CC',
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
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '80ch',
            color: '#333333',
            a: {
              color: '#0066CC',
              '&:hover': {
                color: '#004C99',
              },
            },
            h1: {
              fontSize: '2.25rem',
              marginTop: '1.5rem',
              marginBottom: '1rem',
              textAlign: 'center',
              color: '#000000',
            },
            h2: {
              fontSize: '1.875rem',
              marginTop: '1.25rem',
              marginBottom: '0.75rem',
              color: '#600000',
            },
            h3: {
              fontSize: '1.5rem',
              marginTop: '1rem',
              marginBottom: '0.5rem',
              color: '#000000',
            },
            p: {
              marginTop: '1rem',
              marginBottom: '1rem',
              lineHeight: '1.75',
            },
            blockquote: {
              borderLeftColor: '#BCE3C5',
              fontStyle: 'italic',
              color: '#333333',
              backgroundColor: '#f0faf2',
              padding: '1rem',
              borderRadius: '0.375rem',
            },
            '.blog-meta': {
              textAlign: 'left',
              marginTop: '0.5rem',
              marginBottom: '2rem',
              color: '#666666',
              fontSize: '0.875rem',
            },
            '.image-attribution': {
              textAlign: 'center',
              fontSize: '0.75rem',
              color: '#666666',
              marginTop: '0.5rem',
              marginBottom: '1.5rem',
            }
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
