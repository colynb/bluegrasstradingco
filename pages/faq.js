import client from '../client'
import Layout from '../components/Layout'

export default function FAQ({ faqs }) {
  const metaDescription = faqs
    .map((faq) => {
      return `${faq.question} ${faq.answer}`
    })
    .join('; ')
  return (
    <Layout title={'FAQ'} path="/faq" description={metaDescription}>
      <div className="bg-gray-100">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-display font-semibold uppercase text-gray-900">
              Frequently asked questions
            </h2>
            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
              Can’t find the answer you’re looking for? Please reach out to us
              on our{' '}
              <a
                href="https://shop.bluegrasstradingco.com/pages/contact"
                className="font-medium text-yellow-600 hover:text-yellow-500"
              >
                customer support
              </a>{' '}
              page.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="max-w-3xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
          <div className="mt-12 lg:mt-0 lg:col-span-2">
            <dl className="space-y-12">
              {faqs.map((faq) => (
                <div key={faq.question}>
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    {faq.question}
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const faqs = await client.fetch(
    `*[_type == "faq"]|order(_createdAt){question, answer}`
  )

  console.log(faqs)

  return {
    props: {
      faqs,
    },
  }
}
