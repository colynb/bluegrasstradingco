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
    <div className="relative bg-[#04403F]">
      <div className="">
        <div className="relative r sm:px-12 sm:py-20">
          {submitError && (
            <div className="text-red-500">
              There was a problem submitting your email.
            </div>
          )}
          {errors.email && (
            <div className="text-red-500">Email is required</div>
          )}

          <div className="relative">
            <div className="sm:text-center text-gray-200">
              <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
                Stay in touch!
              </h2>
              <div className="mt-6 text-lg space-y-2">
                <p>
                  My email subscribers are the first to know about offers,
                  giveaways and other announcements. Get on the list!
                </p>
                <p className="text-sm opacity-75">
                  (I promise to not bother you too much and I definitely will
                  not give anyone else your email address)
                </p>
              </div>
            </div>

            {submitSuccess === true && (
              <div className="mt-8 sm:mx-auto sm:max-w-lg sm:flex bg-[#075857] p-8 rounded-lg text-white text-center">
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

            {submitSuccess === null && (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="mt-8 sm:mx-auto sm:max-w-lg sm:flex bg-[#075857] p-8 rounded-lg"
              >
                <div className="min-w-0 flex-1">
                  <label htmlFor="cta-email" className="sr-only">
                    Email address
                  </label>
                  <input
                    defaultValue=""
                    {...register('email', {
                      required: true,
                    })}
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="w-full px-5 py-3 placeholder-gray-500 focus:ring-gray-500 focus:border-gray-500 sm:max-w-xs border-gray-300 rounded-md"
                    placeholder="Enter your email"
                    id="cta-email"
                  />
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-3">
                  <button
                    type="submit"
                    className="block w-full rounded-md border border-transparent px-5 py-3 bg-[#04403F]  text-base font-medium text-white shadow hover:bg-[#178a88] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#04403F]  sm:px-10"
                  >
                    Notify me
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
