/* This example requires Tailwind CSS v2.0+ */
export default function Hero() {
  return (
    <div className="relative bg-gray-100 overflow-hidden">
      <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
          <div className="sm:max-w-lg">
            <h1 className="text-2xl font-display uppercase font-semibold tracking-tight text-gray-900 sm:text-5xl">
              Banjo All-Star<span className="text-lg align-top">TM</span>
              <br />
              Premium Trading Cards
            </h1>
            <p className="mt-4 text-xl text-gray-500">
              Introducing the world&apos;s first bluegrass related, premium,
              trading cards. Each pack of Banjo All-Star Premium Trading Cards
              includes 8 players, one of which is a limited edition card. Yes,
              every pack comes with a limited edition card!.{' '}
              <strong>Shipping in April!</strong>
            </p>
          </div>
          <div>
            <div className="mt-10">
              {/* Decorative image grid */}
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:max-w-7xl lg:mx-auto lg:w-full"
              >
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-1 lg:space-x-2">
                    <div className="flex-shrink-0 grid grid-cols-1 gap-y-1 lg:gap-y-2 top-16 relative">
                      <div className="w-44 h-64 rounded overflow-hidden sm:opacity-0 lg:opacity-100">
                        <img
                          src="/portraits/_0011_TERRY BAUCOM.jpg"
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                      <div className="w-44 h-64 rounded overflow-hidden sm:opacity-0 lg:opacity-100">
                        <img
                          src="/portraits/_0003_BUTCH ROBINS.jpg"
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                      <div className="w-44 h-64 rounded overflow-hidden sm:opacity-0 lg:opacity-100">
                        <img
                          src="/portraits/_0001_ALISON BROWN.jpg"
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                      <div className="w-44 h-64 rounded shadow-lg overflow-hidden">
                        <img
                          src="/portraits/_0024_DON RENO.jpg"
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                    </div>
                    <div className="flex-shrink-0 grid grid-cols-1 gap-y-1 lg:gap-y-2">
                      <div className="w-44 h-64 rounded shadow-lg overflow-hidden">
                        <img
                          src="/portraits/_0009_JD CROWE.jpg"
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                      <div className="w-44 h-64 rounded shadow-lg overflow-hidden">
                        <img
                          src="/portraits/_0023_EARL SCRUGGS.jpg"
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                      <div className="w-44 h-64 rounded shadow-lg overflow-hidden">
                        <img
                          src="/portraits/_0018_BILL KEITH.jpg"
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                      <div className="w-44 h-64 rounded shadow-lg overflow-hidden">
                        <img
                          src="/portraits/_0010_TONY TRISCHKA.jpg"
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                    </div>
                    <div className="flex-shrink-0 grid grid-cols-1 gap-y-1 lg:gap-y-2">
                      <div className="w-44 h-64 rounded shadow-lg overflow-hidden">
                        <img
                          src="/portraits/_0007_KRISTIN SCOTT BENSON.jpg"
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                      <div className="w-44 h-64 rounded shadow-lg overflow-hidden">
                        <img
                          src="/portraits/_0034_EDDIE ADCOCK.jpg"
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                      <div className="w-44 h-64 rounded shadow-lg overflow-hidden">
                        <img
                          src="/portraits/_0014_BILL EMERSON.jpg"
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="https://shop.bluegrasstradingco.com/products/bluegrass-trading-co-banjo-all-star-series-one-pack"
                className="inline-block border-r border-b border-r-yellow-400 border-b-yellow-400 border-t-yellow-100 border-l-yellow-100 font-display text-gray-600 text-center bg-yellow-300 border border-transparent rounded-md py-3 px-8 font-medium  hover:bg-yellow-400"
              >
                LEARN MORE
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
