import Head from 'next/head'
import Image from 'next/image'
import EmailSignup from '../components/email-signup'

export default function Home() {
  return (
    <div className="h-screen w-screen">
      <Head>
        <title>Bluegrass Trading Co.</title>
        <meta name="description" content="Bluegrass Trading Co. - Est. 2021" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="header"></div>
      <header className="px-6 sm:px-0 sm:mb-24 flex items-center justify-center pt-12">
        <div className="relative max-w-4xl h-20 sm:h-40 w-full">
          <Image src="/logo.svg" alt="Bluegrass Trading Co." layout="fill" />
        </div>
      </header>

      <main className="p-8 sm:p-0 max-w-6xl mx-auto sm:flex justify-between sm:space-x-24 leading-loose text-lg text-gray-700">
        <div className="space-y-6 sm:w-3/5">
          <div className="mb-6">
            <h1 className="font-extrabold text-3xl mb-2">
              Bluegrass Trading Cards
            </h1>
            <h2 className="text-xl font-semibold opacity-60">
              Coming Spring or Summer 2022!
            </h2>
          </div>
          <div>
            Each pack of Series One Bluegrass Trading Co Banjo All-Star Trading
            Cards contains 12 randomly sorted collectible cards and 1
            commemorative card. The series includes Earl Scruggs, J.D. Crowe,
            Ralph Stanley, Bill Keith, and 20 other surprises. There are a total
            of 24 unique cards in the series. Collect them all! Pre-ordering
            will be available very soon! Get on the list to be the first to get
            notified!
          </div>
          <div>
            <EmailSignup />
          </div>
        </div>
        <div className="relative mt-6 sm:mt-0 w-60 sm:w-2/5 mx-auto">
          <Image
            src="/poster2.png"
            alt="Bluegrass Banjo All-Star Series 1"
            width="450"
            height="495"
          />
        </div>
      </main>
    </div>
  )
}
