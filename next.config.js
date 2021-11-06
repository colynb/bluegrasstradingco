module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/r/EARLSCRUGGS',
        destination: '/',
        permanent: false,
      },
    ]
  },
}
