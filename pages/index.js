import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="h-screen w-screen">
      <Head>
        <title>Bluegrass Trading Co.</title>
        <meta name="description" content="Bluegrass Trading Co. - Est. 2021" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="header"></div>
      <header className="px-6 sm:px-0 flex items-center py-8 justify-center bg-white">
        <div className="relative max-w-4xl h-10 sm:h-20 w-full">
          <Image src="/logo.svg" alt="Bluegrass Trading Co." layout="fill" />
        </div>
      </header>

      <main>
        <div className="md:grid sm:grid-cols-2">
          <div className="bg-yellow-50 p-12 md:text-right flex md:justify-end">
            <div className="max-w-xl text-[#04403F]">
              <h1 className="font-bold font-display text-6xl mb-4 uppercase">
                Banjo{' '}
                <span className="text-[#b43b26] whitespace-nowrap">
                  All-Star
                </span>
                <br />
                Trading Cards
              </h1>
              <p className="leading-loose opacity-75 mb-4">
                I am currently working several artists to create the
                world&apos;s first bluegrass related, high-quality, trading
                cards. These aren&apos;t photo cards, they will be works of art,
                hand painted by our featured artists. The first series entitled{' '}
                <span className="font-bold">
                  &quot;Banjo All-Star Series One&quot;
                </span>{' '}
                will be devoted to highlighting 24 of your favorite banjo
                pickers. Each pack will include 12 randomly selected cards PLUS
                one commemorative card. The goal is to not only promote the
                obvious choices (e.g. Earl Scruggs, J.D., etc) but more, less
                obvious ones.
              </p>

              <button className="p-4 px-12 text-xl text-white bg-[#04403F] rounded-lg font-bold">
                Pre-Order Yours Now!
              </button>
              <p className="mt-2">
                <span className="font-bold text-xl">Shipping Spring 2022!</span>
              </p>
            </div>
          </div>
          <div className="bg-blue-200 relative h-96 md:h-auto">
            <Image
              src="/SitePromo.png"
              alt="Bluegrass Trading Co."
              layout="fill"
              className="object-cover"
            />
          </div>
        </div>
        <div className="p-12 text-gray-600 text-xl leading-loose">
          <div className="max-w-4xl mx-auto space-y-4">
            <div className="opacity-75 space-y-4">
              <p>
                Hi, I’m Colyn Brown. I started Bluegrass Trading Company as a
                way to offer merchandise to bluegrass enthusiasts like myself.
                Though I’ve only been playing banjo since 2017, I’ve been
                involved in bluegrass one way or the other my whole life. My
                dad, Ken Brown, was an award winning banjo player early on in
                the mid to late 60s Northeast region of the country, hanging out
                and picking with young guys like Pete Wernick, Bill Keith. I
                spent a lot of time growing up listening to bluegrass.
              </p>
              <p>
                Why trading cards you ask? Early in 2021 the thought just hit me
                that these should exist so I asked around to see if I could find
                them. The overwhelming response online was that I should make
                these. I wasn&apos;t so sure I could do it. I just knew that I
                wanted to have the cards exist so that I could have some. They
                didn’t exist, at least not in the way I imagined, so the only
                solution was for me to take a stab at it.
              </p>

              <p>
                Fast forward a few months of thinking about how to do it and how
                I would market them, I found Georgina Flood who was thrilled to
                partner with me on this first few cards. Working with her
                inspired me to reach out to other artists and I am happy to be
                working with four different artists each with their own unique
                style.
              </p>

              <p>
                Thank you to everyone who has expressed interest in this
                project. I am honored to be able to do something like this and
                produce them for you all. I am accepting pre-orders because
                these are not cheap to make. Your pre-orders will allow me to
                offset some of the cost of the paintings as well as the cost of
                print production. It also gives me a better idea of how many
                packs I should be producing.
              </p>
            </div>
            <div className="max-w-md mx-auto">
              <button className="p-4 w-full text-xl text-white bg-[#04403F] rounded-lg font-bold">
                Pre-Order Yours Now!
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
