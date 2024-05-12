import colors from 'tailwindcss/colors'
/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      colors: {
        primary: colors.blue['400'],
        'primary-hover': colors.blue['500'],
        'primary-foreground': colors.white,
        secondary: colors.gray['400'],
        'secondary-hover': colors.gray['500'],
        'secondary-foreground': colors.white,
        destructive: colors.red['400'],
        'destructive-hover': colors.red['500'],
        'destructive-foreground': colors.white,
        
      }

    },
  },
  plugins: [],
}

