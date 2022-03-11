const data = require('./data')

const sources = data.map((player) => {
  return {
    source: `/r/${player.code}`,
    destination: `/about/players/${player.slug}`,
    permanent: false,
  }
})

module.exports = {
  reactStrictMode: true,
  async redirects() {
    return sources
  },
}
