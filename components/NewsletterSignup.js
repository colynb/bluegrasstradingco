import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Modal from './Modal'
export default function NewsletterSignup() {
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

  const subscribe = async ({ email }) => {
    try {
      const data = await fetch(`/api/subscribe?email=${email}`).then((resp) =>
        resp.json()
      )
      setSubmitSuccess(true)
      setVerifyModal(true)
    } catch (e) {
      setSubmitError(true)
      setVerifyModal(false)
    }
  }

  return (
    <>
      <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:py-32 lg:px-8 lg:flex lg:items-center">
        <div className="lg:w-0 lg:flex-1">
          <h2 className="text-3xl font-medium uppercase font-display text-gray-900">
            Sign up for our newsletter
          </h2>
          <p className="mt-3 max-w-3xl text-lg text-gray-500">
            Subscribe to our newsletter or join a community on{' '}
            <a
              href="https://www.facebook.com/bluegrasstradingco"
              className="text-yellow-600 underline"
            >
              Facebook
            </a>{' '}
            or{' '}
            <a
              href="https://www.instagram.com/realbluegrasstradingco/"
              className="text-yellow-600 underline"
            >
              Instagram
            </a>
            , and get access to project updates and special offers and be the
            first to know about new and upcoming products!
          </p>
        </div>
        <div className="mt-8 lg:mt-0 lg:ml-8">
          {submitSuccess === null && (
            <form className="sm:flex" onSubmit={handleSubmit(onSubmit)}>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email-address"
                type="email"
                autoComplete="email"
                required
                className="w-full px-5 py-3 border border-gray-300 shadow-sm placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs rounded-md"
                placeholder="Enter your email"
              />
              <div className="mt-3  sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                <button
                  type="submit"
                  className="inline-block border-r border-b border-r-yellow-400 border-b-yellow-400 border-t-yellow-100 border-l-yellow-100 font-display text-gray-600 text-center bg-yellow-300 border border-transparent rounded-md py-3 px-8 font-medium  hover:bg-yellow-400"
                >
                  Notify me
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
            <div className="sm:mx-auto sm:max-w-lg sm:flex text-green-600 p-8 rounded-lg  text-center">
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
    </>
  )
}
