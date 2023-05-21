/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    env: {
        REACT_APP_SERVERLESS: "true",
        REACT_APP_CHOICES_URL: "https://raw.githubusercontent.com/soda3x/food-decision-making-machine/main/choices.txt",
        REACT_APP_CHOICES_WOOLIES_URL: "https://raw.githubusercontent.com/soda3x/food-decision-making-machine/main/choices-woolies.txt"
    }
}

module.exports = nextConfig
