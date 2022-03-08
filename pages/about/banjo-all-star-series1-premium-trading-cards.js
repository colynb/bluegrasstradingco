import Image from 'next/image'

import Link from 'next/link'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import PlayerCard from '../../components/PlayerCard'

export default function TradingCards({ players }) {
  return (
    <div className="">
      <Header title="Bluegrass Trading Co Banjo All-Star Artists" />
      <div className="bg-gray-100">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static py-12">
          <h1 className="text-2xl font-display uppercase font-semibold tracking-tight text-gray-900 sm:text-5xl">
            <span className="text-gray-700">
              Banjo All-Star<span className="text-lg align-top">TM</span>
            </span>
            <br />
            <span className="text-yellow-400 bg-gradient-to-r from-yellow-300 to-yellow-500 text-transparent bg-clip-text">
              {' '}
              Premium Trading Cards
            </span>
          </h1>
          <div className="mt-4 text-xl text-gray-500">
            <span>
              Introducing the world&apos;s first premium trading cards for the
              bluegrass enthusiast. With a total of 42 featured banjo greats,
              completed by 10 equally great artists, each pack of Banjo All-Star
              Premium Trading Cards includes 8 players, including a foil
              accented limited edition card. Yes, every pack comes with a
              limited edition card! Collect them all!
            </span>{' '}
            <div className="font-bold">Series 1 is shipping in April!</div>
          </div>
          <a
            href="https://shop.bluegrasstradingco.com/products/bluegrass-trading-co-banjo-all-star-series-one-pack"
            className="mt-4 inline-block border-r border-b border-r-yellow-400 border-b-yellow-400 border-t-yellow-100 border-l-yellow-100 font-display text-gray-600 text-center bg-yellow-300 border border-transparent rounded-md py-3 px-8 font-medium  hover:bg-yellow-400"
          >
            ORDER NOW
          </a>
        </div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static py-12">
        <h3 className="text-2xl font-display font-medium uppercase tracking-tight mb-4">
          Completed Works
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
          {players.map((player) => {
            return (
              <div key={player.name} className="h-72">
                <PlayerCard player={player} />
              </div>
            )
          })}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export async function getStaticProps({ params }) {
  const data = require('../../data')
  const players = data.players
  return {
    props: {
      players,
    },
  }
}
