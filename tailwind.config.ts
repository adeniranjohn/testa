import type { Config } from 'tailwindcss'

const config: Config = {
  corePlugins: {
    preflight: false,
  },
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {

    colors: {

      'primary': '#040D12',
      'secondary': '#183D3D',
      'accent': '#5C8374',
      'light': '#93B1A6'



    }
  },
  plugins: [],
}
export default config
