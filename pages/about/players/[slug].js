import Link from 'next/link'
import Footer from '../../../components/Footer'
import Header from '../../../components/Header'
import PlayerCard from '../../../components/PlayerCard'

export default function PlayerDetail({ player, prevPlayer, nextPlayer }) {
  if (!player) {
    return null
  }

  return (
    <>
      <Header
        title={`Banjo All-Star Series 1 Player, ${player.name}`}
        description={player.bio}
      />
      <div className="bg-gray-100">
        <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
          <div className="flex justify-between mb-6">
            <div>
              <Link href={`/about/players/${prevPlayer.slug}`}>
                <a
                  title={prevPlayer.name}
                  className="font-display bg-white shadow-md rounded px-4 py-1"
                >
                  {prevPlayer.name} (#{prevPlayer.number})
                </a>
              </Link>
            </div>
            <div>
              <Link href={`/about/players/${nextPlayer.slug}`}>
                <a
                  title={nextPlayer.name}
                  className="font-display bg-white shadow-md rounded px-4 py-1"
                >
                  {nextPlayer.name} (#{nextPlayer.number})
                </a>
              </Link>
            </div>
          </div>
          <div className="flex space-x-8">
            <div>
              <div className="w-60 h-80 flex-1">
                <PlayerCard player={player} />
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-8 mb-6">
                <div className="text-4xl font-display font-medium uppercase bg-yellow-200 rounded-full w-16 h-16 flex items-center justify-center text-yellow-600">
                  {player.number}
                </div>
                <h1 className="text-3xl font-display font-medium uppercase tracking-tight sm:text-4xl">
                  {player.name}
                </h1>
              </div>
              <p className="text-2xl text-gray-500 mb-5">{player.bio}</p>
              <div>
                portrait by{' '}
                <Link href={`/about/artists/${player.artist.slug}`}>
                  <a className="font-bold">{player.artist.name}</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export async function getStaticProps({ params }) {
  const data = require('../../../data').default
  const index = data.players.findIndex((a) => a.slug === params.slug)
  const player = data.players[index]
  let nextIndex = index + 1
  let prevIndex = index - 1
  if (prevIndex < 0) {
    prevIndex = data.players.length - 1
  }
  if (nextIndex === data.players.length) {
    nextIndex = 0
  }
  return {
    props: {
      prevPlayer: data.players[prevIndex],
      nextPlayer: data.players[nextIndex],
      player,
    },
  }
}

export async function getStaticPaths() {
  const data = require('../../../data').default
  const paths = data.players.map((player) => ({
    params: { slug: player.slug },
  }))
  return {
    paths,
    fallback: true, // false or 'blocking'
  }
}
