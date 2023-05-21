/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    env: {
        REACT_APP_FDMM_ROUTE: "http://heapsgoodservers.com:1338/choose"
    }
}

module.exports = nextConfig
