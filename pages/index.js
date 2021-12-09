import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import NewsletterSignup from '../components/NewsletterSignup'

import { storefront } from '../utils'

export default function Home({ description, title }) {
  const fulldescription = `Bluegrass Trading Co is an online store dedicated to providing exclusive bluegrass related merchandise. Our flagship and first product, Banjo All-Star trading cards is currently in production and will be available to ship in Spring 2022. Thank you to all who have expressed interest and enthusiasm in this project. Made with ♥ by Colyn Brown in Friendsville, TN ${description}`
  return (
    <div className="h-screen w-screen">
      <Head>
        <title>{title}</title>
        <meta name="description" content={fulldescription} />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content={`${title}`} />
        <meta property="og:description" content={fulldescription} />
        <meta
          property="og:image"
          content={
            'https://cdn.shopify.com/s/files/1/0601/1800/7990/products/poster3.png?v=1633876463'
          }
        />
        <meta property="og:url" content="https://www.bluegrasstradingco.com/" />
      </Head>
      <div className="header"></div>
      <header className="px-6 sm:px-0 flex items-center py-4 md:py-8 justify-center bg-white">
        <div className="relative max-w-4xl h-28 w-full">
          <Image src="/logo.svg" alt="Bluegrass Trading Co." layout="fill" />
        </div>
      </header>

      <main>
        <div className="bg-[#9cc9d8]">
          <div className="lg:grid sm:grid-cols-2 max-w-screen-2xl mx-auto">
            <div className="p-4 lg:p-12 lg:text-right flex lg:justify-end">
              <div className="max-w-xl text-[#04403F]">
                <h1 className="font-bold font-display text-4xl lg:text-5xl mb-4 uppercase">
                  Banjo{' '}
                  <span className="text-[#b43b26] whitespace-nowrap">
                    All-Star
                    <span className="text-lg align-top text-[#04403F]">TM</span>
                  </span>
                  <br />
                  Trading Cards
                </h1>
                <p className="leading-loose opacity-75 mb-4 text-lg">
                  Introducing the world&apos;s first bluegrass related,
                  high-quality, trading cards. These aren&apos;t standard photo
                  cards, they will be works of art, each portrait hand painted
                  by our featured artists. The first series entitled{' '}
                  <span className="font-bold">
                    &quot;Banjo All-Star
                    <span className="text-[10px] align-top">TM</span> Series
                    One&quot;
                  </span>{' '}
                  will be devoted to highlighting 25+ of your favorite banjo
                  pickers.
                </p>

                <div className="flex lg:justify-end">
                  <div className="w-96">
                    <a
                      href="https://shop.bluegrasstradingco.com/products/bluegrass-trading-co-banjo-all-star-series-one-pack"
                      className="hover:bg-gray-800 block mt-12 text-center disabled:bg-gray-300 disabled:text-gray-400 transition-all p-3 w-full text-opacity-90 px-12 text-lg text-white bg-[#04403F] rounded-xl font-medium uppercase border-4 border-white"
                    >
                      Pre-Order Yours Now!
                    </a>

                    <div className="text-base py-3 italic">
                      Cards now in progress. Shipping Spring 2022!
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#9cc9d8] relative h-[600px] md:h-[700px]">
              <Image
                src="/SitePromo3.jpg"
                alt="Bluegrass Trading Co - Banjo All-Star Series One Trading Cards"
                layout="fill"
                className="object-cover"
              />
            </div>
          </div>
        </div>
        <div className="text-gray-600 text-md lg:text-xl leading-loose">
          <div>
            <div className="p-4 lg:p-12">
              <div className="max-w-4xl mx-auto space-y-4 ">
                <p className="prose-lg">
                  Our Flagship product, Banjo All-Star
                  <span className="text-xs align-top text-[#04403F]">
                    TM
                  </span>{' '}
                  Series One Trading Cards will be available Spring 2022. Until
                  then I am accepting pre-orders. As thanks for pre-ordering,
                  I&apos;m giving away up to 100 prototype Earl Scruggs cards.
                  These are just about gone but I do have plenty of stickers and
                  plus you would also be supporting a cool project helping to
                  offset the cost of me putting this together in my spare time.
                  For this series, I am only printing 5000 packs. There will be
                  other ways to print up more cards of individual players but I
                  will only be selling up to 5000 as packs. Each pack in this
                  series contains 6 randomly sorted collectible cards (at least
                  6) and a lucky commemorative card (e.g. Earl Scruggs, Doug
                  Dillard). There are a total of 25+ unique cards (closer to 30
                  actually) in the series. Collect them all! Order now at our
                  discounted pre-order price.
                </p>
              </div>
            </div>
            <div>
              <NewsletterSignup />
            </div>
            <div className="p-4 lg:p-12 bg-gray-100">
              <div className="max-w-4xl mx-auto space-y-4 ">
                <h2 className="font-bold font-display uppercase text-3xl text-[#04403F]">
                  ARTISTS
                </h2>
                <p>
                  <strong>
                    Georgina Flood <span>(Dublin, Ireland)</span>
                  </strong>
                </p>
                <p>
                  A self taught, acrylic and graphite portrait artist from
                  Dublin, Ireland. Once criticized for being &quot;too stylized
                  and graphic,&quot; Georgina has developed a style that is
                  uniquely her own, with the portrait&apos;s hair becoming her
                  signature mark.
                </p>

                <p>
                  <strong>
                    Kara Lockmiller <span>(Knoxville, TN)</span>
                  </strong>
                </p>

                <p>
                  Kara is a chromesthete which means she sees a vast array of
                  real colors in her mind when she listens to music. Her goal
                  for each portrait is to let you glimpse music and musicians
                  the way she does. There is a kinship between color and music –
                  both can say what words can not.
                </p>

                <p>
                  <strong>
                    Robert Felker <span>(Knoxville, TN)</span>
                  </strong>
                </p>

                <p>
                  Born in Knoxville, raised in Nashville and educated at School
                  of Visual Arts in New York, Robert Felker’s journeyman career
                  has included a variety of cities and disciplines. He started
                  out in commercial illustration, before moving into the graphic
                  design field. Currently, he’s working on a variety of projects
                  including a musician series he call Patron Saints of Rock,
                  fine art landscape paintings and public murals. He works out
                  of his home studio in Knoxville, TN.
                </p>

                <p>
                  <strong>
                    Anna Magruder <span>(Portland, Oregon)</span>
                  </strong>
                </p>
                <p>
                  Oregon artist Anna Magruder specializes in portraits, whimsy,
                  and historical surrealism. She enjoys re-imagining the lives &
                  stories of characters on canvas and exploring the emotional
                  color of faces. Her attraction to faces, people and the
                  stories behind them is a consistent theme in her art.
                </p>

                <p>
                  <strong>
                    Arthur Hatton <span>(Knoxville, TN)</span>
                  </strong>
                </p>
                <p>
                  Arthur Hatton is a visual artist specializing in watercolor
                  and egg tempera. His artwork focuses on portraits and figures,
                  using an abstracted realist style. Arthur is also a clinical
                  psychologist.
                </p>

                <p>
                  <strong>Bryan Peterson (Dallas, TX)</strong>
                </p>
                <p>
                  Bryan is the founder and one of two chief designers for
                  Peterson Ray & Company, a Dallas, TX graphic design powerhouse
                  founded in 1985. Recently, he was named as the official
                  portrait artist for the Texas Songwriters’ Hall of Fame and is
                  currently working on portraits for inductees Nanci Griffith
                  and Lightnin’ Hopkins, among others.
                </p>
              </div>
            </div>

            <div className="p-4 lg:p-12 ">
              <div className="max-w-4xl mx-auto space-y-4 ">
                <h2 className="font-bold font-display uppercase text-3xl text-[#04403F]">
                  ABOUT
                </h2>
                <p>
                  Bluegrass Trading Co is an online store dedicated to providing
                  exclusive bluegrass related merchandise. Our flagship and
                  first product, Banjo All-Star trading cards is currently in
                  production and will be available to ship in Spring 2022.
                </p>

                <p>
                  Thank you to all who have expressed interest and enthusiasm in
                  this project. Made with ♥ by Colyn Brown in Friendsville, TN.
                  He can be contacted at{' '}
                  <a
                    href="mailto:colyn@bluegrasstradingco.com"
                    className="text-[#04403F] font-semibold"
                  >
                    colyn@bluegrasstradingco.com
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-gray-800">
        <div className="mx-auto max-w-4xl text-sm text-gray-500 px-4 md:px-0 py-12 space-y-4">
          <div className="md:flex items-center space-y-4 md:space-y-0 md:space-x-4 leading-none">
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
          <div>Site design and development by Bluegrass Trading Co.</div>
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
      images(first: 1) {
        edges {
          node {
            transformedSrc
          }
        }
      }
      variants(first: 1) {
        edges {
          node {
            id
          }
        }
      }
    }
  }
`

const cartCreateMutation = gql`
  mutation CartCreate($input: CartInput!) {
    cartCreate(input: $input) {
      cart {
        checkoutUrl
      }
    }
  }
`
