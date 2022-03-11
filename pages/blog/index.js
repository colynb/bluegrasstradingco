import Link from 'next/link'
import client from '../../client'
import Layout from '../../components/Layout'

const Index = ({ posts }) => {
  const metaData = {
    title: 'Blog',
    description: '',
  }

  return (
    <Layout metaData={metaData}>
      <div className="max-w-3xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
        <div className="mt-12 lg:mt-0 lg:col-span-2 divide-y">
          {posts.length > 0 &&
            posts.map(
              ({
                _id,
                title = '',
                slug = '',
                publishedAt = '',
                excerpt = '',
              }) =>
                slug && (
                  <div key={_id} className="py-8">
                    <Link href={`/blog/${slug.current}`}>
                      <a className="text-2xl font-display mb-1 block ">
                        {title}
                      </a>
                    </Link>{' '}
                    <time dateTime={publishedAt} className="mb-6 block">
                      {new Date(publishedAt).toLocaleDateString(undefined, {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                    <p className="prose">{excerpt}</p>
                    <p>
                      <Link href={`/blog/${slug.current}`}>
                        <a className="block ">Read more →</a>
                      </Link>{' '}
                    </p>
                  </div>
                )
            )}
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const posts = await client.fetch(`
  *[_type == "post" && publishedAt < now()]|order(publishedAt desc)
`)
  return {
    props: {
      posts,
    },
  }
}

export default Index
