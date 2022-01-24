const API_URL =
  'https://bluegrass-trading-company.myshopify.com/api/2021-10/graphql.json'

const ACCESS_TOKEN = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN

export const storefront = async (query, variables = {}) => {
  const body = JSON.stringify({ query: query.trim(), variables })

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': ACCESS_TOKEN,
      },
      body,
    })
    return response.json()
  } catch (e) {
    console.log(e.message)
  }
}
