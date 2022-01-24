module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/r/:player',
        destination: '/',
        permanent: false,
      },
    ]
  },
}
