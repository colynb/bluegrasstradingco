import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import NewsletterSignup from '../components/NewsletterSignup'

import { storefront } from '../utils'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Artists from '../components/Artitsts'
import Footer from '../components/Footer'

export default function Home({ description, title }) {
  const fulldescription = `Bluegrass Trading Co is an online store dedicated to providing exclusive bluegrass related merchandise. Our flagship and first product, Banjo All-Star trading cards is currently in production and will be available to ship in Spring 2022. Thank you to all who have expressed interest and enthusiasm in this project. Made with ♥ by Colyn Brown in Friendsville, TN ${description}`
  const incentives = [
    {
      name: 'Free shipping',
      imageSrc:
        'https://tailwindui.com/img/ecommerce/icons/icon-shipping-simple.svg',
      description:
        "It's not actually free we just price it into the products. Someone's paying for it, and it's not us.",
    },
    {
      name: '10-year warranty',
      imageSrc:
        'https://tailwindui.com/img/ecommerce/icons/icon-warranty-simple.svg',
      description:
        "If it breaks in the first 10 years we'll replace it. After that you're on your own though.",
    },
    {
      name: 'Exchanges',
      imageSrc:
        'https://tailwindui.com/img/ecommerce/icons/icon-exchange-simple.svg',
      description:
        "If you don't like it, trade it to one of your friends for something of theirs. Don't send it here though.",
    },
  ]
  return (
    <div className="h-screen w-screen">
      <Header title={title} description={description} />

      <main>
        <Hero />

        <div className="bg-white">
          <div className="max-w-7xl mx-auto py-24 sm:px-2 sm:py-32 lg:px-4">
            <div className="max-w-2xl mx-auto px-4 lg:max-w-none">
              <div className="max-w-3xl">
                <h2 className="text-3xl font-medium uppercase font-display tracking-tight text-gray-700">
                  What is Bluegrass Trading Co?
                </h2>
                <p className="mt-4 text-xl text-gray-500 leading-loose">
                  Bluegrass Trading Co is an online store dedicated to providing
                  exclusive, quality, merchandise for bluegrass enthusiasts. Our
                  flagship and first product, Banjo All-Star trading cards is
                  currently in production and will be available to ship in April
                  2022.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-100">
          <Artists />
        </div>
        <NewsletterSignup />
      </main>
      <Footer />
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
