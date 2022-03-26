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
              stream around the start of May. (No purchase necessary) Subscribe
              to our newsletter now and also get a 20% OFF coupon code delivered
              to your inbox. If you&apos;re already a subscriber, you are
              already entered to win but still enter to receive your coupon
              code.
            </div>

            <div className="mt-4">
              {submitSuccess === null && (
                <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
                  <label htmlFor="first_name" className="sr-only">
                    First Name
                  </label>
                  <input
                    {...register('first_name')}
                    type="first_name"
                    autoComplete="first_name"
                    required
                    className="mb-3 w-full max-w-none flex-1 rounded-md border border-gray-300 px-5 py-3 text-2xl placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                    placeholder="First name"
                  />
                  <label htmlFor="email" className="sr-only">
                    Email address
                  </label>
                  <input
                    {...register('email')}
                    type="email"
                    autoComplete="email"
                    required
                    className="w-full max-w-none flex-1 rounded-md border border-gray-300 px-5 py-3 text-2xl placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                    placeholder="Email"
                  />
                  <div className="mt-3">
                    <button
                      type="submit"
                      className="inline-block h-16 w-60 rounded-md border border-r border-b border-transparent border-r-amber-400 border-b-amber-400 border-t-amber-100 border-l-amber-100 bg-amber-300 text-center font-display text-xl font-medium uppercase text-gray-600  hover:bg-amber-400"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              )}

              {submitError && (
                <div className="text-red-500">
                  There was a problem submitting your email.
                </div>
              )}
              {errors.email && (
                <div className="text-red-500">Email is required</div>
              )}
              {submitSuccess === true && (
                <div className="rounded-lg p-8 text-center text-green-600 sm:mx-auto sm:flex  sm:max-w-lg">
                  <div>
                    Thanks! Please check your email.{' '}
                    <button
                      className="font-semibold"
                      onClick={() => setSubmitSuccess(null)}
                    >
                      Send another.
                    </button>
                  </div>
                  <Modal open={verifyModal} setOpen={setVerifyModal} />
                </div>
              )}
              <p className="mt-3 text-sm text-gray-500">
                We care about the protection of your data. Read our{' '}
                <a
                  href="https://shop.bluegrasstradingco.com/policies/privacy-policy"
                  className="font-medium underline"
                >
                  Privacy Policy.
                </a>
              </p>
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
