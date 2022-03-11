import Link from 'next/link'

export default function Artists({ artists }) {
  return (
    <div>
      <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
          <div className="space-y-5 sm:space-y-4">
            <h2 className="text-3xl font-medium tracking-tight uppercase font-display text-gray-700">
              Our Artists
            </h2>
            <p className="text-xl text-gray-500">
              Learn more about the amazing artists behind Banjo All-Stars
            </p>
          </div>
          <div className="lg:col-span-2">
            <ul
              role="list"
              className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-12 sm:space-y-0 lg:gap-x-8"
            >
              {artists.map((artist) => (
                <li key={artist.name}>
                  <div className="flex items-center space-x-4 lg:space-x-6">
                    <img
                      className="w-16 h-16 rounded-full lg:w-20 lg:h-20 object-cover"
                      src={artist.imageUrl}
                      alt={artist.name}
                      width="100"
                      height="100"
                    />
                    <div className="font-medium text-lg leading-6">
                      <h3>{artist.name}</h3>
                      <p className="text-gray-500 text-base mb-2">Location</p>
                      <Link href={`/about/artists/${artist.slug.current}`}>
                        <a className="text-base text-gray-700 underline font-semibold">
                          More detail
                        </a>
                      </Link>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
