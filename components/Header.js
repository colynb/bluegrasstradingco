import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Header({ metaData }) {
  const router = useRouter();

  const { title, description, image } = metaData;

  const fullDescription = ` ${description} Bluegrass Trading Co is an online store dedicated to providing exclusive bluegrass related merchandise. Our flagship and first product, Banjo All-Star trading cards is currently in production and will be available to ship in Spring 2022. Thank you to all who have expressed interest and enthusiasm in this project. Made with ♥ by Colyn Brown in Friendsville, TN`;
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
            "https://cdn.shopify.com/s/files/1/0601/1800/7990/products/poster_1080x.png?v=1642553130"
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

      <header className="flex items-center justify-center border-t-8 border-yellow-300 bg-white px-6 py-4 sm:px-0 md:py-8">
        <div className="flex items-center justify-center font-display uppercase">
          <div className="hidden items-center md:flex">
            <Link href="/">
              <a className="block w-20 text-center">Home</a>
            </Link>

            <a
              href="mailto:colyn@bluegrasstradingco.com"
              className="block w-20 text-center"
            >
              Contact
            </a>
          </div>
          <div className="relative mx-8 flex h-16 max-w-4xl items-center justify-center p-4 md:h-24">
            <img
              src="/updated-logo2.png"
              alt="Bluegrass Trading Co."
              width="250"
              height="110"
              className="h-16 w-40 max-w-none md:h-28 md:w-60"
            />
          </div>

          <div className="hidden items-center md:flex">
            <Link href="/faq">
              <a className="block w-20 text-center">FAQ</a>
            </Link>

            <Link href="/blog">
              <a className="block w-20 text-center">News</a>
            </Link>
          </div>
        </div>
      </header>
      <div className="mb-2 flex items-center justify-center font-display text-sm uppercase md:hidden md:pb-6">
        <Link href="/">
          <a className="block w-20 text-center">Home</a>
        </Link>

        <a
          href="mailto:colyn@bluegrasstradingco.com"
          className="block w-20 text-center"
        >
          Contact
        </a>
        <Link href="/blog">
          <a className="block w-20 text-center">News</a>
        </Link>

        <Link href="/faq">
          <a className="block w-20 text-center">FAQ</a>
        </Link>
      </div>
    </div>
  );
}
