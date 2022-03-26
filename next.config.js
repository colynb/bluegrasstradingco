var sources = []

sources.push({
  source: `/r/:path*`,
  destination: `/api/redirects/:path*`,
  permanent: false,
})

module.exports = {
  reactStrictMode: true,
  async redirects() {
    return sources
  },
}
