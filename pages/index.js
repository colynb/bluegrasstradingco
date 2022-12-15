import Image from "next/image";
import NewsletterSignup from "../components/NewsletterSignup";

import { storefront } from "../utils";
import Hero from "../components/Hero";
import Artists from "../components/Artists";
import client from "../client";
import Layout from "../components/Layout";
import FeaturedProducts from "../components/FeaturedProducts";
import { loadCollection } from "../lib/loadCollection";

export default function Home({
  description,
  title,
  artists,
  featured,
  collection,
}) {
  const metaData = {
    title,
    description,
  };

  return (
    <Layout metaData={metaData}>
      <main>
        <Hero featured={featured} />
        <div className="bg-gray-50">
          <div className="mx-auto max-w-7xl py-12 sm:px-2 sm:py-32 lg:px-4">
            <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
              <div className="md:flex md:space-x-6">
                <div className=" relative mb-4 h-72  w-full overflow-hidden rounded-xl shadow-lg md:w-80">
                  <Image
                    src="/colyn.jpg"
                    layout="fill"
                    className="h-72 w-80 object-cover object-center "
                    alt="Colyn Brown, Founder of Bluegrass Trading Co, LLC"
                  />
                </div>
                <div className="flex-1 text-gray-700">
                  <h2 className="font-display text-3xl font-medium uppercase tracking-tight text-gray-700">
                    What is Bluegrass Trading Co?
                  </h2>
                  <p className="mt-4 text-xl leading-loose text-gray-500">
                    Founded by Colyn Brown in Sept 2021, Bluegrass Trading Co is
                    an online store dedicated to providing exclusive, quality,
                    merchandise for bluegrass enthusiasts. Our flagship product,{" "}
                    <span className="font-semibold">
                      Banjo All-Star Premium Trading Cards
                    </span>{" "}
                    is currently in production and Series 1 will begin shipping
                    in April 2022!
                  </p>
                  <h3 className="mt-3 mb-4 border-b font-display text-xl font-medium uppercase">
                    Featured in the news!
                  </h3>
                  <div className="space-y-3 text-lg">
                    <p>
                      <a href="https://bluegrasstoday.com/banjo-all-stars-trading-cards-from-bluegrass-trading-co/">
                        Bluegrass Today - Banjo All Stars trading cards from
                        Bluegrass Trading Co.
                      </a>
                    </p>
                    <p>
                      <a href="https://www.thedailytimes.com/community/local-businessman-creates-banjo-player-trading-cards/article_72915791-1953-57fd-be7a-2772d7abf131.html">
                        The Daily Times of Blount County - Local businessman
                        creates banjo player trading cards
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white">
          <Artists artists={artists} />
        </div>
        <div className="bg-gray-100">
          <div className="mx-auto max-w-7xl py-24 px-4 sm:px-6 lg:flex lg:items-center lg:space-x-8 lg:py-32 lg:px-8">
            <NewsletterSignup />
          </div>
        </div>
      </main>
    </Layout>
  );
}

export async function getStaticProps() {
  const artists = await client.fetch(
    `*[_type == "artist"]| order(name){ _id, name, bio, players, imageUrl, slug }`
  );

  const featured = await client.fetch(
    `*[_type == "player" && limited == true]|order(series_number){name, series_number, slug, imageUrl}`
  );
  return {
    props: {
      featured,
      artists,
    },
  };
}

const gql = String.raw;

const productQuery = gql`
  query SingleProduct($handle: String!) {
    product(handle: $handle) {
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
`;

const collectionQuery = gql`
  query CollectionQuery($handle: String!) {
    collection(handle: $handle) {
      image {
        id
      }
      description
      products(first: 4) {
        edges {
          node {
            id
            onlineStoreUrl
            handle
            title
            vendor
            images(first: 1) {
              edges {
                node {
                  transformedSrc
                }
              }
            }
            priceRange {
              minVariantPrice {
                amount
              }
            }
          }
        }
      }
    }
  }
`;
