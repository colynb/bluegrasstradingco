const handler = async (req, res) => {
  try {
    const email = req.query.email
    const first_name = req.query.first_name
    const fields = { new_customer_coupon_code: 'ENTERTOWIN20' }
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
    return res.status(500).json({ error: error.message || error.toString() })
  }
}

export default handler
