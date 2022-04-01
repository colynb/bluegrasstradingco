import { useRouter } from 'next/router'
import Link from 'next/link'
import Footer from '../../../components/Footer'
import Header from '../../../components/Header'
import PlayerCard from '../../../components/PlayerCard'
import { getPlayers } from '../../api/players'
import client from '../../../client'
import Layout from '../../../components/Layout'
import FeaturedProducts from '../../../components/FeaturedProducts'
import { loadCollection } from '../../../lib/loadCollection'

export default function PlayerDetail({
  player,
  prevPlayer,
  nextPlayer,
  collection,
}) {
  const router = useRouter()

  if (!player) {
    return null
  }

  const metaData = {
    title: `${player.name}, Banjo All-Star`,
    description: player.bio,
    image: player.imageUrl,
  }

  return (
    <Layout metaData={metaData}>
      <div className="flex-1 bg-gray-100">
        <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8 lg:py-24">
          <div className="mb-6 flex justify-between">
            <div>
              <Link href={`/about/players/${prevPlayer.slug.current}`}>
                <a
                  title={prevPlayer.name}
                  className="flex items-center rounded px-2 py-1 font-display text-gray-600 underline"
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
                  className="flex items-center rounded px-4 py-1 font-display leading-none text-gray-600 underline"
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
          <div className="mb-12 space-y-6 md:flex md:space-x-8">
            <div>
              <div className="mx-auto h-96 w-80 flex-1 md:h-80 md:w-60">
                <PlayerCard player={player} />
              </div>
            </div>
            <div className="flex-1">
              <div className="mb-6 flex items-center space-x-8">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-yellow-200 font-display text-4xl font-medium uppercase text-yellow-600">
                  {player.series_number}
                </div>
                <h1 className="font-display text-3xl font-medium uppercase tracking-tight sm:text-4xl">
                  {player.name}
                </h1>
              </div>

              <p className="mb-5 text-2xl text-gray-500">{player.bio}</p>

              <div className="font-bold">Artist</div>
              <Link href={`/about/artists/${player.artist.slug.current}`}>
                <a className="relative inline-flex items-center space-x-3 rounded-lg border border-gray-300 bg-white p-2 px-4 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400">
                  <div className="flex-shrink-0">
                    <img
                      className="h-10 w-10 rounded-full object-cover"
                      src={player.artist.imageUrl}
                      alt=""
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="absolute inset-0" aria-hidden="true" />
                    <p className="text-sm font-medium text-gray-900">
                      {player.artist.name}
                    </p>
                    <p className="truncate text-sm text-gray-500">
                      {player.artist.location}
                    </p>
                  </div>
                </a>
              </Link>
            </div>
          </div>

          <FeaturedProducts collection={collection} />
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const players = await client.fetch(
    `
    *[_type == "player"]|order(series_number){_id, name, imageUrl, slug, collection, limited, bio, series_number, artist->{name, slug, imageUrl}}
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

  const collection = await loadCollection(
    player.collection || 'products-now-shipping'
  )

  return {
    props: {
      prevPlayer: players[prevIndex],
      nextPlayer: players[nextIndex],
      player,
      collection,
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
