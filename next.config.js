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

sources.push({
  source: '/ARTPRINTS',
  destination: `https://shop.bluegrasstradingco.com/discount/ARTPRINTS?redirect=%2Fproducts%2Fbanjo-all-star-series-1-fine-art-print-8x10-matted-to-11x14`,
  permanent: true,
})

sources.push({
  source: '/about/players/ned-lubercki',
  destination: `/about/players/ned-luberecki`,
  permanent: true,
})

sources.push({
  source: '/KNEEDEEP',
  destination: `/api/redirects/KNEEDEEP`,
  permanent: false,
})

module.exports = {
  reactStrictMode: true,
  async redirects() {
    return sources
  },
}
