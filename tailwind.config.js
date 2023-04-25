/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './src/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        fontFamily: {
            primary: ['Raleway', 'sans-serif'],
            secondary: ['Open Sans', 'sans-serif'],
        },
        container: {
            padding: {
                DEFAULT: '15px',
            },
        },
        screens: {
            sm: '640px',
            md: '768px',
            lg: '960px',
            xl: '1200px',
        },
        extend: {
            colors: {
                bg: 'hsl(240, 75%, 98%)',
                primary_dark: 'hsl(243, 87%, 12%)',
                primary_desatured: 'hsl(238, 22%, 44%)',
                accent_blue: 'hsl(224, 93%, 58%)',
                accent_cyan: 'hsl(170, 45%, 43%)',
                light_gray: 'hsl(0, 0%, 75%)',
                hover: 'hsl(210, 93%, 58%)',
            },
            backgroundImage: {
                logo: './public/images/logo.svg',
                bg_curve: "url('./public/images/bg-curve-desktop.svg')",
            },
        },
    },
    plugins: [],
};
