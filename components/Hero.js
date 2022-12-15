import Image from "next/image";
import Link from "next/link";

function sliceIntoChunks(arr, chunkSize) {
  const res = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    const chunk = arr.slice(i, i + chunkSize);
    res.push(chunk);
  }
  return res;
}

/* This example requires Tailwind CSS v2.0+ */
export default function Hero({ featured }) {
  const featuredChunks = sliceIntoChunks(featured, 4);

  return (
    <div className="relative overflow-hidden bg-gray-100">
      <div className="pt-8 sm:pt-24 sm:pb-40 md:pb-80 lg:pt-40 lg:pb-48">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="font-display text-3xl font-semibold uppercase tracking-tight text-gray-900 sm:text-5xl">
              <span className="text-gray-700">
                Banjo All-Star<span className="align-top text-lg">TM</span>
              </span>
              <br />
              <span className="bg-gradient-to-r from-amber-300 to-amber-400 bg-clip-text text-amber-400 text-transparent">
                {" "}
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
              </span>{" "}
              <div className="font-bold">Series 1 is shipping in April!</div>
            </div>
          </div>
          <div>
            <div className="mt-10 ">
              {/* Decorative image grid */}
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
              >
                <div className="absolute hidden rotate-6 transform p-2 opacity-75 sm:left-1/2 md:-top-28 md:block">
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
                                className="- relative h-64 w-44 overflow-hidden sm:opacity-0 lg:opacity-100"
                              >
                                <img
                                  src={feature.imageUrl}
                                  alt={feature.name}
                                  className="h-full w-full object-cover object-center"
                                  width="362"
                                  height="550"
                                />
                                <div className="absolute bottom-0 right-0 bg-gray-600 bg-opacity-40 px-4 font-display text-white opacity-100">
                                  {feature.name}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-8  pb-12 text-center md:space-x-6">
                <a
                  href="https://banjoallstars.etsy.com"
                  className="inline-block rounded-md border border-r border-b border-transparent border-r-amber-400 border-b-amber-400 border-t-amber-100 border-l-amber-100 bg-amber-300 py-3 px-8 text-center font-display font-medium text-gray-600 hover:bg-amber-400 hover:text-gray-600"
                >
                  ORDER NOW
                </a>
                <Link href="/about/banjo-all-star-series1-premium-trading-cards">
                  <a className="block text-center font-display text-lg font-medium text-gray-700 underline">
                    Learn More
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
