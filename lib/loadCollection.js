import { storefront } from '../utils'

const gql = String.raw

const collectionQuery = gql`
  query CollectionQuery($handle: String!) {
    collection(handle: $handle) {
      image {
        id
      }
      title
      description
      products(first: 12) {
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
`

export async function loadCollection(handle, limit = '4') {
  const collection = await storefront(collectionQuery, {
    handle,
    limit,
  })
  return collection.data.collection
}
