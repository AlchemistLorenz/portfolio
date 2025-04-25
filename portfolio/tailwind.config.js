/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/app/**/*.{js,ts,jsx,tsx}",
      "./src/components/**/*.{js,ts,jsx,tsx}"
    ],
    safelist: [ {
      pattern: /text-purple-haze/,      // match both text-purple-haze
      variants: ['hover', 'focus'],
    }
  ],
    theme: { extend: {
      colors: {
        'dark-extra': '#191716',
        'purple-haze': '#985F99',
        'off-white':   '#E0E2DB',
        'persian-red':   '#BB4430',
        'flame':       '#EB5E28',
      }
    } 
  },
    plugins: [],
  };
  