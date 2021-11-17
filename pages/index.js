import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import EmailSignup from '../components/email-signup'
import NewsletterSignup from '../components/NewsletterSignup'

import { storefront } from '../utils'

const PreOrderButton = ({
  variantId,
  loading = true,
  onClick,
  onChange,
  quantity,
  price,
}) => {
  if (!variantId) {
    return (
      <div className="mt-6 p-3 w-full px-12 text-lg text-gray-400 bg-gray-300 rounded-xl font-medium uppercase border-4 border-[#ccc]">
        Pre-ordering unavailable
      </div>
    )
  }
  return (
    <div className="mt-6 ">
      <div className="text-sm p-4 flex items-center leading-none space-x-4">
        <div>Number of packs: </div>
        <input
          type="number"
          onChange={onChange}
          value={quantity}
          className="w-20 rounded"
        />
        <div className="font-display font-bold text-xl">
          {new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
          }).format(price)}{' '}
          /each
        </div>
      </div>
      <button
        onClick={onClick}
        type="button"
        disabled={loading}
        className="hover:bg-gray-800 disabled:bg-gray-300 disabled:text-gray-400 transition-all p-3 w-full text-opacity-90 px-12 text-lg text-white bg-[#04403F] rounded-xl font-medium uppercase border-4 border-white"
      >
        {loading ? 'Preparing...' : 'Pre-Order Yours Now!'}
      </button>
    </div>
  )
}

