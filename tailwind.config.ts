import { nextui } from '@nextui-org/react'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: 'var(--display-font)',
        body: 'var(--body-font)',
      },
      colors: {
        primary: '#FFD700', // amarelo dourado
        secondary: '#006400', // verde escuro
        accent: '#8B0000', // vermelho escuro
        primaryDark: '#FFFF00', // amarelo
        secondaryDark: '#808080', // cinza
        accentDark: '#FF6347', // laranja avermelhado
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
}
export default config
