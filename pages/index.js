import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'

import { storefront } from '../utils'

const PreOrderButton = ({
  variantId,
  loading = true,
  onClick,
  onChange,
  quantity,
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
      <div className="text-sm p-4">
        Number of packs:{' '}
        <input
          type="number"
          onChange={onChange}
          value={quantity}
          className="w-20 rounded"
        />
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

export default function Home({ description, title, variants }) {
  const [loading, setLoading] = useState(false)
  const [quantity, setQuantity] = useState(1)
  const variantId = variants?.edges[0]?.node?.id

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

    console.log({ checkoutUrl })
    // const { data } = await storefront(checkoutQuery, {
    //   input: {
    //     lineItems: {
    //       variantId,
    //       quantity: 1,
    //     },
    //   },
    // })
    // const { webUrl } = data?.checkoutCreate?.checkout

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
        <meta property="og:image" content="/SitePromoWithLogo.png" />
        <meta property="og:url" content="https://www.bluegrasstradingco.com/" />
      </Head>
      <div className="header"></div>
      <header className="px-6 sm:px-0 flex items-center py-4 md:py-8 justify-center bg-white">
        <div className="relative max-w-4xl h-28 w-full">
          <Image src="/logo.svg" alt="Bluegrass Trading Co." layout="fill" />
        </div>
      </header>

      <main>
        <div className="lg:grid sm:grid-cols-2">
          <div className="bg-gradient-to-br from-[#9cc9d8] to-[#d4ebf3] p-4 lg:p-12 lg:text-right flex lg:justify-end">
            <div className="max-w-xl text-[#04403F]">
              <h1 className="font-bold font-display text-4xl lg:text-5xl mb-4 uppercase">
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
                <div className="w-96">
                  <PreOrderButton
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
            </div>
          </div>
          <div className="bg-[#9cc9d8] relative h-[600px] md:h-[650px]">
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
                  A self taught, acrylic and graphite portrait artist from
                  Dublin, Ireland. Once criticized for being &quot;too stylized
                  and graphic,&quot; Georgina has developed a style that is
                  uniquely her own, with the portrait&apos;s hair becoming her
                  signature mark.
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
                  <PreOrderButton
                    quantity={quantity}
                    onChange={handleChange}
                    loading={loading}
                    onClick={checkout}
                    variantId={variantId}
                  />
                </div>
              </div>
            </div>

            <div className="p-4 lg:p-12">
              <div className="max-w-4xl mx-auto space-y-4 ">
                <h2 className="font-bold font-display uppercase text-3xl text-[#04403F]">
                  ABOUT ME
                </h2>
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
                  myself, starting with trading cards. Though I’ve only been
                  playing banjo since 2017, I’ve been involved in bluegrass one
                  way or the other my whole life. My dad, Ken Brown, was an
                  award winning banjo player early on in the mid to late 60s
                  Northeast region of the country, hanging out and picking with
                  young guys like Pete Wernick, Bill Keith. I spent a lot of
                  time growing up listening to bluegrass.
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
                  <PreOrderButton
                    quantity={quantity}
                    onChange={handleChange}
                    loading={loading}
                    onClick={checkout}
                    variantId={variantId}
                  />
                </div>
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
