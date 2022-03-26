import { setCookies } from 'cookies-next'
const data = require('../../../data')

export default function handler(req, res) {
  const { code } = req.query

  const redirect = data.find((p) => p.code === code)

  if (redirect) {
    setCookies('btc_source', redirect.coupon, {
      req,
      res,
      maxAge: 60 * 60 * 24,
    })

    return res.redirect(redirect.path)
  }

  return res.redirect(`/`)
}
