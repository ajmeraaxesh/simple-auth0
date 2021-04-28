//Refer all available tailwind color palettes over here
// https://tailwindcss.com/docs/customizing-colors#color-palette-reference

const colors = require('tailwindcss/colors')

module.exports = {
    future: {},
    purge: [
        './src/components/**/*.{js,ts,jsx,tsx}',
        './src/pages/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        colors: {
            ...colors,
        },
        // fontFamily: {
        //     inter: ['Inter'],
        // },
    },
    variants: {},
    plugins: [],
}
