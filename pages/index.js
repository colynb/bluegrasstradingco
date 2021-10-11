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
        <div className="relative max-w-4xl h-20 sm:h-32 w-full">
          <Image src="/logo.svg" alt="Bluegrass Trading Co." layout="fill" />
        </div>
      </header>

      <main className="p-8 sm:p-0 max-w-6xl mx-auto sm:flex justify-between sm:space-x-24 leading-loose text-lg text-gray-700">
        <div className="space-y-6 sm:w-3/5">
          <div className="mb-6">
            <h1 className="font-bold font-display text-3xl mb-2">
              Bluegrass Trading Cards
            </h1>
            <h2 className="text-lg font-semibold opacity-60">
              Coming Spring 2022!
            </h2>
          </div>
          <div>
            Each pack of Series One Bluegrass Trading Co Banjo All-Star Trading
            Cards contains 5 randomly sorted collectible cards including 1
            commemorative card. The series includes Earl Scruggs, J.D. Crowe,
            Ralph Stanley, Bill Keith, and 20 others. There are a total of 25
            unique cards in the series. Collect them all! Pre-ordering will be
            available very soon! Get on the list to be the first to get
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
      <div className="p-4 lg:p-12">
        <div className="max-w-6xl mx-auto space-y-4 ">
          <h2 className="font-bold font-display uppercase text-3xl text-[#04403F]">
            ABOUT ME
          </h2>
          <div className="float-left mr-6 mb-6 rounded-xl overflow-hidden w-40 h-40">
            <Image
              src="/email.jpeg"
              alt="Colyn Brown"
              width="250"
              height="283"
              className="object-fill"
            />
          </div>
          <p>
            Hi, I’m Colyn Brown. I started Bluegrass Trading Company as a way to
            offer goods and services to bluegrass enthusiasts like myself,
            starting with trading cards. Though I’ve only been playing banjo
            since 2017, I’ve been involved in bluegrass one way or the other my
            whole life. My dad, Ken Brown, was an award winning banjo player
            early on in the mid to late 60s Northeast region of the country,
            hanging out and picking with young guys like Pete Wernick, Bill
            Keith. I spent a lot of time growing up listening to bluegrass.
          </p>
          <p>
            Why trading cards you ask? Early in 2021 the thought just hit me
            that these should exist so I asked around to see if I could find
            them. The overwhelming response online was that I should make these.
            I wasn&apos;t so sure I could do it. I just knew that I wanted to
            have the cards exist so that I could have some. They didn’t exist,
            at least not in the way I imagined, so the only solution was for me
            to take a stab at it.
          </p>

          <p>
            Fast forward a few months of thinking about how to do it and how I
            would market them, I found an artist, Georgina Flood, who was
            thrilled to partner with me on the first few cards. Working with her
            inspired me to reach out to other artists and I am happy to now be
            working with several different artists each with their own unique
            style.
          </p>

          <p>
            Thank you to everyone who has expressed interest in this project. I
            am honored to be able to do something like this and produce them for
            you all. I am accepting pre-orders because these are not cheap to
            make. Your pre-orders will allow me to offset some of the cost of
            the paintings as well as the cost of print production. It also gives
            me a better idea of how many packs I should be producing. I am
            grateful for any support you can provide. Thank you!
          </p>
        </div>
      </div>
    </div>
  )
}
