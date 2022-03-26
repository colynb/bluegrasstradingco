import { getCookie, removeCookies } from 'cookies-next'
import { useEffect, useState } from 'react'
import Footer from './Footer'
import Header from './Header'

export default function Layout({ children, ...rest }) {
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
      {showSourceBanner && (
        <div className="bg-gray-800 p-8 text-center text-2xl font-bold text-amber-300">
          <div className="mx-auto max-w-3xl">
            <p>Thank you for stopping by!</p>{' '}
            <p className="font-normal text-white">
              We see you were sent here by way of a QR code. Use this coupon
              code{' '}
              <a
                href={`https://shop.bluegrasstradingco.com/discount/${showSourceBanner}`}
              >
                {showSourceBanner}
              </a>{' '}
              for 10% OFF your next order! (One use per customer)
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
