import Image from 'next/image'
import Link from 'next/link'

function sliceIntoChunks(arr, chunkSize) {
  const res = []
  for (let i = 0; i < arr.length; i += chunkSize) {
    const chunk = arr.slice(i, i + chunkSize)
    res.push(chunk)
  }
  return res
}

/* This example requires Tailwind CSS v2.0+ */
export default function Hero({ featured }) {
  const featuredChunks = sliceIntoChunks(featured, 4)

  return (
    <div className="relative bg-gray-100 overflow-hidden">
      <div className="pt-8 md:pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
          <div className="sm:max-w-lg">
            <h1 className="text-3xl font-display uppercase font-semibold tracking-tight text-gray-900 sm:text-5xl">
              <span className="text-gray-700">
                Banjo All-Star<span className="text-lg align-top">TM</span>
              </span>
              <br />
              <span className="text-amber-400 bg-gradient-to-r from-amber-300 to-amber-400 text-transparent bg-clip-text">
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
              <div className="font-bold">Series 1 is shipping in April!</div>
            </div>
          </div>
          <div>
            <div className="mt-10 ">
              {/* Decorative image grid */}
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:max-w-7xl lg:mx-auto lg:w-full"
              >
                <div className="absolute transform sm:left-1/2 md:-top-28 rotate-6 p-2 hidden md:block opacity-75">
                  <div className="flex items-center space-x-1">
                    {featuredChunks.map((chunk, i) => {
                      return (
                        <div
                          key={`featured_container_${i}`}
                          className="grid gap-1"
                        >
                          {chunk.map((feature) => {
                            return (
                              <div
                                key={`featured_${feature.imageUrl}`}
                                className="w-44 h-64 overflow-hidden sm:opacity-0 lg:opacity-100 relative -"
                              >
                                <img
                                  src={feature.imageUrl}
                                  alt={feature.name}
                                  className="w-full h-full object-center object-cover"
                                  width="362"
                                  height="550"
                                />
                                <div className="absolute bottom-0 right-0 text-white font-display bg-gray-600 bg-opacity-40 px-4 opacity-100">
                                  {feature.name}
                                </div>
                              </div>
                            )
                          })}
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>

              <div className="flex items-center md:space-x-6  space-x-8 text-center pb-12">
                <a
                  href="https://shop.bluegrasstradingco.com/products/bluegrass-trading-co-banjo-all-star-series-one-pack"
                  className="inline-block border-r border-b border-r-amber-400 border-b-amber-400 border-t-amber-100 border-l-amber-100 font-display text-gray-600 text-center bg-amber-300 border border-transparent rounded-md py-3 px-8 font-medium hover:text-gray-600 hover:bg-amber-400"
                >
                  ORDER NOW
                </a>
                <Link href="/about/banjo-all-star-series1-premium-trading-cards">
                  <a className="font-display text-lg text-gray-700 block font-medium underline text-center">
                    Learn More
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
