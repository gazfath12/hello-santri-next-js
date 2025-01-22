
// next.config.js
module.exports = {
    async rewrites() {
        // Hanya terapkan rewrites di development
        return [
            {
                source: '/',
                destination: '/index.html',
            },
            {
                source: '/:path*',
                destination: '/:path*',
            },
        ];
    },
 };
 