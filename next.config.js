var sources = []

sources.push({
  source: `/r/:path*`,
  destination: `/api/redirects/:path*`,
  permanent: false,
})

sources.push({
  source: '/signup',
  destination: `/giveaway`,
  permanent: true,
})

module.exports = {
  reactStrictMode: true,
  async redirects() {
    return sources
  },
}
