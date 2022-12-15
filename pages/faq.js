import ReactMarkdown from "react-markdown";
import client from "../client";
import Layout from "../components/Layout";

export default function FAQ({ faqs }) {
  const metaDescription = faqs
    .map((faq) => {
      return `${faq.question} ${faq.answer}`;
    })
    .join("; ");

  const metaData = {
    title: "FAQ",
    description: metaDescription,
  };

  return (
    <Layout metaData={metaData}>
      <div className="bg-gray-100">
        <div className="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-display text-3xl font-semibold uppercase text-gray-900">
              Frequently asked questions
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-xl text-gray-500">
              Can’t find the answer you’re looking for? Please reach out to us
              on our{" "}
              <a
                href="mailto:colyn@bluegrasstradingco.com"
                className="font-medium text-yellow-600 hover:text-yellow-500"
              >
                customer support
              </a>{" "}
              page.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="mx-auto max-w-3xl py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
          <div className="mt-12 lg:col-span-2 lg:mt-0">
            <dl className="space-y-12">
              {faqs.map((faq) => (
                <div key={faq.question}>
                  <dt className="text-lg font-medium leading-6 text-gray-900">
                    {faq.question}
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    <ReactMarkdown>{faq.answer}</ReactMarkdown>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const faqs = await client.fetch(
    `*[_type == "faq"]|order(_createdAt){question, answer}`
  );

  return {
    props: {
      faqs,
    },
  };
}
