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
            <div className="sm:text-center text-gray-200 mx-auto max-w-2xl">
              <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
                Join our growing community!
              </h2>
              <div className="mt-6 text-lg space-y-2">
                <p>
                  Subscribe to our newsletter or join a community on Facebook or
                  Instagram, and get access to project updates and special
                  offers and be the first to know about new and upcoming
                  products!
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
                    Subscribe
                  </button>
                </div>
              </form>
            )}
            <div className="mx-auto max-w-2xl mt-12 flex items-center justify-center space-x-4">
              <a href="https://www.facebook.com/bluegrasstradingco">
                <svg
                  width="50px"
                  height="50px"
                  viewBox="0 0 448 448"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <g
                    id="Page-1"
                    stroke="none"
                    strokeWidth={1}
                    fill="none"
                    fillRule="evenodd"
                  >
                    <g
                      id="facebook-square-brands"
                      fill="#ffffff"
                      fillRule="nonzero"
                    >
                      <path
                        d="M400,-7.10542736e-15 L48,-7.10542736e-15 C21.490332,-7.10542736e-15 0,21.490332 0,48 L0,400 C0,426.509668 21.490332,448 48,448 L185.25,448 L185.25,295.69 L122.25,295.69 L122.25,224 L185.25,224 L185.25,169.36 C185.25,107.21 222.25,72.88 278.92,72.88 C306.06,72.88 334.44,77.72 334.44,77.72 L334.44,138.72 L303.17,138.72 C272.36,138.72 262.75,157.84 262.75,177.45 L262.75,224 L331.53,224 L320.53,295.69 L262.75,295.69 L262.75,448 L400,448 C426.509668,448 448,426.509668 448,400 L448,48 C448,21.490332 426.509668,-7.10542736e-15 400,-7.10542736e-15 L400,-7.10542736e-15 Z"
                        id="Path"
                      />
                    </g>
                  </g>
                </svg>
              </a>

              <a href="https://www.instagram.com/realbluegrasstradingco/">
                <svg
                  width="50px"
                  height="50px"
                  viewBox="0 0 450 449"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <g
                    id="Page-1"
                    stroke="none"
                    strokeWidth={1}
                    fill="none"
                    fillRule="evenodd"
                  >
                    <g id="instagram-brands" fill="#ffffff" fillRule="nonzero">
                      <path
                        d="M225.1,110 C161.5,110 110.2,161.3 110.2,224.9 C110.2,288.5 161.5,339.8 225.1,339.8 C288.7,339.8 340,288.5 340,224.9 C340,161.3 288.7,110 225.1,110 Z M225.1,299.6 C184,299.6 150.4,266.1 150.4,224.9 C150.4,183.7 183.9,150.2 225.1,150.2 C266.3,150.2 299.8,183.7 299.8,224.9 C299.8,266.1 266.2,299.6 225.1,299.6 L225.1,299.6 Z M371.5,105.3 C371.5,120.2 359.5,132.1 344.7,132.1 C329.8,132.1 317.9,120.1 317.9,105.3 C317.9,90.5 329.9,78.5 344.7,78.5 C359.5,78.5 371.5,90.5 371.5,105.3 Z M447.6,132.5 C445.9,96.6 437.7,64.8 411.4,38.6 C385.2,12.4 353.4,4.2 317.5,2.4 C280.5,0.3 169.6,0.3 132.6,2.4 C96.8,4.1 65,12.3 38.7,38.5 C12.4,64.7 4.3,96.5 2.5,132.4 C0.4,169.4 0.4,280.3 2.5,317.3 C4.2,353.2 12.4,385 38.7,411.2 C65,437.4 96.7,445.6 132.6,447.4 C169.6,449.5 280.5,449.5 317.5,447.4 C353.4,445.7 385.2,437.5 411.4,411.2 C437.6,385 445.8,353.2 447.6,317.3 C449.7,280.3 449.7,169.5 447.6,132.5 Z M399.8,357 C392,376.6 376.9,391.7 357.2,399.6 C327.7,411.3 257.7,408.6 225.1,408.6 C192.5,408.6 122.4,411.2 93,399.6 C73.4,391.8 58.3,376.7 50.4,357 C38.7,327.5 41.4,257.5 41.4,224.9 C41.4,192.3 38.8,122.2 50.4,92.8 C58.2,73.2 73.3,58.1 93,50.2 C122.5,38.5 192.5,41.2 225.1,41.2 C257.7,41.2 327.8,38.6 357.2,50.2 C376.8,58 391.9,73.1 399.8,92.8 C411.5,122.3 408.8,192.3 408.8,224.9 C408.8,257.5 411.5,327.6 399.8,357 Z"
                        id="Shape"
                      />
                    </g>
                  </g>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
