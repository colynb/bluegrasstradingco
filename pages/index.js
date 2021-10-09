import Head from 'next/head'
import Image from 'next/image'

import { storefront } from '../utils'

const PreOrderButton = () => {
  return (
    <button className="hover:bg-gray-800 mt-6 transition-all p-3 w-full text-opacity-90 px-12 text-lg text-white bg-[#04403F] rounded-xl font-medium uppercase border-4 border-white">
      Pre-Order Yours Now!
    </button>
  )
}

export default function Home({ description, title }) {
  return (
    <div className="h-screen w-screen">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content={`${title}`} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="/SitePromo.png" />
        <meta property="og:url" content="https://www.bluegrasstradingco.com/" />
      </Head>
      <div className="header"></div>
      <header className="px-6 sm:px-0 flex items-center py-4 md:py-8 justify-center bg-white">
        <div className="relative max-w-4xl h-24 w-full">
          <Image src="/logo.svg" alt="Bluegrass Trading Co." layout="fill" />
        </div>
      </header>

      <main>
        <div className="lg:grid sm:grid-cols-2">
          <div className="bg-gradient-to-br from-[#9cc9d8] to-[#d4ebf3] p-4 lg:p-12 lg:text-right flex lg:justify-end">
            <div className="max-w-xl text-[#04403F]">
              <h1 className="font-bold font-display text-4xl lg:text-6xl mb-4 uppercase">
                Banjo{' '}
                <span className="text-[#b43b26] whitespace-nowrap">
                  All-Star
                </span>
                <br />
                Trading Cards
              </h1>
              <p className="leading-loose opacity-75 mb-4 text-lg">
                Introducing the world&apos;s first bluegrass related,
                high-quality, trading cards. These aren&apos;t standard photo
                cards, they will be works of art, each portrait hand painted by
                our featured artists. The first series entitled{' '}
                <span className="font-bold">
                  &quot;Banjo All-Star Series One&quot;
                </span>{' '}
                will be devoted to highlighting 24 of your favorite banjo
                pickers.
              </p>
              <div className="flex lg:justify-end">
                <div className="w-80">
                  <PreOrderButton />
                  <div className="text-base py-3 italic">
                    Cards now in progress. Shipping Spring 2022!
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-blue-200 relative h-[600px] md:h-[650px]">
            <Image
              src="/SitePromo.png"
              alt="Earl Scruggs - Don Reno"
              layout="fill"
              className="object-cover"
            />
          </div>
        </div>
        <div className="text-gray-600 text-md lg:text-xl leading-loose">
          <div>
            <div className="p-4 lg:p-12">
              <div className="max-w-4xl mx-auto space-y-4 ">
                <h2 className="font-bold font-display uppercase text-3xl text-[#04403F]">
                  DESCRIPTION
                </h2>
                <p>{description}</p>
              </div>
            </div>
            <div className="p-4 lg:p-6  hidden">
              <div className="max-w-4xl mx-auto space-y-4 ">
                <h2 className="font-bold font-display uppercase text-3xl text-[#04403F]">
                  PROJECT STATUS
                </h2>
                <p>In Progress: 2 of 24 portraits have been completed.</p>
              </div>
            </div>

            <div className="p-4 lg:p-12 bg-gray-100">
              <div className="max-w-4xl mx-auto space-y-4 ">
                <h2 className="font-bold font-display uppercase text-3xl text-[#04403F]">
                  ARTISTS
                </h2>
                <p>
                  These are the artists I am working with that have works in
                  progress. More coming soon.
                </p>
                <p>
                  <strong>Georgina Flood</strong>
                </p>
                <p>
                  Consectetur incididunt mollit reprehenderit consequat sunt
                  fugiat dolore proident est quis elit laborum. Et Lorem magna
                  nisi in ullamco est. Commodo veniam irure qui commodo.
                  Reprehenderit dolor eiusmod ad duis aliqua magna ad ad sit
                  laborum. Nisi tempor est officia ut consectetur dolore
                  deserunt exercitation excepteur mollit in.
                </p>

                <p>
                  <strong>Kara Lockmiller</strong>
                </p>

                <p>
                  Ut quis irure do duis id fugiat sunt voluptate elit nulla
                  pariatur cillum. Nostrud eiusmod dolore id sit sit proident
                  duis elit proident irure quis. Mollit ex aute fugiat consequat
                  reprehenderit occaecat. Elit pariatur pariatur esse
                  reprehenderit voluptate proident. Sunt labore ipsum est
                  proident ullamco id. Nulla laborum aliqua veniam elit aute
                  reprehenderit nulla. Ullamco ex nulla sint commodo cillum
                  commodo ipsum dolor duis et.
                </p>

                <p>
                  <strong>Robert Felker</strong>
                </p>

                <p>
                  Laboris ea excepteur enim cillum do consequat est velit duis
                  qui ea laborum nostrud ea. Sit consequat anim voluptate ea
                  cupidatat Lorem eu elit ea eu cupidatat qui. Eiusmod culpa
                  reprehenderit quis sint non aliqua sunt irure irure ipsum id
                  nisi nostrud minim.
                </p>
                <div className="max-w-sm">
                  <PreOrderButton />
                </div>
              </div>
            </div>

            <div className="p-4 lg:p-12">
              <div className="max-w-4xl mx-auto space-y-4 ">
                <h2 className="font-bold font-display uppercase text-3xl text-[#04403F]">
                  ABOUT ME
                </h2>
                <p>
                  <div className="float-left mr-6 mb-6 rounded-xl overflow-hidden w-40 h-40">
                    <Image
                      src="/email.jpeg"
                      alt="Colyn Brown"
                      width="250"
                      height="283"
                      className="object-fill"
                    />
                  </div>
                  <div>
                    Hi, I’m Colyn Brown. I started Bluegrass Trading Company as
                    a way to offer merchandise to bluegrass enthusiasts like
                    myself. Though I’ve only been playing banjo since 2017, I’ve
                    been involved in bluegrass one way or the other my whole
                    life. My dad, Ken Brown, was an award winning banjo player
                    early on in the mid to late 60s Northeast region of the
                    country, hanging out and picking with young guys like Pete
                    Wernick, Bill Keith. I spent a lot of time growing up
                    listening to bluegrass.
                  </div>
                </p>
                <p>
                  Why trading cards you ask? Early in 2021 the thought just hit
                  me that these should exist so I asked around to see if I could
                  find them. The overwhelming response online was that I should
                  make these. I wasn&apos;t so sure I could do it. I just knew
                  that I wanted to have the cards exist so that I could have
                  some. They didn’t exist, at least not in the way I imagined,
                  so the only solution was for me to take a stab at it.
                </p>

                <p>
                  Fast forward a few months of thinking about how to do it and
                  how I would market them, I found Georgina Flood who was
                  thrilled to partner with me on the first few cards. Working
                  with her inspired me to reach out to other artists and I am
                  happy to be working with four different artists each with
                  their own unique style.
                </p>

                <p>
                  Thank you to everyone who has expressed interest in this
                  project. I am honored to be able to do something like this and
                  produce them for you all. I am accepting pre-orders because
                  these are not cheap to make. Your pre-orders will allow me to
                  offset some of the cost of the paintings as well as the cost
                  of print production. It also gives me a better idea of how
                  many packs I should be producing. I am grateful for any
                  support you can provide. Thank you!
                </p>
                <div className="max-w-sm clear-left">
                  <PreOrderButton />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-gray-800">
        <div className="mx-auto max-w-4xl text-sm text-gray-500 px-4 md:px-0 py-12 md:flex items-center space-y-4 md:space-y-0 md:space-x-4 leading-none">
          <div>&copy; 2021 Bluegrass Trading Co.</div>
          <div className="hidden md:block">♥</div>
          <div>Established 2021, Friendsville Tennessee</div>
          <div className="hidden md:block">♥</div>
          <div>
            <a
              href="mailto:colyn@bluegrasstradingco.com"
              className="text-white"
            >
              colyn@bluegrasstradingco.com
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export async function getStaticProps() {
  const { data } = await storefront(productQuery, {
    handle: 'bluegrass-trading-co-banjo-all-star-series-one-pack',
  })
  return {
    props: {
      ...data.productByHandle,
    },
  }
}

const gql = String.raw

const productQuery = gql`
  query SingleProduct($handle: String!) {
    productByHandle(handle: $handle) {
      id
      title
      description
      priceRange {
        minVariantPrice {
          amount
        }
      }
    }
  }
`
