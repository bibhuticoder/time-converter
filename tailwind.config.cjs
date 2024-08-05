/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },

      colors: {
        primary_1: "#079EDB",
        primary_2: "#00FAB6",

        primary: {
          DEFAULT: '#053044',
          100: '#e7f6fd',
          200: '#b8e5fa',
          300: '#88d3f6',
          400: '#59c2f3',
          500: '#29b0ef',
          600: '#1097d6',
          700: '#0c75a6',
          800: '#095477',
          900: '#053044',
        },

        warning: {
          50: '#FFF9F1',
          100: '#FFF3D0',
          200: '#FFE9A6',
          300: '#FFDF80',
          400: '#FFD65D',
          600: '#FFC61D',
          700: '#FFBF01',
          800: '#E6AC00',
          900: '#503C00',
        },

        success: {
          50: '#E6FAF0',
          100: '#CCF5E1',
          200: '#66C68D',
          300: '#3DAE6C',
          400: '#0FAF51',
          600: '#0D8E42',
          700: '#0C803B',
          800: '#0B7335',
          900: '#074433',
        },

        error: {
          DEFAULT: '#C63617',
          50: '#FDE7E0',
          100: '#F9E1DC',
          200: '#F4A998',
          300: '#F39C8A',
          400: '#F06648',
          600: '#B23115',
          700: '#A02C13',
          800: '#902811',
          900: '#391108'
        },

        'neutral-gray': {
          DEFAULT: '#6A6A6A',
          50: '#FAFAFA',
          100: '#EAEAEA',
          200: '#DADADA',
          300: '#9A9A9A',
          400: '#7A7A7A',
          600: '#5A5A5A',
          700: '#4A4A4A',
          800: '#2A2A2A',
          900: '#0A0A0A',
        },

        gray: {
          DEFAULT: '#7B8698',
          50: '#FFFFFF',
          100: '#F4F7FB',
          200: '#E6EAF0',
          300: '#D0D7E2',
          600: '#596579',
          700: '#374253',
          800: '#192638',
          900: '#0F1825',
        },

        black: {
          DEFAULT: "#1F1D1D"
        },
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '10rem',
        }, margin: {
          sm: '2rem',
        }
      },

      fontFamily: {
        'fonarto': ['fonarto', 'sans-serif'],
      },


      keyframes: {
        slidein: {
          'from': {
            'background-position': '0% 0%' // Starts from the top-left corner
          },
          'to': {
            'background-position': '100% 0%' // Ends at the top-right corner
          }
        }
      },
      animation: {
        'slide-bg': 'slidein 10s infinite linear'
      }
    },
  },
  plugins: [],
  safelist: [{ pattern: /\b(?:bg|text|border)-(success|warning|error|primary)-\d{1,3}\b/ }]
}
