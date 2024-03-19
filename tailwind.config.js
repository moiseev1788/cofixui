/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        screens: {
          'sm': '100%',
          'md': '100%',
          'lg': '100%',
          'xl': '1260px',
        },
        center: true,
        padding: '1rem',
      },
      fontFamily: {
        stratos: 'var(--font-family)'
      },
      fontSize: {
        // 13px
        sm: ['0.813rem', {
          lineHeight: '120%',
          fontWeight: 'normal',
        }],
        // 16px
        base: ['1rem', {
          lineHeight: '120%',
          fontWeight: 'normal'
        }], 
        // 20px
        xl: ['1.25rem', {
          lineHeight: '120%',
          fontWeight: 'normal'
        }],
        // 25px
        xxl: ['1.563rem', {
          lineHeight: '120%',
          fontWeight: 'normal'
        }],
        // 31px
        '1xl': ['1.938rem', {
          lineHeight: '120%',
          fontWeight: 'normal'
        }],
        // 39px
        '2xl': ['2.438rem', {
          lineHeight: '120%',
          fontWeight: 'normal',
        }],
        // 49px
        '3xl': ['3.063rem', {
          lineHeight: '120%',
          fontWeight: 'normal'
        }],
        // 61px
        '4xl': ['3.813rem', {
          lineHeight: '120%',
          fontWeight: 'normal'
        }],
        // 76px
        '5xl': ['4.75rem', {
          lineHeight: '120%',
          fontWeight: 'normal'
        }],
        // 95px
        '6xl': ['5.938rem', {
          lineHeight: '120%',
          fontWeight: 'normal'
        }],
      },
      colors: {
        primary: {
          50: '#f05633',
          100: '#facbc0',
          200: '#f8b1a1',
          300: '#f58e76',
          400: '#f3785c',
          500: 'var(--primary-red-500)',
          600: '#da4e2e',
          700: '#aa3d24',
          800: '#842f1c',
          900: '#652415',
        },
        secondary: {
          50: '#e8e8e8',
          100: '#b8b8b8',
          200: '#969696',
          300: '#666666',
          400: '#494949',
          500: '#1b1b1b',
          600: '#191919',
          700: '#131313',
          800: '#0f0f0f',
          900: '#0b0b0b',
        },
        success: {
          50: '#f4f9ee',
          100: '#dcebcb',
          200: '#cbe2b1',
          300: '#b4d58e',
          400: '#a5cd78',
          500: '#8fc056',
          600: '#82af4e',
          700: '#66883d',
          800: '#4f6a2f',
          900: '#3c5124',
        },
        warning: {
          50: '#fff0e6',
          100: '#ffd1b0',
          200: '#ffbb8a',
          300: '#ff9c54',
          400: '#ff8933',
          500: '#ff6b00',
          600: '#e86100',
          700: '#b54c00',
          800: '#8c3b00',
          900: '#6b2d00',
        },
        danger: {
          50: '#fcebeb',
          100: '#f7bfbf',
          200: '#f3a1a1',
          300: '#ed7676',
          400: '#e95b5b',
          500: '#e43232',
          600: '#cf2e2e',
          700: '#a22424',
          800: '#7d1c1c',
          900: '#601515',
        },
        neutral: {
          50: '#fdfdfd',
          100: '#fafafa',
          200: '#f7f7f7',
          300: '#f4f4f4',
          400: '#f1f1f1',
          500: '#eeeeee',
          600: '#d9d9d9',
          700: '#a9a9a9',
          800: '#838383',
          900: '#646464',
        },
      },
      backgroundImage: {
        //bg-images
        'line': "url('/src/assets/img/icon/lineCTA.svg')",
        //bg-gradient
        'accent-500': "linear-gradient(90deg, rgba(240, 86, 51, 1) 2.81%, rgba(255, 133, 46, 1) 100%)",
        'accent-600': "linear-gradient(90deg, rgba(218, 78, 46, 1) 2.81%, rgba(232, 121, 42, 1) 100%)",
      }
    },
    plugins: [],
  }
}
