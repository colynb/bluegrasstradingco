import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Header({ metaData }) {
  const router = useRouter()

  const { title, description, image } = metaData

  const fullDescription = ` ${description} Bluegrass Trading Co is an online store dedicated to providing exclusive bluegrass related merchandise. Our flagship and first product, Banjo All-Star trading cards is currently in production and will be available to ship in Spring 2022. Thank you to all who have expressed interest and enthusiasm in this project. Made with ♥ by Colyn Brown in Friendsville, TN`
  return (
    <div>
      <Head>
        <title>{title} - Bluegrass Trading Co</title>
        <meta name="description" content={fullDescription} />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="canonical"
          href={`https://www.bluegrasstradingco.com${router.asPath}`}
        />
        <meta property="og:site_name" content="Bluegrass Trading Co " />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`${title}`} />
        <meta property="og:description" content={fullDescription} />
        <meta
          property="og:image"
          content={
            `${image}` ||
            'https://cdn.shopify.com/s/files/1/0601/1800/7990/products/poster_1080x.png?v=1642553130'
          }
        />
        <meta
          property="og:url"
          content={`https://www.bluegrasstradingco.com${router.asPath}`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={fullDescription} />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>
      <header className="px-6 sm:px-0 flex items-center py-4 md:py-8 justify-center bg-white border-t-8 border-yellow-300">
        <div className="flex items-center justify-center font-display uppercase">
          <div className="hidden md:flex items-center">
            <Link href="/">
              <a className="w-20 block text-center">Home</a>
            </Link>

            <a
              href="https://shop.bluegrasstradingco.com/pages/contact"
              className="w-20 block text-center"
            >
              Contact
            </a>
          </div>
          <div className="relative max-w-4xl h-16 md:h-24 flex items-center justify-center p-4 mx-8">
            <img
              src="/updated-logo2.png"
              alt="Bluegrass Trading Co."
              width="250"
              height="110"
              className="w-40 h-16 md:w-60 md:h-28 max-w-none"
            />
          </div>

          <div className="hidden md:flex items-center">
            <Link href="/faq">
              <a className="w-20 block text-center">FAQ</a>
            </Link>

            <Link href="/blog">
              <a className="w-20 block text-center">News</a>
            </Link>
          </div>
        </div>
      </header>
      <div className="flex md:hidden items-center font-display justify-center mb-2 md:pb-6 uppercase text-sm">
        <Link href="/">
          <a className="w-20 block text-center">Home</a>
        </Link>

        <a
          href="https://shop.bluegrasstradingco.com/pages/contact"
          className="w-20 block text-center"
        >
          Contact
        </a>
        <Link href="/blog">
          <a className="w-20 block text-center">News</a>
        </Link>

        <Link href="/faq">
          <a className="w-20 block text-center">FAQ</a>
        </Link>
      </div>
    </div>
  )
}
