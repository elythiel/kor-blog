const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    plugins: [
        require('@tailwindcss/typography')
    ],
    theme: {
        extend: {
            fontFamily: {
                medieval: ['MedievalSharp', ...defaultTheme.fontFamily.serif],
                serif: ['EB Garamond', ...defaultTheme.fontFamily.serif],
                sans: ['Montserrat', ...defaultTheme.fontFamily.sans]
            }
        }
    }
};
