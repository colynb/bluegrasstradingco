import Image from 'next/image'
import client from '../../../client'
import Footer from '../../../components/Footer'
import Header from '../../../components/Header'
import PlayerCard from '../../../components/PlayerCard'
import { getArtists } from '../../api/artists'

export default function ArtistDetail({ artist }) {
  if (!artist) {
    return null
  }

  console.log(artist)
  return (
    <>
      <Header
        title={`Banjo All-Star Series 1 Artist, ${artist.name}`}
        description={artist.bio}
      />
      <div className="bg-gray-100">
        <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
          <div>
            <div className="space-y-5 sm:space-y-4 text-center">
              <img
                className="w-40 h-40 rounded-full mx-auto border-8 border-white"
                src={artist.imageUrl}
                alt=""
                width="150"
                height="150"
              />
              <h1 className="text-3xl font-display font-medium uppercase tracking-tight sm:text-4xl">
                {artist.name}
              </h1>
              <p className="text-xl text-gray-500">{artist.bio}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <h3 className="text-2xl font-display font-medium uppercase tracking-tight mb-4">
          Selected Works
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {artist.players.map((player) => {
            return (
              <div
                key={player.name}
                className="h-96 w-80 md:w-full md:h-64 mx-auto"
              >
                <PlayerCard player={player} />
              </div>
            )
          })}
        </div>
      </div>
      <Footer />
    </>
  )
}

export async function getStaticProps({ params }) {
  const artist = await client.fetch(
    `
    *[_type == "artist"  && slug.current == $slug][0]
    {_id, name, location, imageUrl, 'bio': bio[0].children[0].text, players[]->{name, slug, bio, series_number, imageUrl, limited}}
    `,
    { slug: params.slug }
  )

  return {
    props: {
      artist,
    },
  }
}

export async function getStaticPaths() {
  const artists = await client.fetch(`*[_type == "artist"]{slug}`)
  const paths = artists.map((artist) => ({
    params: { slug: artist.slug.current },
  }))
  return {
    paths,
    fallback: false, // false or 'blocking'
  }
}
