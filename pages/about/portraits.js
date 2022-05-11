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
    <>
      <div className="relative mx-auto px-4 py-12 sm:static sm:px-6 lg:px-8">
        {players.map((player) => {
          return (
            <div
              key={player.name}
              className="float-left mx-auto h-96 w-72 max-w-none"
            >
              <PlayerCard player={player} />
            </div>
          )
        })}
      </div>
    </>
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
