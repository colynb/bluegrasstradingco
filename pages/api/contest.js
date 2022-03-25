import Shopify, { DataType } from '@shopify/shopify-api'

const generateRandomString = (length = 6) =>
  Math.random().toString(20).substr(2, length).toUpperCase()

const handler = async (req, res) => {
  try {
    const client = new Shopify.Clients.Rest(
      'bluegrass-trading-company.myshopify.com',
      process.env.SHOPIFY_ADMIN_ACCESS_TOKEN
    )
    const code = `CUST${generateRandomString()}`
    const priceRule = await client.post({
      path: 'price_rules',
      data: {
        price_rule: {
          title: code,
          target_type: 'line_item',
          target_selection: 'all',
          allocation_method: 'across',
          value_type: 'percentage',
          value: '-20.0',
          customer_selection: 'all',
          once_per_customer: true,
          starts_at: new Date(),
        },
      },
      type: DataType.JSON,
    })

    const discount = await client.post({
      path: `price_rules/${priceRule.body.price_rule.id}/discount_codes`,
      data: { discount_code: { code: code } },
      type: DataType.JSON,
    })

    const email = req.query.email
    const first_name = req.query.first_name
    const fields = { new_customer_coupon_code: code }
    const API_KEY = process.env.CONVERTKIT_API_KEY
    const API_URL = process.env.CONVERTKIT_API_URL

    // Send request to ConvertKit
    const data = {
      email,
      first_name,
      fields,
      api_key: API_KEY,
    }

    const response = await fetch(`${API_URL}forms/3112905/subscribe`, {
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })

    // Any error from CK = return custom message
    if (response.status >= 400) {
      return res.status(400).json({
        error: `There was an error subscribing to the list.`,
      })
    }

    return res.status(201).json({ error: '' })
  } catch (error) {
    console.log({ error })
    return res.status(500).json({ error: error.message || error.toString() })
  }
}

export default handler
