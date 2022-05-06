module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                orange: "#FFC838",
                blue: "#83aaf9",
            },
        },
        fontFamily: {
            sans: ["PollyRounded", "sans-serif"],
            mono: ["Roboto Mono", "monospace"],
        },
    },
    plugins: [],
};
