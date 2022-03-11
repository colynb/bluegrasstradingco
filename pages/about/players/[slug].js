import { useRouter } from 'next/router'
import Link from 'next/link'
import Footer from '../../../components/Footer'
import Header from '../../../components/Header'
import PlayerCard from '../../../components/PlayerCard'
import { getPlayers } from '../../api/players'
import client from '../../../client'

export default function PlayerDetail({ player, prevPlayer, nextPlayer }) {
  const router = useRouter()

  if (!player) {
    return null
  }

  return (
    <div className="h-screen flex flex-col border border-red-500 justify-between">
      <div>
        <Header
          title={`Banjo All-Star Series 1 Player, ${player.name}`}
          description={player.bio}
          image={player.imageUrl}
          path={router.asPath}
        />
      </div>
      <div className="bg-gray-100 flex-1">
        <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
          <div className="flex justify-between mb-6">
            <div>
              <Link href={`/about/players/${prevPlayer.slug.current}`}>
                <a
                  title={prevPlayer.name}
                  className="flex items-center font-display underline text-gray-600 rounded px-2 py-1"
                >
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span>
                    {prevPlayer.name} (#{prevPlayer.series_number})
                  </span>
                </a>
              </Link>
            </div>
            <div>
              <Link href={`/about/players/${nextPlayer.slug.current}`}>
                <a
                  title={nextPlayer.name}
                  className="font-display flex items-center leading-none underline text-gray-600 rounded px-4 py-1"
                >
                  <span>
                    {nextPlayer.name} (#{nextPlayer.series_number})
                  </span>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </a>
              </Link>
            </div>
          </div>
          <div className="md:flex md:space-x-8 space-y-6">
            <div>
              <div className="w-80 mx-auto h-96 md:w-60 md:h-80 flex-1">
                <PlayerCard player={player} />
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-8 mb-6">
                <div className="text-4xl font-display font-medium uppercase bg-yellow-200 rounded-full w-16 h-16 flex items-center justify-center text-yellow-600">
                  {player.series_number}
                </div>
                <h1 className="text-3xl font-display font-medium uppercase tracking-tight sm:text-4xl">
                  {player.name}
                </h1>
              </div>

              <p className="text-2xl text-gray-500 mb-5">{player.bio}</p>

              <div className="font-bold">Artist</div>
              <Link href={`/about/artists/${player.artist.slug.current}`}>
                <a className="relative rounded-lg border inline-flex border-gray-300 bg-white p-2 px-4 shadow-sm items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                  <div className="flex-shrink-0">
                    <img
                      className="h-10 w-10 rounded-full object-cover"
                      src={player.artist.imageUrl}
                      alt=""
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="absolute inset-0" aria-hidden="true" />
                    <p className="text-sm font-medium text-gray-900">
                      {player.artist.name}
                    </p>
                    <p className="text-sm text-gray-500 truncate">
                      {player.artist.location}
                    </p>
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="border border-green-400">
        <Footer />
      </div>
    </div>
  )
}

export async function getStaticProps({ params }) {
  const players = await client.fetch(
    `
    *[_type == "player"]|order(series_number){_id, name, imageUrl, slug, limited, bio, series_number, artist->{name, slug, imageUrl}}
    `
  )
  const index = players.findIndex((a) => a.slug.current === params.slug)
  const player = players[index]
  let nextIndex = index + 1
  let prevIndex = index - 1
  if (prevIndex < 0) {
    prevIndex = players.length - 1
  }
  if (nextIndex === players.length) {
    nextIndex = 0
  }

  return {
    props: {
      prevPlayer: players[prevIndex],
      nextPlayer: players[nextIndex],
      player,
    },
  }
}

export async function getStaticPaths() {
  const players = await client.fetch(`*[_type == "player"]{slug}`)
  const paths = players.map((player) => ({
    params: { slug: player.slug.current },
  }))
  return {
    paths,
    fallback: false, // false or 'blocking'
  }
}
