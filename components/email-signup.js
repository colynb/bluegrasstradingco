import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Modal from './Modal'

export default function EmailSignup() {
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
      console.log({ data })
      setSubmitSuccess(true)
      setVerifyModal(true)
    } catch (e) {
      setSubmitError(true)
      setVerifyModal(false)
    }
  }

  return (
    <div className="rounded-lg bg-yellow-200 p-6 leading-normal">
      <p className="text-xl font-medium text-gray-600 sm:block sm:text-xl mb-2">
        Sign up for our pre-order waiting list.
      </p>
      <p className="opacity-60">
        Be one of the first to be notified when these will be ready for
        pre-order and also receive updates on the progress of each of the cards.
      </p>
      {submitError && (
        <div className="text-red-500">
          There was a problem submitting your email.
        </div>
      )}
      {errors.email && <div className="text-red-500">Email is required</div>}
      {submitSuccess === true && (
        <div>
          <div className="pt-4">
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
        <form className="mt-2 sm:flex" onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="email-address" className="sr-only">
            Email address
          </label>
          <input
            defaultValue=""
            {...register('email', {
              required: true,
            })}
            id="email-address"
            name="email"
            type="email"
            autoComplete="email"
            className="w-full px-5 py-3 placeholder-gray-500 focus:ring-gray-500 focus:border-gray-500 sm:max-w-xs border-gray-300 rounded-md"
            placeholder="Enter your email"
          />

          <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
            <button
              type="submit"
              className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              Notify me
            </button>
          </div>
        </form>
      )}
    </div>
  )
}
