import Image from 'next/image'
import Link from 'next/link'
export default function PlayerCard({ player }) {
  return (
    <Link href={`/about/players/${player.slug}`}>
      <a className="block w-full h-full rounded overflow-hidden relative">
        <div className="absolute top-0 right-0 text-white font-display bg-gray-600 bg-opacity-40 px-4 z-10">
          {player.limited && (
            <span className="text-yellow-400 bg-gradient-to-r from-yellow-200 to-yellow-300 text-transparent bg-clip-text font-bold font-display">
              LIMITED
            </span>
          )}
        </div>
        <Image
          src={player.imageUrl}
          alt=""
          layout="fill"
          className="w-full h-full object-center object-cover"
        />
        <div className="absolute bottom-0 right-0 text-white font-display bg-gray-600 bg-opacity-40 px-4">
          {player.name}{' '}
        </div>
      </a>
    </Link>
  )
}
