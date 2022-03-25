import Layout from '../components/Layout'
import NewsletterSignup from '../components/NewsletterSignup'

const Community = () => {
  return (
    <Layout
      metaData={{
        title:
          'Subscribe to our newsletter or join a community on Facebook or Instagram',
        description: `Subscribe to our newsletter or join a community on Facebook or Instagram, and get access to project updates and special offers and be the first to know about new and upcoming products!`,
      }}
    >
      <div className="mx-auto max-w-3xl">
        <NewsletterSignup />
      </div>
    </Layout>
  )
}

export default Community
