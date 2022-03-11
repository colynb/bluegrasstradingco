import Image from 'next/image'
import NewsletterSignup from '../components/NewsletterSignup'

import { storefront } from '../utils'
import Hero from '../components/Hero'
import Artists from '../components/Artitsts'
import client from '../client'
import Layout from '../components/Layout'

export default function Home({ description, title, artists, featured }) {
  const metaData = {
    title,
    description,
  }

  return (
    <Layout metaData={metaData}>
      <main>
        <Hero featured={featured} />

        <div className="bg-white">
          <div className="max-w-7xl mx-auto py-12 sm:px-2 sm:py-32 lg:px-4">
            <div className="max-w-2xl mx-auto px-4 lg:max-w-none">
              <div className="md:flex md:space-x-6">
                <div className=" rounded-xl shadow-lg w-full  md:w-80 h-72 overflow-hidden relative mb-4">
                  <Image
                    src="/colyn.jpg"
                    layout="fill"
                    className="w-80 h-72 object-center object-cover "
                    alt="Colyn Brown, Founder of Bluegrass Trading Co, LLC"
                  />
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-medium uppercase font-display tracking-tight text-gray-700">
                    What is Bluegrass Trading Co?
                  </h2>
                  <p className="mt-4 text-xl text-gray-500 leading-loose">
                    Founded by Colyn Brown in Sept 2021, Bluegrass Trading Co is
                    an online store dedicated to providing exclusive, quality,
                    merchandise for bluegrass enthusiasts. Our flagship product,{' '}
                    <span className="font-semibold">
                      Banjo All-Star Premium Trading Cards
                    </span>{' '}
                    is currently in production and Series 1 will begin shipping
                    in April 2022!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-100">
          <Artists artists={artists} />
        </div>
        <NewsletterSignup />
      </main>
    </Layout>
  )
}

export async function getStaticProps() {
  const { data } = await storefront(productQuery, {
    handle: 'bluegrass-trading-co-banjo-all-star-series-one-pack',
  })

  const artists = await client.fetch(
    `*[_type == "artist"]| order(name){ _id, name, bio, players, imageUrl, slug }`
  )

  const featured = await client.fetch(
    `*[_type == "player" && limited == true]|order(series_number){name, series_number, slug, imageUrl}`
  )
  return {
    props: {
      featured,
      artists,
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
