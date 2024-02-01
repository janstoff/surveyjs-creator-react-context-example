/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#0D1F3D',
                    header: '#101828',
                    body: '#475467'
                },
                secondary: {
                    DEFAULT: '#2BBD8F',
                    light: '#7edac8'
                }
            },
            zIndex: {
                2000: '2000'
            }
        }
    },
    plugins: []
};