export default function Home({
  description,
  title,
  variants,
  images,
  priceRange,
}) {
  const [loading, setLoading] = useState(false)
  const [quantity, setQuantity] = useState(1)
  const variantId = variants?.edges[0]?.node?.id
  const price = priceRange.minVariantPrice.amount

  const PREORDER_ENABLED = process.env.NEXT_PUBLIC_PREORDER_ENABLED === 'true'

  const checkout = async () => {
    setLoading(true)

    const { data } = await storefront(cartCreateMutation, {
      input: {
        lines: {
          merchandiseId: variantId,
          quantity: parseInt(quantity),
        },
      },
    })
    const { checkoutUrl } = data?.cartCreate?.cart

    window.location.href = checkoutUrl
  }

  const handleChange = (e) => {
    const qty = e.target.value >= 1 ? e.target.value : 1
    setQuantity(qty)
  }
  return (
    <div className="h-screen w-screen">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content={`${title}`} />
        <meta property="og:description" content={description} />
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

                {!PREORDER_ENABLED ? (
                  <EmailSignup />
                ) : (
                  <div className="flex lg:justify-end">
                    <div className="w-96">
                      <PreOrderButton
                        price={price}
                        quantity={quantity}
                        onChange={handleChange}
                        loading={loading}
                        onClick={checkout}
                        variantId={variantId}
                      />
                      <div className="text-base py-3 italic">
                        Cards now in progress. Shipping Spring 2022!
                      </div>
                    </div>
                  </div>
                )}
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
                <h2 className="font-bold font-display uppercase text-3xl text-[#04403F]">
                  DESCRIPTION
                </h2>
                <p>{description}</p>
              </div>
            </div>

            <div className="p-4 lg:p-12 bg-gray-100">
              <div className="max-w-4xl mx-auto space-y-4 ">
                <h2 className="font-bold font-display uppercase text-3xl text-[#04403F]">
                  ARTISTS
                </h2>
                <p>
                  <strong>Georgina Flood</strong> <span>(Dublin, Ireland)</span>
                </p>
                <p>
                  A self taught, acrylic and graphite portrait artist from
                  Dublin, Ireland. Once criticized for being &quot;too stylized
                  and graphic,&quot; Georgina has developed a style that is
                  uniquely her own, with the portrait&apos;s hair becoming her
                  signature mark.
                </p>

                <p>
                  <strong>Kara Lockmiller</strong> <span>(Knoxville, TN)</span>
                </p>

                <p>
                  Kara is a chromesthete which means she sees a vast array of
                  real colors in her mind when she listens to music. Her goal
                  for each portrait is to let you glimpse music and musicians
                  the way she does. There is a kinship between color and music –
                  both can say what words can not.
                </p>

                <p>
                  <strong>Robert Felker</strong> <span>(Knoxville, TN)</span>
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
                  <strong>Fergal Coghlan</strong> <span>(Dublin, Ireland)</span>
                </p>

                <p>
                  Fergal Coghlan is a Dublin based artist, Works alongside many
                  other artist at the Icon Factory based in Temple Bar area,
                  promoting Irish culture and transforming temple bar into a
                  piece of art one wall at a time, pushing Irish Icons, But
                  Fergal also works on portrait art of Musicians, and some Film
                  and TV.
                </p>

                <p>
                  <strong>Anna Magruder</strong> <span>(Portland, Oregon)</span>
                </p>
                <p>
                  Oregon artist Anna Magruder specializes in portraits, whimsy,
                  and historical surrealism. She enjoys re-imagining the lives &
                  stories of characters on canvas and exploring the emotional
                  color of faces. Her attraction to faces, people and the
                  stories behind them is a consistent theme in her art.
                </p>

                <p>
                  <strong>Arthur Hatton</strong> <span>(Knoxville, TN)</span>
                </p>
                <p>
                  Arthur Hatton is a visual artist specializing in watercolor
                  and egg tempera. His artwork focuses on portraits and figures,
                  using an abstracted realist style. Arthur is also a clinical
                  psychologist.
                </p>
              </div>
            </div>

            <div className="p-4 lg:p-12 ">
              <div className="max-w-4xl mx-auto space-y-4 ">
                <div className="float-left mr-6 mb-6 rounded-xl overflow-hidden w-40 h-40">
                  <Image
                    src="/email.jpeg"
                    alt="Colyn Brown"
                    width="250"
                    height="283"
                    className="object-fill"
                  />
                </div>
                <p>
                  Hi, I’m Colyn Brown. I started Bluegrass Trading Company as a
                  way to offer goods and services to bluegrass enthusiasts like
                  myself, starting with trading cards.
                </p>
                <p>
                  Why trading cards you ask? I have always loved the banjo. I
                  grew up listening to my dad play and I’ve only been playing
                  myself for a few years, but there are a lot of incredible
                  banjo players that I don&apos;t think get the recognition they
                  deserve. Many times, I have stumbled upon a player with
                  jaw-dropping skill, shocked I’ve not heard of them before. So,
                  while this series includes a few of the all-time greats, I
                  hope you will be surprised and delighted by some of my other
                  included pickers.
                </p>

                <p>
                  For the last several months I have been thinking about how to
                  create these cards and what they should look like. I decided
                  that simple photographs of each of the players was not going
                  to be good enough. I wanted each card to be a painted portrait
                  of the respective player. I just needed to find the right
                  artist. Not only did I find the right artist, I found five of
                  them! And you will love them all!
                </p>

                <p>
                  Thank you to all who have expressed interest and enthusiasm in
                  this project. I am honored to be able to do something like
                  this and produce them for you all. I am accepting pre-orders
                  because these are not cheap to make. Your pre-orders will
                  allow me to offset some of the cost of the paintings as well
                  as the cost of print production. It also gives me a better
                  idea of how many packs I should be producing. I am grateful
                  for any support you can provide. Thank you!
                </p>
                {PREORDER_ENABLED && (
                  <div className="max-w-sm clear-left">
                    <PreOrderButton
                      price={price}
                      quantity={quantity}
                      onChange={handleChange}
                      loading={loading}
                      onClick={checkout}
                      variantId={variantId}
                    />
                  </div>
                )}
              </div>
            </div>
            <div>
              <NewsletterSignup />
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

const checkoutQuery = gql`
  mutation CheckoutCreate($input: CheckoutCreateInput!) {
    checkoutCreate(input: $input) {
      checkout {
        webUrl
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
