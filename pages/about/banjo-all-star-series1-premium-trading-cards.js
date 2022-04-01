import client from '../../client'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Layout from '../../components/Layout'
import PlayerCard from '../../components/PlayerCard'

export default function TradingCards({ players }) {
  const metaData = {
    title: 'Bluegrass Trading Co Banjo All-Star Artists',
    description: `Introducing the world's first premium trading cards for the bluegrass enthusiast. With a total of 42 featured banjo greats, completed by 10 equally great artists, each pack of Banjo All-Star Premium Trading Cards includes 8 players, including a foil accented limited edition card. Yes, every pack comes with a limited edition card! Collect them all!
    Series 1 is shipping in April!`,
  }

  return (
    <Layout metaData={metaData}>
      <div className="bg-gray-100">
        <div className="relative mx-auto max-w-7xl px-4 py-12 sm:static sm:px-6 md:flex lg:px-8">
          <div className="mb-6">
            <h1 className="font-display text-3xl font-semibold uppercase tracking-tight text-gray-900 sm:text-5xl">
              <span className="text-gray-700">
                Banjo All-Star<span className="align-top text-lg">TM</span>
              </span>
              <br />
              <span className="bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-yellow-400 text-transparent">
                {' '}
                Premium Trading Cards
              </span>
            </h1>
            <div className="mt-4 text-xl text-gray-500">
              <span>
                Introducing the world&apos;s first premium trading cards for the
                bluegrass enthusiast. With a total of 42 featured banjo greats,
                completed by 10 equally great artists, each pack of Banjo
                All-Star Premium Trading Cards includes 8 players, including a
                foil accented limited edition card. Yes, every pack comes with a
                limited edition card! Collect them all!
              </span>{' '}
              <div className="font-bold">Now Shipping!</div>
            </div>
            <a
              href="https://shop.bluegrasstradingco.com/products/bluegrass-trading-co-banjo-all-star-series-one-pack"
              className="mt-4 inline-block rounded-md border border-r border-b border-transparent border-r-yellow-400 border-b-yellow-400 border-t-yellow-100 border-l-yellow-100 bg-yellow-300 py-3 px-8 text-center font-display font-medium text-gray-600  hover:bg-yellow-400"
            >
              ORDER NOW
            </a>
          </div>
          <div className="w-96 md:pl-4">
            <img
              src="https://cdn.shopify.com/s/files/1/0601/1800/7990/products/image_188bf4c2-4a17-4726-930f-d6859b15fd72_1296x.heic?v=1648774708"
              alt="Banjo All-Stars"
              className="h-96 w-96 max-w-none rounded-lg object-cover shadow-2xl"
            />
          </div>
        </div>
      </div>
      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:static sm:px-6 lg:px-8">
        <h3 className="mb-4 font-display text-2xl font-medium uppercase tracking-tight">
          Completed Portraits
        </h3>
        <div className="grid grid-cols-1 gap-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {players.map((player) => {
            return (
              <div
                key={player.name}
                className="mx-auto h-96 w-72 md:h-72 md:w-full"
              >
                <PlayerCard player={player} />
              </div>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const players = await client.fetch(
    `
    *[_type == "player"]|order(series_number){_id, name, imageUrl, slug, limited, 'bio': bio[0].children[0].text, series_number, artist->{name, slug, imageUrl}}
    `
  )

  return {
    props: {
      players,
    },
  }
}
