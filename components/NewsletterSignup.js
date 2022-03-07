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
          <form className="sm:flex">
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
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
              <button
                type="submit"
                className="w-full flex items-center justify-center py-3 px-5 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Notify me
              </button>
            </div>
          </form>
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
