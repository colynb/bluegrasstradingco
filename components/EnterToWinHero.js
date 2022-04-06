import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Modal from './Modal'
function sliceIntoChunks(arr, chunkSize) {
  const res = []
  //   arr.sort(() => Math.random() - 0.5)
  for (let i = 0; i < arr.length; i += chunkSize) {
    const chunk = arr.slice(i, i + chunkSize)
    res.push(chunk)
  }
  return res
}

/* This example requires Tailwind CSS v2.0+ */
export default function Hero({ featured }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const [submitError, setSubmitError] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(null)
  const [verifyModal, setVerifyModal] = useState(false)
  const onSubmit = (data) => subscribe(data)

  const subscribe = async ({ email, first_name }) => {
    try {
      const data = await fetch(
        `/api/contest?email=${encodeURIComponent(
          email
        )}&first_name=${encodeURIComponent(first_name)}`
      ).then((resp) => resp.json())
      setSubmitSuccess(true)
      setVerifyModal(true)
    } catch (e) {
      setSubmitError(true)
      setVerifyModal(false)
    }
  }

  const featuredChunks = sliceIntoChunks(featured, 10)

  return (
    <div className="relative overflow-hidden bg-gray-100">
      <div className="pt-8 sm:pt-24 sm:pb-40 md:pb-80 lg:pt-40 lg:pb-48">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="font-display text-5xl font-semibold uppercase tracking-tight text-gray-900">
              <span className="bg-gradient-to-r text-amber-500">
                Enter to Win the Complete Set!
              </span>
            </h1>
            <div className="mt-4 text-xl text-gray-500">
              We are giving away the{' '}
              <a href="https://shop.bluegrasstradingco.com/products/12-pack-of-banjo-all-star-premium-trading-cards">
                Complete Set of Banjo All-Star Premium Trading Cards
              </a>{' '}
              to 3 lucky newsletter subscribers. Each set is 12 packs and a
              collectible display box. Winners will be announced during a live
              stream around the start of May. (No purchase necessary)
            </div>

            <div className="mt-4">
              <button
                type="submit"
                className="vrlps-trigger inline-block h-16 w-60 rounded-md border border-r border-b border-transparent border-r-amber-400 border-b-amber-400 border-t-amber-100 border-l-amber-100 bg-amber-300 text-center font-display text-xl font-medium text-gray-600  hover:bg-amber-400"
              >
                Get Started
              </button>
            </div>
          </div>
          <div>
            <div className="mt-10 ">
              {/* Decorative image grid */}
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
              >
                <div className="absolute hidden rotate-6 transform p-2 opacity-75 sm:left-1/2 md:-top-12 md:block">
                  <div className="flex items-center space-x-1">
                    {featuredChunks.map((chunk, i) => {
                      return (
                        <div
                          key={`featured_container_${i}`}
                          className="grid gap-1"
                        >
                          {chunk.map((feature) => {
                            return (
                              <div
                                key={`featured_${feature.slug.current}`}
                                className="relative h-64 w-44 overflow-hidden sm:opacity-0 lg:opacity-100"
                              >
                                <div className="absolute bg-gray-600 bg-opacity-40 px-4 font-display text-white opacity-100">
                                  {feature.name}
                                </div>
                                <img
                                  src={feature.imageUrl}
                                  alt={feature.name}
                                  className="h-full w-full object-cover object-center"
                                  width="362"
                                  height="550"
                                />
                              </div>
                            )
                          })}
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
