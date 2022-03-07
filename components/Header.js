import Head from 'next/head'
import Image from 'next/image'

export default function Header({ title, description = '' }) {
  const fulldescription = `Bluegrass Trading Co is an online store dedicated to providing exclusive bluegrass related merchandise. Our flagship and first product, Banjo All-Star trading cards is currently in production and will be available to ship in Spring 2022. Thank you to all who have expressed interest and enthusiasm in this project. Made with ♥ by Colyn Brown in Friendsville, TN ${description}`
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={fulldescription} />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content={`${title}`} />
        <meta property="og:description" content={fulldescription} />
        <meta
          property="og:image"
          content={
            'https://cdn.shopify.com/s/files/1/0601/1800/7990/products/poster_1080x.png?v=1642553130'
          }
        />
        <meta property="og:url" content="https://www.bluegrasstradingco.com/" />
      </Head>
      <header className="px-6 sm:px-0 flex items-center py-4 md:py-8 justify-center bg-white border-t-4 border-yellow-200">
        <div className="flex items-center justify-center md:space-x-8">
          <div className="space-x-8 hidden md:block">
            <a href="">Link1</a>
            <a href="">Link2</a>
          </div>
          <div className="relative max-w-4xl md:h-28 flex items-center p-4">
            <Image
              src="/updated-logo.png"
              alt="Bluegrass Trading Co."
              width="300"
              height="150"
            />
          </div>
          <div className="space-x-8 hidden md:block">
            <a href="">Link1</a>
            <a href="">Link2</a>
          </div>
        </div>
      </header>
    </div>
  )
}
