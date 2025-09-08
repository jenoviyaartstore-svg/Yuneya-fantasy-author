/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Важно: включаем экспорт в статический HTML
  output: 'export',
};

module.exports = nextConfig;
