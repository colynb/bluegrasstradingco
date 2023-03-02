var sources = [];

sources.push({
  source: `/r/:path*`,
  destination: `/api/redirects/:path*`,
  permanent: false,
});

sources.push({
  source: `/about/artists/grace-van-t-hof`,
  destination: `https://banjoallstars.com/about/artists/grace-vant-hof`,
  permanent: true,
});

sources.push({
  source: `/about/artists/:path*`,
  destination: `https://banjoallstars.com/about/artists/:path*`,
  permanent: true,
});

sources.push({
  source: `/about/players/:path*`,
  destination: `https://banjoallstars.com/about/series1/:path*`,
  permanent: true,
});

sources.push({
  source: "/signup",
  destination: `/giveaway`,
  permanent: true,
});

sources.push({
  source: "/ARTPRINTS",
  destination: `https://shop.bluegrasstradingco.com/discount/ARTPRINTS?redirect=%2Fproducts%2Fbanjo-all-star-series-1-fine-art-print-8x10-matted-to-11x14`,
  permanent: true,
});

sources.push({
  source: "/about/players/ned-lubercki",
  destination: `/about/players/ned-luberecki`,
  permanent: true,
});

sources.push({
  source: "/about/players/gina-furtado",
  destination: `https://banjoallstars.com/about/series1/gina-furtado`,
  permanent: true,
});

sources.push({
  source: "/KNEEDEEP",
  destination: `/api/redirects/KNEEDEEP`,
  permanent: false,
});

sources.push({
  source: "/PICKYFINGERS",
  destination: `/api/redirects/PICKYFINGERS`,
  permanent: false,
});

sources.push({
  source: "/JIM",
  destination: `/api/redirects/JIM`,
  permanent: false,
});

module.exports = {
  reactStrictMode: true,
  async redirects() {
    return sources;
  },
};
