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
        primary: '#FFFF00', // amarelo
        secondary: '#808080', // cinza
        accent: '#FF6347', // laranja avermelhado
      },
    },
  },
  plugins: [nextui()],
}
export default config
