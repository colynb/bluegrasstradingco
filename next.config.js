module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/r/SPBGMA25',
        destination: 'https://shop.bluegrasstradingco.com/discount/SPBGMA25',
        permanent: true,
      },
      {
        source: '/r/:player',
        destination: '/',
        permanent: false,
      },
    ]
  },
}
