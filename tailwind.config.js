/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

    theme: {
        extend: {
            fontFamily: {
                zenDots: ["zenDots", "sans-serif"],
            },
            gridTemplateRows: {
                // Simple 16 row grid
                13: "repeat(13, minmax(0, 1fr))",
            },
        },
    },
    plugins: [],
};
