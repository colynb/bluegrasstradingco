import { getCookie, removeCookies } from 'cookies-next'
import { useEffect, useState } from 'react'
import Footer from './Footer'
import Header from './Header'
import Link from 'next/link'

const messages = require('../data/codeMessages').default

export default function Layout({
  children,
  options = { giveawayBanner: false },
  ...rest
}) {
  const [showSourceBanner, setShowSourceBanner] = useState(null)

  useEffect(() => {
    const source = getCookie('btc_source')

    if (source) {
      setShowSourceBanner(source)
      removeCookies('btc_source')
    }
  }, [])

  return (
    <div className="flex h-screen flex-col justify-between">
      {options.giveawayBanner && (
        <Link href="/giveaway">
          <a className="block bg-amber-700 p-4 text-white">
            <div className="mx-auto max-w-5xl text-center font-display text-2xl uppercase">
              <span className="font-bold">ENTER TO WIN</span>{' '}
              <span className="font-thin opacity-80">
                A 12-pack Complete Set of Banjo All-Star Premium Trading Cards
              </span>
            </div>
          </a>
        </Link>
      )}
      {showSourceBanner && (
        <div className="bg-gray-800 p-8 text-center text-2xl font-bold text-amber-300">
          <div className="mx-auto max-w-3xl">
            <p>Thank you for stopping by!</p>{' '}
            <p className="font-normal text-white">
              {messages[showSourceBanner]?.message ||
                `Thank you for stopping by! Use this coupon
              code`}
            </p>
          </div>
        </div>
      )}
      <Header {...rest} />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  )
}
