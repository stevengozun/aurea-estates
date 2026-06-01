/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Archivanta-style editorial palette
        ink: '#1e1e1e', // text primary
        muted: '#535353', // text secondary
        link: '#0000ee', // link / accent (tertiary)
        white: '#ffffff', // surface muted
        black: '#000000', // surface base
        raised: '#f1f1f2', // surface raised
        line: '#e4e4e6', // hairline borders
      },
      fontFamily: {
        sans: ['"Instrument Sans"', 'system-ui', 'sans-serif'],
      },
      fontWeight: {
        400: '400',
        500: '500',
        600: '600',
        700: '700',
      },
      fontSize: {
        // token scale
        xs: ['14px', '20px'],
        sm: ['16px', '24px'],
        md: ['18px', '28px'],
        lg: ['19px', '28px'],
        xl: ['20px', '30px'],
        '2xl': ['24px', '32px'],
        '3xl': ['28px', '36px'],
        '4xl': ['32px', '40px'],
      },
      spacing: {
        s1: '9.92px',
        s2: '12px',
        s3: '16px',
        s4: '32px',
        s5: '50px',
        s6: '60px',
        s7: '136px',
      },
      borderRadius: {
        xs: '4px',
        sm: '8px',
        md: '16px',
        pill: '100px',
      },
      maxWidth: {
        site: '1280px',
      },
      transitionTimingFunction: {
        'expo-out': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}
