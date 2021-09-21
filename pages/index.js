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
            Yep, that&apos;s right, trading cards! I am currently working with
            an artist from Dublin on our first series. We are creating the
            world&apos;s first bluegrass related, high-quality, trading cards.
            These aren&apos;t photo cards, they will be works of art, hand
            painted by our selected artist. The first series entitled
            &quot;Banjo All-Star Series 1&quot; will be devoted to highlighting
            your favorite banjo pickers. Each pack will include about 8-12
            randomly selected cards PLUS 1 special, also randomly selected,
            commemorative card. The goal is to not only promote the obvious
            choices (e.g. Earl Scruggs, J.D., etc) but more, less obvious
            choices, which will remain a surprise. Sign up below to be notified
            when these will be available for pre-order.
          </div>
          <div>
            <EmailSignup />
          </div>
        </div>
        <div className="relative mt-6 sm:mt-0 w-60 sm:w-2/5 mx-auto">
          <Image
            src="/poster.png"
            alt="Bluegrass Banjo All-Star Series 1"
            width="450"
            height="675"
          />
        </div>
      </main>
    </div>
  )
}
